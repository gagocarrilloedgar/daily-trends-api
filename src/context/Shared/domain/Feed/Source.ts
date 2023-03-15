import { EnumValueObject } from '../value-object/EnumValueObject';

export enum SourceTypes {
  ELMUNDO = 'ELMUNDO',
  ELPAIS = 'ELPAIS'
}

export class Source extends EnumValueObject<SourceTypes> {
  constructor(value: SourceTypes) {
    super(value, Object.values(SourceTypes));
  }

  static fromValue(value: SourceTypes): Source {
    return new Source(value);
  }

  static fromString(value: keyof typeof SourceTypes): Source {
    return new Source(SourceTypes[value]);
  }

  protected throwErrorForInvalidValue(value: SourceTypes): void {
    throw new Error(`Invalid source type: ${value}`);
  }
}
