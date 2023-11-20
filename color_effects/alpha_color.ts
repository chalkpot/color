// Copyright 2023 mineejo. All rights reserved. MIT license.

import { Rgb, Rgba } from "../color/mod.ts";
import { percent } from "../util.ts";

/**
 * ### Example
 *
 * ```ts
 * const firstColor = alphaColor([255, 0, 0], true, 90);
 * console.log(firstColor); // [255, 0, 0, 90];
 *
 * const secondColor = alphaColor([0, 255, 0], true);
 * console.log(secondColor); // [0, 255, 0, 100];
 *
 * const thirdColor = alphaColor(secondColor, false);
 * console.log(thirdColor); // [0, 255, 0];
 * ```
 */
export function alphaColor(
  components: Rgb | Rgba,
  alpha: boolean,
  percentage = 100,
): Rgba | Rgb {
  components = [...components];

  if (alpha && components.length === 3) components.push(percent(percentage));
  else if (components.length === 4) components.pop();

  return components;
}
