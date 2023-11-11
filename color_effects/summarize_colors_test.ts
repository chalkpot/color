// Copyright 2023 mineejo. All rights reserved. MIT license.

import { assertEquals } from "../dev_deps.ts";
import { Color } from "../color.ts";
import { summarizeColors } from "./summarize_colors.ts";

Deno.test("sum function correct", () => {
  const redColor: Color = new Color(false, 255, 0, 0);
  const blueColor: Color = new Color(false, 0, 0, 255);
  const purpleColor: Color = summarizeColors(redColor, blueColor);

  assertEquals(
    purpleColor.components,
    [255, 0, 255],
    `"purpleColor.components"`,
  );
});
