/**
 * @example
 * ```ts
 * type Foo = { a: string; b: number; c: boolean; };
 * type A = KeyOf<Foo>; // "a" | "b" | "c"
 * ```
 */
export type KeyOf<O> = keyof O;
