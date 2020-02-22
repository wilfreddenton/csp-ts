class BufferedChannel<T> {
  private buffer: { item: T; resolveSender?: () => void }[] = []
  private waiters: ((t: T) => void)[] = []
  private closed = false
  private zero: T
  private slotsRemaining: number

  constructor(zero: T, length: number = Number.MAX_SAFE_INTEGER) {
    this.zero = zero
    this.slotsRemaining = length
  }

  send(item: T): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.closed) {
        reject(Error('send on closed channel'))
      } else if (this.waiters.length) {
        resolve(this.waiters.shift()!(item))
      } else {
        if (this.slotsRemaining) {
          this.slotsRemaining -= 1
          this.buffer.push({ item })
          resolve()
        } else {
          this.buffer.push({ item, resolveSender: resolve })
        }
      }
    })
  }

  receive(): Promise<T> {
    return new Promise((resolve) => {
      if (this.closed) {
        resolve(this.zero)
      } else if (this.buffer.length) {
        this.slotsRemaining += 1
        const { item, resolveSender } = this.buffer.shift()!
        if (resolveSender !== undefined) {
          resolveSender()
        }
        resolve(item)
      } else {
        this.waiters.push(resolve)
      }
    })
  }

  close(): void {
    this.closed = true
    this.buffer.forEach(({ resolveSender }) => {
      if (resolveSender !== undefined) {
        resolveSender()
      }
    })
    this.buffer.length = 0
    while (this.waiters.length) {
      this.waiters.shift()!(this.zero)
    }
  }
}

class Channel<T> extends BufferedChannel<T> {
  constructor(zero: T) {
    super(zero, 0)
  }
}

export { BufferedChannel, Channel }
