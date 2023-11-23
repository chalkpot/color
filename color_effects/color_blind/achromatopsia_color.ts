// Copyright 2023 mineejo. All rights reserved. MIT license.

import { Color } from "../../color.ts";
import { matrixColor } from "../matrix_color.ts";

/**
 * ### Example
 *
 * ```ts
 * const red = new Color(false, 255, 0, 0);
 * console.log(achromatopsiaColor(red).components); // [76.24..., 76.24..., 76.24...]
 * ```
 */
export function achromatopsiaColor(color: Color): Color {
  // deno-fmt-ignore
  return matrixColor(color, [
    0.299, 0.588, 0.114,
    0.299, 0.588, 0.114,
    0.299, 0.588, 0.114,
  ])
}
