import Channel from '../src/channel'

test('receive from channel', async () => {
  const c = new Channel<number>(0)

  c.send(1)
  c.send(2)
  expect(await c.receive()).toBe(1)
  expect(await c.receive()).toBe(2)

  const p = c.receive()
  c.send(3)
  expect(await p).toBe(3)

  c.close()
  expect(await c.receive()).toBe(0)
  expect(await c.receive()).toBe(0)
})
