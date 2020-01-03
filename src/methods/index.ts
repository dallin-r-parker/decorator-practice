import { Confirmable } from './decorator';

export class PizzaHut {
  toppings: any[] = [];

  @Confirmable('Are you sure?')
  @Confirmable('Are you super sure?')
  addTopping(topping = 'pepperoni') {
    this.toppings.push(topping);
  }
}
