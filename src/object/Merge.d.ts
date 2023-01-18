/**
 * @example
 * ```ts
 *
 * type Foo = { a: string; b: number; c: boolean; };
 * type Bar = { a: number; b: string; };
 * type A = Merge<Foo, Bar>; // { a: number; b: string; c: boolean; }
 * ```
 */
export type Merge<T, P> = P & Omit<T, keyof P>;
