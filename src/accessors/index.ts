import { WithTax } from './decorator';

export class Cashier {
  total: number = 0;

  @WithTax(0.15)
  get price() {
    return this.total + 0.25;
  }
}