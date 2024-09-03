let apple = 5

let speed: string = 'fast'
let hasName: boolean = false
let nothingMuch: null = null
let nothing: undefined = undefined

//built in objects
let now: Date = new Date()

//Array
let myarry: string[] = ['q', 'b', 'c']

//Classes
class Car {

}

const car: Car = new Car()

//Objects literals

let point: { x: number, y: number } = { x: 10, y: 20 }

//Functions
const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}

//When to use annotation
//1. when calling a function that returns type of 'any'

const jsonData = '{"name": "John", "age": 30}'

const user: { name: string; age: number } = JSON.parse(jsonData)
console.log(user) //OK