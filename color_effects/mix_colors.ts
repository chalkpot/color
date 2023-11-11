// Copyright 2023 mineejo. All rights reserved. MIT license.

import { Color } from "../color.ts";
import { Rgb } from "../color/mod.ts";
import { percent } from "../util.ts";

/**
 * ### Example
 *
 * ```ts
 * const black = new Color(false, 0, 0, 0);
 * const white = new Color(false, 255, 255, 255);
 *
 * const grey = mixColors(black, white, 50);
 * console.log(grey.components); // [127.5, 127.5, 127.5]
 *
 * const _black = mixColors(black, white, 0);
 * console.log(_black.components); // [0, 0, 0]
 *
 * const _white = mixColors(black, white, 100);
 * console.log(_white.components); // [255, 255, 255]
 * ```
 */
export function mixColors(
  first: Color,
  second: Color,
  percentage: number,
): Color {
  percentage = percent(percentage) / 100;
  const newComponents: Rgb = first.components.map((_, i: number) =>
    first.components[i] * (1 - percentage) + second.components[i] * percentage
  ) as Rgb;

  return new Color(false, ...newComponents);
}
