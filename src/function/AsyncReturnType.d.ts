import { AsyncFunction } from "./AsyncFunction";

/**
 * @example
 * ```ts
 *
 * type Foo = () => Promise<string>;
 * type A = AsyncReturnType<Foo>; // string
 * ```
 */
export type AsyncReturnType<T extends AsyncFunction> = Awaited<ReturnType<T>>;
