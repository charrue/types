/**
 * @example
 * ```
 * type Foo = { a: string; b: number; c: boolean; };
 * type A = ValueOf<Foo, "a">; // string
 * ```
 */
export type ValueOf<O, V extends keyof O = keyof O> = O[V];
