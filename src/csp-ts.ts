import { EventEmitter } from 'eventemitter3'

interface ChannelEvents<T> {
  send: [T]
}

class Emitter<T> extends EventEmitter<ChannelEvents<T>> {}

export class Channel<T> {
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
    if (this.closed) {
      throw new Error('send on closed channel')
    } else if (this.emitter.listenerCount('send')) {
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
    this.send(this.zero)
    this.buffer.length = 0
    this.closed = true
  }
}

export class Future<L, R> {
  private promise: Promise<R>
  reject: (l: L) => void
  resolve: (r: R) => void

  constructor() {
    this.resolve = (): void => undefined
    this.reject = (): void => undefined
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve
      this.reject = reject
    })
  }

  get(): Promise<R> {
    return this.promise
  }
}
