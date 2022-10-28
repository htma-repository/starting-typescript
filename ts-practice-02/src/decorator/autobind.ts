// * AutoBind 'this' decorator
/**
 * It takes a property descriptor and returns a new property descriptor that returns the original
 * function bound to the original object
 * @param {T} _ - T, _2: U
 * @param {U} _2 - U
 * @param {PropertyDescriptor} descriptor - PropertyDescriptor
 * @returns A function that takes in 3 arguments.
 */
export const AutoBindDecorator = <T, U>(
  _: T,
  _2: U,
  descriptor: PropertyDescriptor
) => {
  const { value } = descriptor;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      return value.bind(this);
    },
  };
  return adjDescriptor;
};
