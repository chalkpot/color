// Copyright 2023 mineejo. All rights reserved. MIT license.

import { Color } from "../../color.ts";
import { matrixColor } from "../matrix_color.ts";

/**
 * ### Example
 *
 * ```ts
 * const red = new Color(false, 255, 0, 0);
 * console.log(protanopiaColor(red).components); // [144.58..., 142.29, 0]
 * ```
 */
export function protanopiaColor(color: Color): Color {
  // deno-fmt-ignore
  return matrixColor(color, [
    0.567, 0.433, 0,
    0.558, 0.442, 0,
    0, 0.242, 0.758,
  ])
}
