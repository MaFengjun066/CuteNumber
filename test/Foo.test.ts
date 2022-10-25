import {Foo,isCuteNumberIsGreeaterThan10} from '../src/Foo'

describe('Foo', () => {
  it('bar', () => {
    expect(new Foo().bar()).toEqual('bar')
  })
})

describe('CuteNumber', ()=>{
  it('should return true given number: 2,4,6,8,10,12,24',()=>{
    const numbers = [2,4,6,8,10,12,24]

    const actual = isCuteNumberIsGreeaterThan10(numbers)

    expect(actual).toBeTruthy()
  })

  it('should return false given number: 2,4,6,8,10',()=>{
    const numbers = [2,4,6,8,10]

    const actual = isCuteNumberIsGreeaterThan10(numbers)

    expect(actual).toBeFalsy()
  })

  it('should return false given number: 2,4,6,8',()=>{
    const numbers = [2,4,6,8]

    const actual = isCuteNumberIsGreeaterThan10(numbers)

    expect(actual).toBeFalsy()
  })

  it('should return false given number: 1,3,5,7,9',()=>{
    const numbers = [1,3,5,7,9]

    const actual = isCuteNumberIsGreeaterThan10(numbers)

    expect(actual).toBeFalsy()
  })
})
