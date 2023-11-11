// Copyright 2023 mineejo. All rights reserved. MIT license.

import { ColorComponent } from "./color_component.ts";
import { Rgb } from "./color/mod.ts";
import { percent } from "./util.ts";

/**
 * [Color] contains the components, red, green, blue.
 *
 * [Color]: https://en.wikipedia.org/wiki/RGB_color_model
 *
 * ### Example
 *
 * ```ts
 * const red = new Color(false, 255, 0, 0)
 * const blue = new Color(true, 0, 0, 100);
 * ```
 */
export class Color {
  public readonly components: Rgb = [0, 0, 0];
  public readonly red: number = 0;
  public readonly green: number = 0;
  public readonly blue: number = 0;

  /**
   * @param percentage
   * Use percentages instead of component range, if true.
   *
   * @param components
   */
  public constructor(percentage: boolean = false, ...components: Rgb) {
    const [red, green, blue]: Rgb = percentage
      ? this.rgbPercent(...components)
      : components;

    this.red = new ColorComponent(red).lightness;
    this.green = new ColorComponent(green).lightness;
    this.blue = new ColorComponent(blue).lightness;
    this.components = [this.red, this.green, this.blue];
  }

  private rgbPercent(...components: Rgb): Rgb {
    return [
      (percent(components[0]) / 100) * 255,
      (percent(components[1]) / 100) * 255,
      (percent(components[2]) / 100) * 255,
    ];
  }
}
