// Copyright 2023 mineejo. All rights reserved. MIT license.

import { assertEquals } from "../dev_deps.ts";
import { Color } from "../color.ts";
import { discolor } from "./discolor.ts";
import { Rgb } from "../color/mod.ts";

Deno.test("discolor function correct", () => {
  let red: Color = new Color(false, 255, 0, 0);
  let green: Color = new Color(false, 0, 255, 0);
  let blue: Color = new Color(false, 0, 0, 255);
  const grey: Rgb = [85, 85, 85];

  red = discolor(red);
  green = discolor(green);
  blue = discolor(blue);

  assertEquals(red.components, grey, `"red.components"`);
  assertEquals(green.components, grey, `"green.components"`);
  assertEquals(blue.components, grey, `"blue.components"`);
});
