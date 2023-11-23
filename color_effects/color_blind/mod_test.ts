// Copyright 2023 mineejo. All rights reserved. MIT license.

import { Color } from "../../color.ts";
import * as originalFilters from "./mod.ts";
import { assertEquals } from "../../dev_deps.ts";
import { getTruncComponents } from "../../util.ts";

// deno-lint-ignore no-explicit-any
const filters = originalFilters as any;

// deno-lint-ignore no-explicit-any
const functionValues: any = {
  achromatopsiaColor: [
    [76, 76, 76],
    [149, 149, 149],
    [29, 29, 29],
  ],
  deuteranomalyColor: [
    [204, 65, 0],
    [51, 189, 36],
    [0, 0, 218],
  ],
  deuteranopiaColor: [
    [159, 178, 0],
    [95, 76, 76],
    [0, 0, 178],
  ],
  protanomalyColor: [
    [208, 84, 0],
    [46, 170, 31],
    [0, 0, 223],
  ],
  protanopiaColor: [
    [144, 142, 0],
    [110, 112, 61],
    [0, 0, 193],
  ],
  tritanomalyColor: [
    [246, 0, 0],
    [8, 186, 46],
    [0, 68, 208],
  ],
  tritanopiaColor: [
    [242, 0, 0],
    [12, 110, 121],
    [0, 144, 133],
  ],
};

Deno.test("color blindness functions correct", async (t) => {
  const red: Color = new Color(false, 255, 0, 0);
  const green: Color = new Color(false, 0, 255, 0);
  const blue: Color = new Color(false, 0, 0, 255);
  const white: Color = new Color(false, 255, 255, 255);
  const black: Color = new Color(false, 0, 0, 0);

  for (const filter in originalFilters) {
    const func = filters[filter];

    await t.step(`${func.name} function correct`, () => {
      assertEquals(
        getTruncComponents(func(red)),
        functionValues?.[func.name]?.[0],
        `"truncComponents(func(red))"`,
      );

      assertEquals(
        getTruncComponents(func(green)),
        functionValues?.[func.name]?.[1],
        `"truncComponents(func(green))"`,
      );

      assertEquals(
        getTruncComponents(func(blue)),
        functionValues?.[func.name]?.[2],
        `"truncComponents(func(blue))"`,
      );

      assertEquals(
        getTruncComponents(func(white)),
        [255, 255, 255],
        `"truncComponents(func(white))"`,
      );

      assertEquals(
        getTruncComponents(func(black)),
        [0, 0, 0],
        `"truncComponents(func(black))"`,
      );
    });
  }
});
