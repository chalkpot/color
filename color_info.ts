// Copyright 2023 mineejo. All rights reserved. MIT license.

import { colors } from "./deps.ts";
import { Rgb } from "./color/mod.ts";

/**
 * `ColorInfo` retrieves similar color information
 * from HTML colors and the [Colors] dependencies.
 *
 * [Colors]: https://github.com/chalkpot/colors
 *
 * ### Example
 *
 * ```ts
 * const unknownColor = new ColorInfo(255, 0, 0);
 * console.log(unknownColor.name); // "red"
 * console.log(unknownColor.localize("ru-RU")); // "красный"
 * ```
 */
export class ColorInfo {
  public readonly name: string | undefined;
  public readonly localize: (localeCode: string) => string | undefined;

  public constructor(...components: Rgb) {
    let minDiff = Infinity;
    let colorName = "";

    for (const color in colors) {
      const rgb: number[] = colors[color as keyof typeof colors].rgb;
      const diff: number = this.colorDiff(components, rgb);
      if (diff > minDiff) continue;

      minDiff = diff;
      colorName = color;
    }

    const color = colors[colorName as keyof typeof colors];
    this.name = color.name;
    this.localize = color.localize;
  }

  private colorDiff(firstRgb: number[], secondRgb: number[]) {
    const rDiff: number = secondRgb[0] - firstRgb[0];
    const gDiff: number = secondRgb[1] - firstRgb[1];
    const bDiff: number = secondRgb[2] - firstRgb[2];
    return Math.sqrt(rDiff * rDiff + gDiff * gDiff + bDiff * bDiff);
  }
}
