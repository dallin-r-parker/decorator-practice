export function Emoji() {
  return function(target: Object, key: string | symbol) {
    let val = target[key];

    const getter = () => {
      return val;
    };

    const setter = next => {
      console.log(`updating flavor...`);
      val = `🍦 ${next} 🍦`;
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}
