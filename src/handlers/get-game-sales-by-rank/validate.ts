import isNumber from 'is-number';
import { ValidationError } from '../../validator/validate';


export default function validate(rank: unknown): void {
  if (![
    (r: unknown) => isNumber(r),
    (r: unknown) => !Number.isNaN(Number(r)),
    (r: unknown) => Number.isFinite(Number.parseInt(r as string, 10)),
    (r: unknown) => Number.isSafeInteger(Number.parseInt(r as string, 10)),
    (r: unknown) => Number.isInteger(Number.parseInt(r as string, 10)),
  ].every(pred => pred(rank))) {
    throw new ValidationError([
      { code: 'E_BAD_TYPE', path: 'rank' },
    ]);
  }
}
