// fork from https://github.com/sindresorhus/type-fest/blob/main/source/set-required.d.ts
import { Simplify } from "./Simplify";

/**
 * Create a type that makes the given keys required.
 *
 * @example
 * ```
 * type Foo = { a?: number; b: string; c?: boolean; }
 *
 * type SomeRequired = SetRequired<Foo, 'b' | 'c'>;
 * // { a?: number; b: string; c: boolean; }
 * ```
 */
export type SetRequired<T, Keys extends keyof T> = Simplify<
  // Pick just the keys that are optional from the base type.
  Omit<T, Keys> &
    // Pick the keys that should be required from the base type and make them required.
    Required<Pick<T, Keys>>
>;
