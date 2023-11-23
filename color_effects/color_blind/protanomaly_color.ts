// Copyright 2023 mineejo. All rights reserved. MIT license.

import { Color } from "../../color.ts";
import { matrixColor } from "../matrix_color.ts";

/**
 * ### Example
 *
 * ```ts
 * const red = new Color(false, 255, 0, 0);
 * console.log(protanomalyColor(red).components); // [208.33..., 84.91..., 0]
 * ```
 */
export function protanomalyColor(color: Color): Color {
  // deno-fmt-ignore
  return matrixColor(color, [
    0.817, 0.183, 0,
    0.333, 0.667, 0,
    0, 0.125, 0.875,
  ])
}
