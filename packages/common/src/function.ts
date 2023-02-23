import { FunctionN, flow } from "fp-ts/function";

export const prependParam =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <PARAMS extends any[], R>(f: FunctionN<PARAMS, R>) =>
        (_: unknown, ...params: PARAMS) =>
            f(...params);

export const prependParams = flow(prependParam, prependParam);
