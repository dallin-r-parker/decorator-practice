# Learning about Typescript Decorators

## Reference: [The Magic of Typescript Decorators](https://www.youtube.com/watch?v=O6A-u_FoEX8)

### What can be "decoratored" in Typescript
- Class Definitions
- Properties
- Methods
- Accessors
- Parameters

### Examples of how to impliment decorators for each of these are inside of src with a matching directory name.

> ## The function that you implement be dependant on the 'thing' you're decorating, in other words the function arguments required to decorate a class will be different than the arguments required for decorating a method

# Notes
## Class Definitions

Example: `src > class-definition` <br>
We're creating a `@Frozen` decorator that makes it so a class can't be extended.
When you're extending a class with inheritance, be careful with __Decorator__ because the __inherited class WON'T__  actually receive the functionality of the __Decorator__.

The example freezes the __Class Definition__ so if a __new instance__ of the class is created it would not be frozen, so the __MAIN__ purpose of the the decorator is to prevent a class from being treated as a __superclass__

---
## Properties
Example: `src > propeerties` <br>
Using the factory pattern, which is just a function that returns the decorator. This is recommended because it gives the flexibility to pass in custom data. The specific function signature in this example takes a `target: Object` and `key: string | symbol` as it's arguments.

> ### __Target:__ the parent class <br>
> ### __Key:__ the property that will be decorated

## Methods
Example: `src > methods` <br>
We're creating a `@Confirmable` decorator that allows for the functionality of having the user confirm that "toppings" being added. <br>
__Decorators are composable__ so we can stack them on top of eachother and they'll be applied from ***Top to Bottom*** <br>
We're using the Factory Pattern again, but this time we're setting it up to accept custom data. <br>
The Method decorator takes three arguments: `target: Object`, `key: string | symbol` and `descriptor: PropertyDescriptor`.

> ### __Target:__ the parent class <br>
> ### __Key:__ the name of the function <br>
> ### __Descriptor:__ is the actual function itself. <br>

## Accessor
Example: `src > methods` <br>
An accessor is defined as a "getter" or "setter" with "getters" you can't pass in arguments, so with a decorator we can fix this.