// Copyright 2023 mineejo. All rights reserved. MIT license.

import { Rgb, Rgba } from "../color/mod.ts";
import { assertEquals } from "../dev_deps.ts";
import { alphaColor } from "./alpha_color.ts";

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
Deno.test("alpha color function correct", () => {
  const redColorComponents: Rgb = [255, 0, 0];
  const rgb: Rgb | Rgba = alphaColor([...redColorComponents, 100], false);
  const rgba: Rgb | Rgba = alphaColor(rgb, true);

  assertEquals(rgb, redColorComponents, `"rgb"`);
  assertEquals(rgba, [...redColorComponents, 100], `"rgba"`);
  assertEquals(
    alphaColor(rgb, true, 90),
    [...redColorComponents, 90],
    `"alphaColor(rgb, true, 90)"`,
  );
});
