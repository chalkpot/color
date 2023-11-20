// Copyright 2023 mineejo. All rights reserved. MIT license.

import { assertEquals } from "../dev_deps.ts";
import { Color } from "../color.ts";
import { invertColor } from "./invert_color.ts";

Deno.test("invert color function correct", () => {
  let red: Color = new Color(false, 255, 0, 0);
  let black: Color = new Color(false, 0, 0, 0);
  let white: Color = new Color(false, 255, 255, 255);

  red = invertColor(red);
  black = invertColor(black);
  white = invertColor(white);

  assertEquals(red.components, [0, 255, 255], `"red.components"`);
  assertEquals(black.components, [255, 255, 255], `"black.components"`);
  assertEquals(white.components, [0, 0, 0], `"white.components"`);
});
