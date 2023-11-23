// Copyright 2023 mineejo. All rights reserved. MIT license.

import { Color } from "../../color.ts";
import { matrixColor } from "../matrix_color.ts";

/**
 * ### Example
 *
 * ```ts
 * const red = new Color(false, 255, 0, 0);
 * console.log(tritanopiaColor(red).components); // [242.25, 0, 0]
 * ```
 */
export function tritanopiaColor(color: Color): Color {
  // deno-fmt-ignore
  return matrixColor(color, [
    0.95, 0.05, 0,
    0, 0.433, 0.567,
    0, 0.475, 0.525,
  ])
}
