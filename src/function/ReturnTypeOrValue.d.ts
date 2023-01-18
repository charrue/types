import type { AnyFunction } from "./AnyFunction";

export type ReturnTypeOrValue<T> = T extends AnyFunction ? ReturnType<T> : T;
