// Copyright 2023 mineejo. All rights reserved. MIT license.

import { Color } from "../color.ts";
import { Rgb } from "../color/mod.ts";

/**
 * ### Example
 *
 * ```ts
 * const black = new Color(false, 0, 0, 0);
 *
 * const white = invertColor(black);
 * console.log(white.components); // [255, 255, 255]
 * ```
 */
export function invertColor(color: Color): Color {
  const newComponents: Rgb = color.components.map((component: number) =>
    255 - component
  ) as Rgb;

  return new Color(false, ...newComponents);
}
