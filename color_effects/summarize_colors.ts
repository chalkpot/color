// Copyright 2023 mineejo. All rights reserved. MIT license.

import { Color } from "../color.ts";
import { Rgb } from "../color/mod.ts";

/**
 * ### Example
 *
 * ```ts
 * const red = new Color(false, 128, 0, 0);
 * const blue = new Color(false, 0, 0, 128);
 *
 * const purple = summarizeColors(red, blue);
 * console.log(purple.components); // [128, 0, 128]
 * ```
 */
export function summarizeColors(first: Color, second: Color): Color {
  const newComponents: Rgb = first.components.map((_, i: number) =>
    first.components[i] + second.components[i]
  ) as Rgb;

  return new Color(false, ...newComponents);
}
