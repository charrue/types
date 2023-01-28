import { NonUndefined } from "../others/NonUndefined";

type DeepRequired<T> = T extends Array<infer U>
  ? DeepRequiredArray<U>
  : T extends object
  ? DeepRequiredObject<T>
  : T;

type DeepRequiredArray<T> = Array<DeepRequired<NonUndefined<T>>>;

type DeepRequiredObject<T> = {
  [P in keyof T]-?: DeepRequired<NonUndefined<T[P]>>;
};
