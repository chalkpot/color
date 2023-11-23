// Copyright 2023 mineejo. All rights reserved. MIT license.

import { Color } from "../../color.ts";
import { matrixColor } from "../matrix_color.ts";

/**
 * ### Example
 *
 * ```ts
 * const red = new Color(false, 255, 0, 0);
 * console.log(deuteranopiaColor(red).components); // [159.37..., 178.5, 0]
 * ```
 */
export function deuteranopiaColor(color: Color): Color {
  // deno-fmt-ignore
  return matrixColor(color, [
    0.625, 0.375, 0,
    0.7, 0.3, 0,
    0, 0.3, 0.7,
  ])
}
