// Copyright 2023 mineejo. All rights reserved. MIT license.

import { Color } from "../color.ts";

/**
 * ### Example
 *
 * ```ts
 * const red = new Color(false, 255, 0, 0);
 * const white = new Color(false, 255, 255, 255);
 *
 * const grey = discolor(red);
 * console.log(grey.components); // [85, 85, 85]
 *
 * const _white = discolor(white);
 * console.log(_white.components); // [255, 255, 255]
 * ```
 */
export function discolor(color: Color): Color {
  const grey: number = (color.red + color.green + color.blue) /
    color.components.length;

  return new Color(false, grey, grey, grey);
}
