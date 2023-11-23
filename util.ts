// Copyright 2023 mineejo. All rights reserved. MIT license.

import { AdvancedColor } from "./advanced_color.ts";
import { Color } from "./color.ts";
import { Rgb } from "./color/rgb.ts";

export function percent(value: number): number {
  return Math.min(Math.max(value, 0), 100);
}

export function getTruncComponents(color: AdvancedColor | Color): Rgb {
  return color.components.map((component: number) =>
    Math.trunc(component)
  ) as Rgb;
}
