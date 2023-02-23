type ResponseWithStatus = { status: number };

type DiscriminateResult<
    T extends number,
    R extends ResponseWithStatus
> = Extract<R, { status: T }>;

type ResponseOk<T extends ResponseWithStatus> = DiscriminateResult<
    200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 226,
    T
>;

type ResponseClientError<T extends ResponseWithStatus> = DiscriminateResult<
    | 400
    | 401
    | 402
    | 403
    | 404
    | 405
    | 406
    | 407
    | 408
    | 409
    | 410
    | 411
    | 412
    | 413
    | 414
    | 415
    | 416
    | 417
    | 421
    | 422
    | 423
    | 424
    | 425
    | 426
    | 428
    | 429
    | 431
    | 451
    | 418
    | 420
    | 444
    | 449
    | 499,
    T
>;

type ResponseServerError<T extends ResponseWithStatus> = DiscriminateResult<
    500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 | 509 | 510 | 511,
    T
>;

export type ResponseNotOk<T extends ResponseWithStatus> =
    | ResponseClientError<T>
    | ResponseServerError<T>;

export const isOkResponse = <R extends ResponseWithStatus>(
    r: R
): r is ResponseOk<R> => {
    const { status } = r;
    return (
        status === 200 ||
        status === 201 ||
        status === 202 ||
        status === 203 ||
        status === 204 ||
        status === 205 ||
        status === 206 ||
        status === 207 ||
        status === 208 ||
        status === 226
    );
};

export const isNotOkResponse = <
    R extends {
        status: number;
    }
>(
    r: R
): r is ResponseNotOk<R> => {
    const { status } = r;
    return status >= 400 && status < 600;
};
