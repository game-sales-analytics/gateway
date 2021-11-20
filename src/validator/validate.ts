import type {
  Schema,
  ValidationErrorItem as JoiValidationErrorItem,
} from 'joi';
import isNil from 'lodash.isnil';


export interface ValidationErrorItem {
  code: string;
  path: string;
}

export class ValidationError extends Error {
  public constructor(
    public readonly items: ValidationErrorItem[],
  ) {
    super('form validation failed');
  }
}

type ErrorCodes = Record<string, { readonly code: string }>;


const errorCodes: ErrorCodes = {
  'any.invalid': {
    code: 'ERR_NOT_VALID',
  },
  'any.only': {
    code: 'ERR_NOT_MATCH',
  },
  'any.required': {
    code: 'ERR_REQUIRED',
  },
  'array.base': {
    code: 'ERR_BAD_TYPE',
  },
  'array.includes': {
    code: 'ERR_ARRAY_INCLUDES',
  },
  'array.min': {
    code: 'ERR_ARRAY_MIN',
  },
  'boolean.base': {
    code: 'ERR_BAD_TYPE',
  },
  'date.base': {
    code: 'ERR_BAD_TYPE',
  },
  'number.base': {
    code: 'ERR_BAD_TYPE',
  },
  'number.max': {
    code: 'ERR_NUMBER_MAX',
  },
  'number.min': {
    code: 'ERR_NUMBER_MIN',
  },
  'object.base': {
    code: 'ERR_BAD_TYPE',
  },
  'object.pattern.match': {
    code: 'ERR_BAD_TYPE',
  },
  'object.unknown': {
    code: 'ERR_UNKNOWN_KEY',
  },
  'string.base': {
    code: 'ERR_BAD_TYPE',
  },
  'string.dateAfter': {
    code: 'ERR_DATE_AFTER',
  },
  'string.dateBefore': {
    code: 'ERR_DATE_BEFORE',
  },
  'string.email': {
    code: 'ERR_BAD_PATTERN',
  },
  'string.empty': {
    code: 'ERR_EMPTY',
  },
  'string.ip': {
    code: 'ERR_BAD_TYPE',
  },
  'string.ipVersion': {
    code: 'ERR_BAD_TYPE',
  },
  'string.isoDate': {
    code: 'ERR_BAD_PATTERN',
  },
  'string.length': {
    code: 'ERR_BAD_LENGTH',
  },
  'string.max': {
    code: 'ERR_MAX_LENGTH',
  },
  'string.pattern.name': {
    code: 'ERR_BAD_PATTERN',
  },
  'string.patternedEmail': {
    code: 'ERR_BAD_PATTERN',
  },
  'string.safeFilename': {
    code: 'ERR_UNSAFE_FILENAME',
  },
  'string.strongPassword': {
    code: 'ERR_NOT_STRONG',
  },
  'string.trim': {
    code: 'ERR_NOT_TRIMMED',
  },
};

function mapJoiErrorToStandard(
  error: JoiValidationErrorItem,
): ValidationErrorItem {
  const mappedError = errorCodes[error.type];
  if (isNil(mappedError)) {
    throw new TypeError(`joi error type is not supported: ${error.type}`);
  }

  return {
    ...mappedError,
    path: error.context?.label as string,
  };
}

function validateOnSchema(
  schema: Schema,
  value: unknown,
): ValidationErrorItem[] | undefined {
  const { error: errors } = schema.validate(value, {
    abortEarly: false,
    convert: false,
    dateFormat: 'iso',
    errors: { render: false },
  });
  return errors?.details.map(error => mapJoiErrorToStandard(error));
}

export default function validate(schema: Schema, value: unknown): void {
  const errors = validateOnSchema(schema, value);
  if (!isNil(errors)) {
    throw new ValidationError(errors);
  }
}
