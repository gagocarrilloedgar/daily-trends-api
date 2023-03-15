import { v4 as uuid } from 'uuid';
import validate from 'uuid-validate';
import { InvalidArgumentError } from './InvalidArgumentError';

// We know we are introducig external dependencies in our domain layer but its ok since this is a business
// decision and we we'll encapsulate it in a value object
export class Uuid {
  readonly value: string;

  constructor(value: string) {
    this.isValidUuid(value);
    this.value = value;
  }

  static generate(): Uuid {
    return new Uuid(uuid());
  }

  private isValidUuid(id: string): void {
    if (!validate(id)) {
      throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${id}>`);
    }
  }

  toString(): string {
    return this.value;
  }
}
