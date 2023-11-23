// Copyright 2023 mineejo. All rights reserved. MIT license.

import { Color } from "../../color.ts";
import { matrixColor } from "../matrix_color.ts";

/**
 * ### Example
 *
 * ```ts
 * const red = new Color(false, 255, 0, 0);
 * console.log(tritanomalyColor(red).components); // [246.58..., 0, 0]
 * ```
 */
export function tritanomalyColor(color: Color): Color {
  // deno-fmt-ignore
  return matrixColor(color, [
    0.967, 0.033, 0,
    0, 0.733, 0.267,
    0, 0.183, 0.817,
  ])
}
