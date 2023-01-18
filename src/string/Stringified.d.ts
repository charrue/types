// fork from https://github.com/sindresorhus/type-fest/blob/main/source/stringified.d.ts

/**
 * @example
 * ```ts
 *
 * type A = Stringified<{ a: number; b: boolean }>; // { a: string; b: string; }
 * ```
 */
export type Stringified<O> = { [K in keyof O]: string };
