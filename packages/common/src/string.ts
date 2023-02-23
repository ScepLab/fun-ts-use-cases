import * as S from "fp-ts/string";

import { join as arrayJoin } from "fp-ts-std/Array";
import { flow } from "fp-ts/function";

export const join = arrayJoin("");
export const joinWithWS = arrayJoin(" ");
export const joinWithDash = arrayJoin("-");

export const shortLocationName = flow(S.replace(/[a-z]/g, ""), S.toLowerCase);
