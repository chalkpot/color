// Copyright 2023 mineejo. All rights reserved. MIT license.

import { Rgb } from "../color/mod.ts";
import { Color } from "../color.ts";

// deno-fmt-ignore
export type ColorTransformationMatrix = [
  number, number, number,
  number, number, number,
  number, number, number
];

export function matrixColor(
  color: Color,
  matrix: ColorTransformationMatrix,
): Color {
  const [red, green, blue]: Rgb = color.components.map((component: number) =>
    component / 255
  ) as Rgb;

  let index = 0;

  return new Color(
    false,
    ...new Array(3).fill(undefined).map(() => {
      const component: number =
        (matrix[index] * red + matrix[index + 1] * green +
          matrix[index + 2] * blue) *
        255;

      index += 3;
      return component;
    }) as Rgb,
  );
}
