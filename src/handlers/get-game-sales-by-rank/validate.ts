import isNumber from 'is-number';
import { ValidationError } from '../../validator/validate';


export default function validate(rank: unknown): void {
  if (![
    (r: unknown) => isNumber(r),
    (r: unknown) => !Number.isNaN(Number(r)),
    (r: unknown) => Number.isFinite(Number.parseInt(r as string, 10)),
    (r: unknown) => Number.isSafeInteger(Number.parseInt(r as string, 10)),
    (r: unknown) => Number.isInteger(Number.parseInt(r as string, 10)),
    (r: unknown) => /^\d{1,21}$/.test(r as string),
  ].every(pred => pred(rank))) {
    throw new ValidationError([
      { code: 'E_BAD_TYPE', path: 'rank' },
    ]);
  }

  const rankInt = Number.parseInt(rank as string, 10);
  if (rankInt <= 0) {
    throw new ValidationError([
      { code: 'E_MIN_LIMIT', path: 'rank' },
    ]);
  }

  if (rankInt > Number.MAX_SAFE_INTEGER) {
    throw new ValidationError([
      { code: 'E_MAX_LIMIT', path: 'rank' },
    ]);
  }
}
