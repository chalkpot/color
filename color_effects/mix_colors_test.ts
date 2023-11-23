// Copyright 2023 mineejo. All rights reserved. MIT license.

import { assertEquals } from "../dev_deps.ts";
import { Color } from "../color.ts";
import { mixColors } from "./mix_colors.ts";
import { getTruncComponents } from "../util.ts";

Deno.test("mix colors function correct", async (t) => {
  const purple: Color = mixColors(
    new Color(false, 255, 0, 0),
    new Color(false, 0, 0, 255),
    50,
  );

  assertEquals(getTruncComponents(purple), [127, 0, 127], `"purple"`);

  await t.step("percentage correct", () => {
    const blue: Color = mixColors(
      new Color(false, 255, 0, 0),
      new Color(false, 0, 0, 255),
      100,
    );

    assertEquals(getTruncComponents(blue), [0, 0, 255], `"blue"`);

    const red: Color = mixColors(
      new Color(false, 255, 0, 0),
      new Color(false, 0, 0, 255),
      0,
    );

    assertEquals(getTruncComponents(red), [255, 0, 0], `"red"`);

    const black: Color = mixColors(
      new Color(false, 0, 0, 0),
      new Color(false, 0, 0, 0),
      50,
    );

    assertEquals(getTruncComponents(black), [0, 0, 0], `"black"`);
  });
});
