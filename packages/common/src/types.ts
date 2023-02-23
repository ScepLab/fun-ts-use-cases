export type IfAny<T, Y, N> = 0 extends 1 & T ? Y : N;
export type NoAny<T> = IfAny<T, unknown, T>;

// https://stackoverflow.com/questions/44480644/string-union-to-string-array
type ValueOf<T> = T[keyof T];

type NonEmptyArray<T> = [T, ...T[]];

type MustInclude<T, U extends T[]> = [T] extends [ValueOf<U>] ? U : never;

export const stringUnionToArray =
    <T>() =>
    <U extends NonEmptyArray<T>>(...elements: MustInclude<T, U>) =>
        elements;
