import { FunctionN } from "fp-ts/function";

import { prependParam } from "./function";

export const fill = <T>(length: number, fillFn: FunctionN<[number], T>) =>
    Array.from({ length }, prependParam(fillFn));
