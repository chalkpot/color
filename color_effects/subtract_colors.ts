// Copyright 2023 mineejo. All rights reserved. MIT license.

import { Color } from "../color.ts";
import { Rgb } from "../color/mod.ts";

/**
 * ### Example
 *
 * ```ts
 * const purple = new Color(false, 128, 0, 128);
 * const blue = new Color(false, 0, 0, 128);
 *
 * const red = subtractColors(purple, blue);
 * console.log(red.components); // [128, 0, 0]
 * ```
 */
export function subtractColors(first: Color, second: Color): Color {
  const newComponents: Rgb = first.components.map((_, i: number) =>
    first.components[i] - second.components[i]
  ) as Rgb;

  return new Color(false, ...newComponents);
}
