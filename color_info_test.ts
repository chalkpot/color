// Copyright 2023 mineejo. All rights reserved. MIT license.

import { assertEquals } from "./dev_deps.ts";
import { ColorInfo } from "./color_info.ts";

Deno.test("getting JSON color object from module correct", () => {
  const black: ColorInfo = new ColorInfo(0, 0, 0);
  assertEquals(black.name, "black", `"black.name"`);

  const white: ColorInfo = new ColorInfo(255, 255, 255);
  assertEquals(white.name, "white", `"white.name"`);
});
