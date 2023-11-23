// Copyright 2023 mineejo. All rights reserved. MIT license.

import { Color } from "../../color.ts";
import { matrixColor } from "../matrix_color.ts";

/**
 * ### Example
 *
 * ```ts
 * const red = new Color(false, 255, 0, 0);
 * console.log(deuteranomalyColor(red).components); // [204, 65.79, 0]
 * ```
 */
export function deuteranomalyColor(color: Color): Color {
  // deno-fmt-ignore
  return matrixColor(color, [
    0.8, 0.2, 0,
    0.258, 0.742, 0,
    0, 0.142, 0.858,
  ])
}
