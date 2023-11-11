// Copyright 2023 mineejo. All rights reserved. MIT license.

/**
 * [ColorComponent] can be red, green or blue, being the lightness
 * of that color.
 *
 * [ColorComponent]: https://en.wikipedia.org/wiki/RGB_color_model
 */
export class ColorComponent {
  public readonly lightness: number = 0;

  /**
   * @param lightness - A numerical range from `0` to `255`.
   */
  public constructor(lightness: number) {
    this.lightness = Math.min(Math.max(lightness, 0), 255);
  }
}
