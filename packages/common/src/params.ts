// Required<Parameters<T>> could not be used as Type for ...args
// in AllParamsRequiredFun down below
export type AllParamsRequired<T extends (...args: unknown[]) => unknown> =
    T extends (...args: infer P) => unknown ? Required<P> : never;

export type AllParamsRequiredFun<T extends (...args: unknown[]) => unknown> = {
    (...args: AllParamsRequired<T>): ReturnType<T>;
};
