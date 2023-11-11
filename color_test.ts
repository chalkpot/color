// Copyright 2023 mineejo. All rights reserved. MIT license.

import { assertEquals } from "./dev_deps.ts";
import { Color } from "./color.ts";

Deno.test("class contains correct fields", async (t) => {
  const red = 10 as const;
  const green = 20 as const;
  const blue = 30 as const;

  const color: Color = new Color(false, red, green, blue);

  assertEquals(color.red, red, `"color.red"`);
  assertEquals(color.green, green, `"color.green"`);
  assertEquals(color.blue, blue, `"color.blue"`);

  await t.step("dependent field contains correct values", () => {
    assertEquals(color.components, [red, green, blue], `"color.components"`);
  });
});

Deno.test("creating components using percentages correct", () => {
  const black: Color = new Color(true, 0, 0, 0);
  assertEquals(black.components, [0, 0, 0], `"black"`);

  const grey: Color = new Color(true, 50, 50, 50);
  assertEquals(grey.components, [127.5, 127.5, 127.5], `"grey"`);

  const white: Color = new Color(true, 100, 100, 100);
  assertEquals(white.components, [255, 255, 255], `"white"`);
});
