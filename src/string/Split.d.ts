// fork from https://github.com/sindresorhus/type-fest/blob/main/source/split.d.ts

/**
 * @example
 * ```ts
 *
 * type A = Split<"foo.bar.baz", ".">; // ["foo", "bar", "baz"]
 * ```
 */
export type Split<
  S extends string,
  Delimiter extends string,
> = S extends `${infer Head}${Delimiter}${infer Tail}`
  ? [Head, ...Split<Tail, Delimiter>]
  : S extends Delimiter
  ? []
  : [S];
// - 如果 S 是以 Delimiter 分隔的字符串
//   - 则可以分解为 Head + Delimiter + Tail
//   - 先返回Head, 再递归处理Tail(Tail也是以Delimiter分隔的字符串)
// - 如果 S 不是以 Delimiter 分隔的字符串
//   - 如果是 Delimiter自身
//     - 如果是, 则返回空数组
//   - 否则S就是 一个非 Delimiter 的字符串, 直接返回
