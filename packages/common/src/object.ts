import { NoAny } from "./types";

export const isDefined = <T>(x: T): x is NonNullable<T> =>
    // eslint-disable-next-line eqeqeq
    x != undefined && x !== undefined;

export const isNotDefined = <T>(x: T | undefined): x is undefined =>
    // eslint-disable-next-line eqeqeq
    x == undefined || x === undefined;

export const isNull = <T>(x: T): x is NonNullable<T> =>
    // eslint-disable-next-line eqeqeq
    x == null && x === null;

export const isNotNull = <T>(x: T | null): x is null =>
    // eslint-disable-next-line eqeqeq
    x != null && x !== null;

export const isNullOrNotDefined = isNull || isNotDefined;
export const isNotNullOrDefined = isNotNull || isDefined;

export const noAny = <P>(p: P): NoAny<P> => p as any;
