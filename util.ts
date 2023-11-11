// Copyright 2023 mineejo. All rights reserved. MIT license.

export function percent(value: number): number {
  return Math.min(Math.max(value, 0), 100);
}
