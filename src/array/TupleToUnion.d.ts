/**
 * @example
 * ```ts
 * type A = TupleToUnion<[1, 2, 3]>; // 1 | 2 | 3
 *
 * const destinations = ['a', 'b', 'c'] as const;
 * type Destination = TupleToUnion<typeof destinations>;
 * ```
 */
export type TupleToUnion<T> = T extends readonly unknown[] ? T[number] : never;
