import * as TE from "fp-ts/TaskEither";

import { flow, pipe } from "fp-ts/function";

import { Either } from "fp-ts/Either";
/* eslint-disable functional/prefer-property-signatures */
import { date } from "fp-ts-std";
import { noAny } from "./object";

// ============================================================================
// #region Event
// ============================================================================
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
const getEventDetailLax = <K extends unknown>(ev: { detail: K; }) => ev.detail;
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
const getEventDetailValueLax = <V extends unknown>(ev: {
    detail: { value: V; };
}) => ev.detail.value;

const getNewValueLax = (_: unknown, nv?: string) => nv;

export const getNewValue = flow(getNewValueLax, noAny);
export const getEventDetailValue = flow(getEventDetailValueLax, noAny);
export const getEventDetail = flow(getEventDetailLax, noAny);

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
const getEventTargetLax = <K extends unknown>(ev: { target: K; }) => ev.target;
export const getEventTarget = flow(getEventTargetLax, noAny);

export const stopPropagation = <EV extends { stopPropagation(): void; }>(
    e: EV
) => {
    e.stopPropagation();
    return e;
};

export const preventDefault = <EV extends { preventDefault(): void; }>(
    e: EV
) => {
    e.preventDefault();
    return e;
};
// #endregion

// ============================================================================
// #region Number
// ============================================================================
const floorWith = (decimals: number) => (num: number) => {
    const dec = 10 ** decimals;
    return Math.floor(num * dec) / dec;
};

// according to https://en.wikipedia.org/wiki/Metric_prefix
const shortNumberAndSiPrefix = (decimals: number) => (value: number) => {
    const floor = floorWith(decimals),
        absValue = Math.abs(value);

    return absValue >= 1e9
        ? ([floor(value / 1e9), "G"] as const)
        : absValue >= 1e6
            ? ([floor(value / 1e6), "M"] as const)
            : absValue >= 1e3
                ? ([floor(value / 1e3), "k"] as const)
                : ([value, ""] as const);
};

export const stdShortNumber = shortNumberAndSiPrefix(1);

// ============================================================================
// #region DOM
// ============================================================================
export const emptyImageUrl =
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
// #endregion

// ============================================================================
// #region mapping
// ============================================================================
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const groupBy =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <T, K extends keyof any>(getKey: (item: T) => K) =>
        (list: T[]) =>
            list.reduce((previous, currentItem) => {
                const group = getKey(currentItem);
                if (!previous[group]) previous[group] = [];

                previous[group].push(currentItem);
                return previous;
            }, {} as Record<K, T[]>);
// #endregion

// ============================================================================
// #region Strings
// ============================================================================
// replace ${ ... } in strings w/o using eval
// because you know, eval is evil
// interpolateTemplate("${a}")({a: 1}) => "1"
// interpolateTemplate("${ a }")({a: 1}) => "1"
// interpolateTemplate("${ a } ${a}")({a: 1}) => "1 1"
// interpolateTemplate("${ a } ${a}")({b: 1}) => " "
const replaceTemplatePlaceholderRegex = /\$\{\s*(\w+?)\s*\}/g;
export const interpolateTemplate = (
    template: string,
    config: Record<string, { toString(): string; }>
) =>
    template.replace(
        replaceTemplatePlaceholderRegex,
        (_, match: string) => config[match]?.toString() ?? ""
    );
// #endregion

// ============================================================================
// #region Functions
// ============================================================================
type NU<T> = T | undefined | null;
type U<T> = T | undefined;

export function flowOptional<A extends ReadonlyArray<unknown>, B>(
    ab: NU<(...a: A) => B>
): U<(...a: A) => B>;

export function flowOptional<A extends ReadonlyArray<unknown>, B, C>(
    ab: NU<(...a: A) => B>,
    bc: NU<(b: B) => C>
): U<(...a: A) => C>;
export function flowOptional<A extends ReadonlyArray<unknown>, B, C, D>(
    ab: NU<(...a: A) => B>,
    bc: NU<(b: B) => C>,
    cd: NU<(c: C) => D>
): U<(...a: A) => D>;
export function flowOptional<A extends ReadonlyArray<unknown>, B, C, D, E>(
    ab: NU<(...a: A) => B>,
    bc: NU<(b: B) => C>,
    cd: NU<(c: C) => D>,
    de: NU<(d: D) => E>
): U<(...a: A) => E>;
export function flowOptional<A extends ReadonlyArray<unknown>, B, C, D, E, F>(
    ab: NU<(...a: A) => B>,
    bc: NU<(b: B) => C>,
    cd: NU<(c: C) => D>,
    de: NU<(d: D) => E>,
    ef: NU<(e: E) => F>
): U<(...a: A) => F>;
export function flowOptional<
    A extends ReadonlyArray<unknown>,
    B,
    C,
    D,
    E,
    F,
    G
>(
    ab: NU<(...a: A) => B>,
    bc: NU<(b: B) => C>,
    cd: NU<(c: C) => D>,
    de: NU<(d: D) => E>,
    ef: NU<(e: E) => F>,
    fg: NU<(f: F) => G>
): U<(...a: A) => G>;
export function flowOptional<
    A extends ReadonlyArray<unknown>,
    B,
    C,
    D,
    E,
    F,
    G,
    H
>(
    ab: NU<(...a: A) => B>,
    bc: NU<(b: B) => C>,
    cd: NU<(c: C) => D>,
    de: NU<(d: D) => E>,
    ef: NU<(e: E) => F>,
    fg: NU<(f: F) => G>,
    gh: NU<(g: G) => H>
): U<(...a: A) => H>;
export function flowOptional<
    A extends ReadonlyArray<unknown>,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I
>(
    ab: NU<(...a: A) => B>,
    bc: NU<(b: B) => C>,
    cd: NU<(c: C) => D>,
    de: NU<(d: D) => E>,
    ef: NU<(e: E) => F>,
    fg: NU<(f: F) => G>,
    gh: NU<(g: G) => H>,
    hi: NU<(h: H) => I>
): U<(...a: A) => I>;
export function flowOptional<
    A extends ReadonlyArray<unknown>,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J
>(
    ab: NU<(...a: A) => B>,
    bc: NU<(b: B) => C>,
    cd: NU<(c: C) => D>,
    de: NU<(d: D) => E>,
    ef: NU<(e: E) => F>,
    fg: NU<(f: F) => G>,
    gh: NU<(g: G) => H>,
    hi: NU<(h: H) => I>,
    ij: NU<(i: I) => J>
): U<(...a: A) => J>;

/* eslint-disable @typescript-eslint/no-explicit-any */
export function flowOptional(...args: any[]) {
    const [ab, bc, cd, de, ef, fg, gh, hi, ij] = args;
    switch (args.length) {
        case 1:
            return ab;
        case 2:
            return bc && ab
                ? function (this: any, ...a: any) {
                    return bc(ab.apply(this, a));
                }
                : undefined;
        case 3:
            return cd && bc && ab
                ? function (this: any, ...a: any) {
                    return cd(bc(ab.apply(this, a)));
                }
                : undefined;
        case 4:
            return de && cd && bc && ab
                ? function (this: any, ...a: any) {
                    return de(cd(bc(ab.apply(this, a))));
                }
                : undefined;
        case 5:
            return ef && de && cd && bc && ab
                ? function (this: any, ...a: any) {
                    return ef(de(cd(bc(ab.apply(this, a)))));
                }
                : undefined;
        case 6:
            return fg && ef && de && cd && bc && ab
                ? function (this: any, ...a: any) {
                    return fg(ef(de(cd(bc(ab.apply(this, a))))));
                }
                : undefined;
        case 7:
            return gh && fg && ef && de && cd && bc && ab
                ? function (this: any, ...a: any) {
                    return gh(fg(ef(de(cd(bc(ab.apply(this, a)))))));
                }
                : undefined;
        case 8:
            return hi && gh && fg && ef && de && cd && bc && ab
                ? function (this: any, ...a: any) {
                    return hi(gh(fg(ef(de(cd(bc(ab.apply(this, a))))))));
                }
                : undefined;
        case 9:
            return ij && hi && gh && fg && ef && de && cd && bc && ab
                ? function (this: any, ...a: any) {
                    return ij(hi(gh(fg(ef(de(cd(bc(ab.apply(this, a)))))))));
                }
                : undefined;
    }
    return;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

export function memoizeTaskEither<E, A>(
    ma: TE.TaskEither<E, A>
): TE.TaskEither<E, A> {
    let cache: Promise<Either<E, A>> | undefined;

    return () => {
        if (!cache) {
            cache = pipe(
                ma,
                TE.mapLeft((e) => {
                    cache = undefined;
                    return e;
                })
            )();
        }
        return cache;
    };
}
// #endregion

// ============================================================================
// #region Types
// ============================================================================
export type Simplify<T> = T extends Record<string | number | symbol, unknown>
    ? {
        [P in keyof T]: T[P];
    }
    : T;

// ============================================================================
// #region Datetime
// ============================================================================
export const dateFromUtcIsoString = date.parseDate;
export const dateToUtcIsoString = (d: Date) => d.toISOString();
// #endregion
