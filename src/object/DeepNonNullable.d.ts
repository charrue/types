export type DeepNonNullable<T> = T extends Array<infer U>
  ? DeepNonNullableArray<U>
  : T extends object
  ? DeepNonNullableObject<T>
  : T;

type DeepNonNullableArray<T> = Array<DeepNonNullable<NonNullable<T>>>;

type DeepNonNullableObject<T> = { [P in keyof T]-?: DeepNonNullable<NonNullable<T[P]>> };
