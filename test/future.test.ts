import Future from '../src/future'

test('failed future throws', async () => {
  const future = new Future()
  try {
    future.reject('err')
    await future.get()
  } catch (e) {
    expect(e).toBe('err')
  }
})

test('successful future resolves to value', async () => {
  const future = new Future()
  future.resolve('win')
  const res = await future.get()
  expect(res).toBe('win')
})
