import { IsEqual } from "../others";

/**
 * @example
 * ```ts
 *
 *type hasRed<array extends any[]> = Includes<array, 'red'>;
 * ```
 */
export type Includes<Arr extends readonly any[], V> = Arr extends readonly [Arr[0], ...infer rest]
  ? IsEqual<Arr[0], V> extends true
    ? true
    : Includes<rest, V>
  : false;
