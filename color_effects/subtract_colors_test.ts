// Copyright 2023 mineejo. All rights reserved. MIT license.

import { assertEquals } from "../dev_deps.ts";
import { Color } from "../color.ts";
import { subtractColors } from "./subtract_colors.ts";

Deno.test("subtract colors function correct", () => {
  const purpleColor: Color = new Color(false, 255, 0, 255);
  const redColor: Color = new Color(false, 255, 0, 0);
  const blueColor: Color = subtractColors(purpleColor, redColor);

  assertEquals(blueColor.components, [0, 0, 255], `"blueColor.components"`);
});
