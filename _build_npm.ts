// Copyright 2023 mineejo. All rights reserved. MIT license.

import { build, emptyDir } from "https://deno.land/x/dnt@0.38.1/mod.ts";

const outDir = "./.npm";

await emptyDir(outDir);

await build({
  entryPoints: ["./mod.ts"],
  outDir: outDir,
  shims: {
    deno: true,
  },
  test: true,
  package: {
    name: "@chalkpot/color",
    version: Deno.args[0],
    description:
      "Color is a tool for creating [RGB] color by range and by HSL without leaving RGB space.",
    author: "mineejo",
    license: "MIT",
    homepage: "https://github.com/chalkpot/color#readme",
    repository: {
      type: "git",
      url: "git+https://github.com/chalkpot/color.git",
    },
    bugs: {
      url: "https://github.com/chalkpot/color/issues",
    },
    keywords: [
      "chalkpot",
      "color",
      "rgb",
      "hsl",
    ],
  },
  postBuild() {
    Deno.copyFileSync("LICENSE", `${outDir}/LICENSE`);
    Deno.copyFileSync("README.md", `${outDir}/README.md`);
  },
});
