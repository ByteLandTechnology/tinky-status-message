/**
 * Basic rendering tests for StatusMessage component.
 *
 * Tests for StatusMessage component focusing on rendering output
 * and verifying variant-specific visual characteristics.
 */

import { describe, test, expect } from "bun:test";
import { render } from "tinky-test";
import { StatusMessage } from "../src/index.js";

describe("StatusMessage", () => {
  test("success variant renders with green checkmark icon", () => {
    const { lastFrame } = render(
      <StatusMessage variant="success">Success</StatusMessage>,
    );

    const output = lastFrame();
    expect(output).toContain("✔");
    expect(output).toContain("Success");
  });

  test("error variant renders with red cross icon", () => {
    const { lastFrame } = render(
      <StatusMessage variant="error">Error</StatusMessage>,
    );

    const output = lastFrame();
    expect(output).toContain("✘");
    expect(output).toContain("Error");
  });

  test("warning variant renders with yellow warning icon", () => {
    const { lastFrame } = render(
      <StatusMessage variant="warning">Warning</StatusMessage>,
    );

    const output = lastFrame();
    expect(output).toContain("⚠");
    expect(output).toContain("Warning");
  });

  test("info variant renders with blue info icon", () => {
    const { lastFrame } = render(
      <StatusMessage variant="info">Info</StatusMessage>,
    );

    const output = lastFrame();
    expect(output).toContain("ℹ");
    expect(output).toContain("Info");
  });

  test("renders with empty message", () => {
    const { lastFrame } = render(
      <StatusMessage variant="success">{""}</StatusMessage>,
    );

    const output = lastFrame();
    expect(output).toContain("✔");
  });

  test("renders with long message", () => {
    const longMessage =
      "This is a very long message that should be wrapped " +
      "properly within the status message container.";
    const { lastFrame } = render(
      <StatusMessage variant="warning">{longMessage}</StatusMessage>,
    );

    const output = lastFrame();
    expect(output).toContain("⚠");
    expect(output).toContain("very long message");
  });

  test("renders with special characters", () => {
    const specialMessage =
      "Message with special chars: @#$%^&*()_+-=[]{}|;:'\",.<>/?";
    const { lastFrame } = render(
      <StatusMessage variant="info">{specialMessage}</StatusMessage>,
    );

    const output = lastFrame();
    expect(output).toContain("special chars");
  });

  test("renders with unicode characters", () => {
    const unicodeMessage = "Unicode: ℹ️ ✓ ✗ ⚠️ 😊 🎉";
    const { lastFrame } = render(
      <StatusMessage variant="success">{unicodeMessage}</StatusMessage>,
    );

    const output = lastFrame();
    expect(output).toBeDefined();
  });
});
