import { Frozen } from './decorator';

@Frozen
export default class Employee {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

console.log(`Is Employee extendable?: `, Object.isFrozen(Employee));

// class Company extends Employee {
// this would created an error cause the "@Frozen"
// decorator is making the constructor "readonly"
// }
