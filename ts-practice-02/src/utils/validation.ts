/**
 * It takes an object with a value property and a number of optional properties, and returns true if
 * the value is valid, false otherwise
 * @param {Validate} validateInput - Validate - This is the object that we will pass to the function.
 * @returns A function that takes in a Validate object and returns a boolean.
 */
export interface Validate {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  max?: number;
  min?: number;
}

export const validation = (validateInput: Validate) => {
  let isValid = true;
  if (validateInput.required) {
    isValid = isValid && validateInput.value.toString().trim().length !== 0;
  }
  if (
    validateInput.minLength != null &&
    typeof validateInput.value === "string"
  ) {
    isValid = isValid && validateInput.value.length >= validateInput.minLength;
  }
  if (
    validateInput.maxLength != null &&
    typeof validateInput.value === "string"
  ) {
    isValid = isValid && validateInput.value.length <= validateInput.maxLength;
  }

  if (validateInput.min != null && typeof validateInput.value === "number") {
    isValid = isValid && validateInput.value >= validateInput.min;
  }
  if (validateInput.max != null && typeof validateInput.value === "number") {
    isValid = isValid && validateInput.value <= validateInput.max;
  }

  return isValid;
};
