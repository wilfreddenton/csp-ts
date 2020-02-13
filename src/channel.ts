import { EventEmitter } from 'eventemitter3'

interface ChannelEvents<T> {
  send: [T]
}

class Emitter<T> extends EventEmitter<ChannelEvents<T>> {}

export default class Channel<T> {
  private buffer: Array<T>
  private emitter: Emitter<T>
  private zero: T
  private closed = false

  constructor(zero: T) {
    this.buffer = []
    this.emitter = new Emitter<T>()
    this.zero = zero
  }

  send(item: T): void {
    if (this.emitter.listenerCount('send')) {
      this.emitter.emit('send', item)
    } else {
      this.buffer.push(item)
    }
  }

  receive(): Promise<T> {
    return new Promise((resolve) => {
      if (this.closed) {
        resolve(this.zero)
      } else if (this.buffer.length) {
        resolve(this.buffer.shift())
      } else {
        this.emitter.once('send', (item) => resolve(item))
      }
    })
  }

  close(): void {
    this.closed = true
    this.send(this.zero)
    this.buffer.length = 0
  }
}
