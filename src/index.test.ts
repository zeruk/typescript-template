import { describe, it, expect } from '@jest/globals'
import { sendApples } from './index'

describe('Index file - sendApples', () => {
  it('With name', () => {
    expect(sendApples(3, 'Ann')).toBe('Ann recieved 3 apples I hope...')
  })
  it('Without name', () => {
    expect(sendApples(1000)).toBe('Just sent 1000 apples to nowhere')
  })
})
