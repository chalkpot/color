// Copyright 2023 mineejo. All rights reserved. MIT license.

import { Rgb } from "../rgb.ts";
import { Rgba } from "../rgba.ts";

export function isRgb(components: Rgba | Rgb): boolean {
  return components.length === 3;
}
