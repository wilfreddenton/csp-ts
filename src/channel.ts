export default class Channel<T> {
  private buffer: Array<T> = []
  private waiters: Array<(t: T) => void> = []
  private closed = false
  private zero: T

  constructor(zero: T) {
    this.zero = zero
  }

  send(item: T): void {
    if (this.closed) {
      throw new Error('send on closed channel')
    } else if (this.waiters.length) {
      this.waiters.shift()!(item)
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
        this.waiters.push(resolve)
      }
    })
  }

  close(): void {
    this.closed = true
    this.buffer.length = 0
    while (this.waiters.length) {
      this.waiters.shift()!(this.zero)
    }
  }
}
