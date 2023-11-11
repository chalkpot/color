// Copyright 2023 mineejo. All rights reserved. MIT license.

import { assertEquals } from "./dev_deps.ts";
import { AdvancedColor } from "./advanced_color.ts";
import { Rgb } from "./color/mod.ts";
import { Color } from "./color.ts";

export function truncComponents(color: AdvancedColor | Color): Rgb {
  const [_red, _green, _blue]: Rgb = color.components;
  return [Math.trunc(_red), Math.trunc(_green), Math.trunc(_blue)];
}

Deno.test("class contains correct fields", async (t) => {
  const red = 31;
  const green = 10;
  const blue = 0;

  const hue = 10;
  const saturation = 20;
  const lightness = 30;

  const color: AdvancedColor = new AdvancedColor(hue, saturation, lightness);

  assertEquals(Math.trunc(color.red), red, `"color.red"`);
  assertEquals(Math.trunc(color.green), green, `"color.green"`);
  assertEquals(Math.trunc(color.blue), blue, `"color.blue"`);

  assertEquals(color.hue, hue, `"color.hue"`);
  assertEquals(color.saturation, saturation, `"color.saturation"`);
  assertEquals(color.lightness, lightness, `"color.lightness"`);

  await t.step("dependent field contains correct values", () => {
    assertEquals(
      truncComponents(color.rgbColor),
      [red, green, blue],
      `"color.rgbColor"`,
    );

    assertEquals(
      truncComponents(color),
      [red, green, blue],
      `"color"`,
    );
  });
});

Deno.test("HSL conversion of red, green and blue correct", async (t) => {
  const red: Rgb = [255, 0, 0];
  const green: Rgb = [0, 255, 0];
  const blue: Rgb = [0, 0, 255];

  const hue: AdvancedColor = new AdvancedColor(0);
  assertEquals(truncComponents(hue), red, `"hue"`);

  await t.step("no lightness or saturation values do not change hue", () => {
    const hueSaturation: AdvancedColor = new AdvancedColor(0, 100);
    assertEquals(truncComponents(hueSaturation), red, `"hueSaturation"`);

    const hueLightness: AdvancedColor = new AdvancedColor(0, undefined, 50);
    assertEquals(truncComponents(hueLightness), red, `"hueLightness"`);
  });

  await t.step("default values do not change hue", () => {
    const hueSaturationLightness: AdvancedColor = new AdvancedColor(0, 100, 50);
    assertEquals(
      truncComponents(hueSaturationLightness),
      red,
      `"hueSaturationLightness"`,
    );
  });

  await t.step("hue range correct", () => {
    const startRedColor: AdvancedColor = new AdvancedColor(0);
    assertEquals(truncComponents(startRedColor), red, `"startRedColor"`);

    const greenColor: AdvancedColor = new AdvancedColor(33.33);
    assertEquals(truncComponents(greenColor), green, `"greenColor"`);

    const blueColor: AdvancedColor = new AdvancedColor(66.66);
    assertEquals(truncComponents(blueColor), blue, `"blueColor"`);

    const endRedColor: AdvancedColor = new AdvancedColor(100);
    assertEquals(truncComponents(endRedColor), red, `"endRedColor"`);
  });

  await t.step("saturation range correct", () => {
    const redSaturated: Rgb = [255, 0, 0];
    const saturatedColor: AdvancedColor = new AdvancedColor(0, 100);
    assertEquals(
      truncComponents(saturatedColor),
      redSaturated,
      `"saturatedColor"`,
    );

    const redUnsaturated: Rgb = [63, 63, 63];
    const unsaturatedColor: AdvancedColor = new AdvancedColor(0, 0);
    assertEquals(
      truncComponents(unsaturatedColor),
      redUnsaturated,
      `"unsaturatedColor"`,
    );
  });

  await t.step("lightness range correct", () => {
    const black: Rgb = [0, 0, 0];
    const blackColor: AdvancedColor = new AdvancedColor(0, undefined, 0);
    assertEquals(
      truncComponents(blackColor),
      black,
      `"blackColor"`,
    );

    const white: Rgb = [255, 255, 255];
    const whiteColor: AdvancedColor = new AdvancedColor(0, undefined, 100);
    assertEquals(
      truncComponents(whiteColor),
      white,
      `"whiteColor"`,
    );
  });
});

for (let i = 0; i < 100; i++) {
  const hue = new AdvancedColor(i, 100).components.toString()
    .replace(/,/g, ";")
    .replace(/\.\d+/gm, "");

  const saturation = new AdvancedColor(i, 0).components.toString()
    .replace(/,/g, ";")
    .replace(/\.\d+/gm, "");

  const lighntess = new AdvancedColor(i, undefined, 80).components.toString()
    .replace(/,/g, ";")
    .replace(/\.\d+/gm, "");

  console.log(
    `${i}.`.padEnd(4),
    `[${hue}]`.padEnd(11),
    `[${saturation}]`.padEnd(13),
    `[${lighntess}]:`.padEnd(14),
    `\x1b[48;2;${hue}m          \x1b[0m`,
    `\x1b[48;2;${saturation}m          \x1b[0m`,
    `\x1b[48;2;${lighntess}m          \x1b[0m`,
  );
}
