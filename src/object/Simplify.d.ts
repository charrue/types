// fork from https://github.com/sindresorhus/type-fest/blob/main/source/simplify.d.ts

/**
 * Useful to flatten the type output to improve type hints shown in editors. And also to transform an interface into a type to aide with assignability.
 *
 * @example
 * ```
 * type PositionProps = {
 *   top: number;
 *   left: number;
 * };
 *
 * type SizeProps = {
 *   width: number;
 *   height: number;
 * };
 *
 * type Props = Simplify<PositionProps & SizeProps>;
 * ```
 */
export type Simplify<T> = { [K in keyof T]: T[K] };
