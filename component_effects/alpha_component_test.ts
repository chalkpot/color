// Copyright 2023 mineejo. All rights reserved. MIT license.

import { assertEquals } from "../dev_deps.ts";
import { alphaComponent } from "./alpha_component.ts";

Deno.test("alpha color function correct", async (t) => {
  await t.step("alpha value added correct", () => {
    assertEquals(
      alphaComponent([255, 0, 0], true),
      [255, 0, 0, 100],
      `"alphaComponent([255, 0, 0, 100], true)"`,
    );

    assertEquals(
      alphaComponent([255, 0, 0], true, 90),
      [255, 0, 0, 90],
      `"alphaComponent([255, 0, 0], true, 90)"`,
    );
  });

  await t.step("alpha value removed correct", () => {
    assertEquals(
      alphaComponent([255, 0, 0, 100], false),
      [255, 0, 0],
      `"alphaComponent([255, 0, 0, 100], false)"`,
    );

    assertEquals(
      alphaComponent([255, 0, 0, 100], false, 90),
      [255, 0, 0],
      `"alphaComponent([255, 0, 0, 100], false)"`,
    );
  });

  await t.step("alpha value overwritten correct", () => {
    assertEquals(
      alphaComponent([255, 0, 0, 50], true, 90),
      [255, 0, 0, 90],
      `"alphaComponent([255, 0, 0, 50], true, 90)"`,
    );
  });
});
