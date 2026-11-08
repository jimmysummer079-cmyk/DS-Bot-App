import test from "node:test";
import assert from "node:assert/strict";
import { composerInputBounds } from "../src/logic/composer-layout.ts";

test("the composer keeps a full scaled line and padding visible", () => {
  for (const scale of [0.85, 1, 1.15, 1.3, 1.5, 2, 3, 6]) {
    const { minHeight, maxHeight } = composerInputBounds(scale);
    assert.ok(minHeight >= 44);
    assert.ok(minHeight >= 24 * scale + 20);
    assert.ok(maxHeight >= minHeight);
    assert.ok(maxHeight >= 150);
  }
  assert.deepEqual(composerInputBounds(1), { minHeight: 44, maxHeight: 150 });
  assert.deepEqual(composerInputBounds(2), { minHeight: 68, maxHeight: 150 });
});

test("invalid scale values retain the normal input bounds", () => {
  for (const scale of [NaN, Infinity, -1, 0]) {
    assert.deepEqual(composerInputBounds(scale), composerInputBounds(1));
  }
});
