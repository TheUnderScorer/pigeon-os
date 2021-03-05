import { validateAsClass } from 'joiful';
import { ValidationError } from './ValidationError';
import { Constructor } from '@lib/types/common';

export const validate = <T>(input: any, classConstructor: Constructor<T>) => {
  const result = validateAsClass(input, classConstructor);

  if (result.error) {
    throw ValidationError.fromJoiError(result.error);
  }

  return result.value;
};
