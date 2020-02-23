import { sleep } from 'protolude'
import { BufferedChannel, Channel } from '../src/channel'

const blocks = async <R>(a: Promise<R>): Promise<void> => {
  const blockingIfLongerThan = 50
  expect(await Promise.race([a, sleep(blockingIfLongerThan)])).toBe(blockingIfLongerThan)
}

test('max length buffered channel', async () => {
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

test('unbuffered channel', async () => {
  const c = new Channel<number>(0)

  await blocks(c.send(1))
  expect(await c.receive()).toBe(1)
  await blocks(c.send(2))
  await blocks(c.send(3))
  expect(await c.receive()).toBe(2)
  const r = c.receive()
  const r1 = c.receive()
  const r2 = c.receive()
  await c.send(4)
  await c.send(5)
  expect(await Promise.all([r, r1, r2])).toStrictEqual([3, 4, 5])

  const s = c.send(1)
  const s1 = c.send(1)
  c.close()
  await Promise.all([s, s1])
})

test('set length buffered channel', async () => {
  const c = new BufferedChannel<number>(0, 3)

  await c.send(1)
  await c.send(2)
  await c.send(3)
  await blocks(c.send(4))
  expect(await c.receive()).toBe(1)
  await blocks(c.send(5))
  expect(await c.receive()).toBe(2)
  expect(await c.receive()).toBe(3)
  await c.send(6)
  await blocks(c.send(7))
  expect(await c.receive()).toBe(4)
  expect(await c.receive()).toBe(5)
  expect(await c.receive()).toBe(6)
  expect(await c.receive()).toBe(7)
})
