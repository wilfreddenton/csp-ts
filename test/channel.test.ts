import { BufferedChannel } from '../src/channel'

test('receive from channel', async () => {
  const c = new BufferedChannel<number>(0)

  await c.send(1)
  await c.send(2)
  expect(await c.receive()).toBe(1)
  expect(await c.receive()).toBe(2)

  const p = c.receive()
  await c.send(3)
  expect(await p).toBe(3)

  c.close()
  expect(await c.receive()).toBe(0)
  expect(await c.receive()).toBe(0)
  expect(c.send(4)).rejects.toThrow('send on closed channel')
})
