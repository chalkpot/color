// Copyright 2023 mineejo. All rights reserved. MIT license.

import { assertEquals } from "../dev_deps.ts";
import { truncComponents } from "../advanced_color_test.ts";
import { Color } from "../color.ts";
import { mixColors } from "./mix_colors.ts";

Deno.test("mix colors function correct", async (t) => {
  const purple: Color = mixColors(
    new Color(false, 255, 0, 0),
    new Color(false, 0, 0, 255),
    50,
  );

  assertEquals(truncComponents(purple), [127, 0, 127], `"purple"`);

  await t.step("percentage correct", () => {
    const blue: Color = mixColors(
      new Color(false, 255, 0, 0),
      new Color(false, 0, 0, 255),
      100,
    );

    assertEquals(truncComponents(blue), [0, 0, 255], `"blue"`);

    const red: Color = mixColors(
      new Color(false, 255, 0, 0),
      new Color(false, 0, 0, 255),
      0,
    );

    assertEquals(truncComponents(red), [255, 0, 0], `"red"`);

    const black: Color = mixColors(
      new Color(false, 0, 0, 0),
      new Color(false, 0, 0, 0),
      50,
    );

    assertEquals(truncComponents(black), [0, 0, 0], `"black"`);
  });
});
