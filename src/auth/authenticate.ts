import isNil from 'lodash.isnil';


export class InvalidAuthHeader extends Error {}

export function extractAuthHeader(
  header: string | undefined,
): string {
  if (isNil(header) || !header.startsWith('Bearer ') || header.length <= 'Bearer '.length) {
    throw new InvalidAuthHeader();
  }

  return header.slice('Bearer '.length);
}
