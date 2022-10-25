export class Foo {
  bar() {
    return 'bar'
  }
}

export function isCuteNumberIsGreeaterThan10(numbers:number[]):boolean
{
  const evenNumbers = findAllEvenNumbers(numbers)

  const maxNumber = findMaxNumber(evenNumbers)

  return isGreeaterThan10(maxNumber)
}

function findAllEvenNumbers(numbers:number[]):number[]
{
  return numbers.filter(number=>number%2===0)
}

function findMaxNumber(numbers:number[]):number
{
  return Math.max(...numbers)
}

function isGreeaterThan10(number:number):boolean
{
  return number>10
}
