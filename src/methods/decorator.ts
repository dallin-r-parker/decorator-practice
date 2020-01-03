export function Confirmable(message: string) {
  return function(
    target: Object,
    key: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value;

    // important that we us a regular function, not => arrow syntax
    descriptor.value = function(...args: any[]) {
      // tslint:disable-next-line
      const allow = confirm(message);

      //  if (allow) {
      //    // this is why we need to us a regular function, so the "this"
      //    // context is within the scope of our decorator
      //    const result = original.apply(this, args);
      //    return result
      //  } else {
      //    return null;
      //  }
      // symblified version of lines 9-16
      return allow ? original.apply(this, args) : null;
    };
  };
}
