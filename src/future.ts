export default class Future<L, R> {
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
