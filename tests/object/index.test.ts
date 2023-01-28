import { expectType } from "ts-expect";
import { describe, test } from "vitest";

import { DeepNonNullable } from "../../src/index.d";

describe("object", () => {
  test("DeepNonNullable", () => {
    expectType<DeepNonNullable<{ a?: number; b: string }>>({ a: 1, b: "2" });
  });
});
