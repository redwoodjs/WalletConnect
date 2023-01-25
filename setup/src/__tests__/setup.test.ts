import { command, description, builder, handler } from '../setup'

test('standard exports', () => {
  expect(command).toEqual('ethereum')
  expect(description).toMatch(/Ethereum/)
  expect(typeof builder).toEqual('function')
  expect(typeof handler).toEqual('function')
})
