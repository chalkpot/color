// Copyright 2023 mineejo. All rights reserved. MIT license.

import { Color } from "./color.ts";
import { Rgb } from "./color/mod.ts";
import { mixColors } from "./color_effects/mod.ts";
import { percent } from "./util.ts";
import { rgbColorWheel } from "./color/rgb_color_wheel.ts";

/**
 * AdvancedColor is an advanced [RGB] color.
 * Like regular `Color`, it mimics the [HSL] model.
 *
 * [RGB]: https://en.wikipedia.org/wiki/RGB_color_model
 * [HSL]: https://en.wikipedia.org/wiki/HSL_and_HSV
 *
 * ### Example
 *
 * ```ts
 * const darkGreen = new AdvancedColor(33.33, undefined, 25);
 * console.log(darkGreen.components); // [0, 127.8, 0]
 *
 * const paleRed = new AdvancedColor(100, 70, 80);
 * console.log(paleRed.components); // [255, 173.3, 173.3]
 * ```
 */
export class AdvancedColor {
  public readonly hue: number = 0;
  public readonly saturation: number = 0;
  public readonly lightness: number = 0;
  public readonly red: number = 0;
  public readonly green: number = 0;
  public readonly blue: number = 0;
  public readonly components: Rgb = [0, 0, 0];

  private hueColor: Color = new Color(false, ...this.components);
  private saturationColor: Color = new Color(false, ...this.components);
  private lightnessColor: Color = new Color(false, ...this.components);

  /**
   * @param hue
   * Percentage value of the color wheel from `0` to `100`:
   * - Red: `0`;
   * - Green: `33.33`;
   * - Blue: `66.66`;
   * - Red: `100`;
   *
   * @param saturation
   * Percentage value from `0` to `100`:
   * - Colorless (grey color): `0`;
   * - Hue color: `100`;
   *
   * @param lightness
   * Percentage value from `0` to `100`:
   * - Black: `0`;
   * - Hue color: `50`;
   * - White: `100`;
   */
  public constructor(
    hue: number,
    saturation?: number | undefined,
    lightness?: number | undefined,
  ) {
    this.hue = percent(hue);
    this.addHueColor();

    if (saturation !== undefined) {
      this.saturation = percent(saturation);
      this.createSaturationColor();
    }

    if (lightness !== undefined) {
      this.lightness = percent(lightness);
      this.createLightnessColor();
    }

    this.components = this._rgbColor.components;
    this.red = this._rgbColor.red;
    this.green = this._rgbColor.green;
    this.blue = this._rgbColor.blue;
  }

  private _rgbColor: Color = new Color(false, ...this.components);

  get rgbColor(): Color {
    return this._rgbColor;
  }

  private createLightnessColor(): void {
    const lightnessValue: number = this.lightness - 0.1;
    const ratio: number = (lightnessValue - 30.2) / (100 - 30.2);
    const lightness: number = 255 / (100 / (ratio * 140));

    const newComponents: Rgb = this._rgbColor.components.map(
      (component: number) => component - (100 - lightness),
    ) as Rgb;

    this.lightnessColor = new Color(false, ...newComponents);
    this._rgbColor = this.lightnessColor;
  }

  private createSaturationColor(): void {
    const saturation: number = (
      this._rgbColor.red +
      this._rgbColor.green +
      this._rgbColor.blue
    ) / 4;

    const color: Color = new Color(false, saturation, saturation, saturation);
    const saturationValue: number = this.saturation;

    this.saturationColor = mixColors(
      this.hueColor,
      color,
      100 - saturationValue,
    );

    this._rgbColor = this.saturationColor;
  }

  private addHueColor(): void {
    const hueValue: number = this.hue;

    const colorIndex: number = Math.min(
      Math.max(rgbColorWheel.length * (hueValue / 100), 0),
      rgbColorWheel.length - 1,
    );

    this.hueColor = new Color(false, ...rgbColorWheel[Math.floor(colorIndex)]);
    this._rgbColor = this.hueColor;
  }
}
