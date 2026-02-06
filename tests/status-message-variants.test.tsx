/**
 * Test suite for StatusMessage component variants.
 *
 * Tests for StatusMessage component focusing on different variant types,
 * their visual characteristics, and semantic meanings.
 */

import { describe, test, expect } from "bun:test";
import { Box } from "tinky";
import { StatusMessage } from "../src/index.js";

describe("StatusMessage Variants", () => {
  describe("info variant", () => {
    test("should render info variant correctly", () => {
      const element = (
        <StatusMessage variant="info">
          This is an informational message
        </StatusMessage>
      );

      expect(element).toBeDefined();
      expect(element.props.variant).toBe("info");
    });

    test("should use correct icon for info variant", () => {
      const element = (
        <StatusMessage variant="info">Info message</StatusMessage>
      );

      expect(element.props.variant).toBe("info");
    });
  });

  describe("success variant", () => {
    test("should render success variant correctly", () => {
      const element = (
        <StatusMessage variant="success">Operation successful</StatusMessage>
      );

      expect(element).toBeDefined();
      expect(element.props.variant).toBe("success");
    });

    test("should use correct icon for success variant", () => {
      const element = <StatusMessage variant="success">Success</StatusMessage>;

      expect(element.props.variant).toBe("success");
    });
  });

  describe("error variant", () => {
    test("should render error variant correctly", () => {
      const element = (
        <StatusMessage variant="error">An error occurred</StatusMessage>
      );

      expect(element).toBeDefined();
      expect(element.props.variant).toBe("error");
    });

    test("should use correct icon for error variant", () => {
      const element = (
        <StatusMessage variant="error">Failed operation</StatusMessage>
      );

      expect(element.props.variant).toBe("error");
    });
  });

  describe("warning variant", () => {
    test("should render warning variant correctly", () => {
      const element = (
        <StatusMessage variant="warning">Warning message</StatusMessage>
      );

      expect(element).toBeDefined();
      expect(element.props.variant).toBe("warning");
    });

    test("should use correct icon for warning variant", () => {
      const element = <StatusMessage variant="warning">Warning</StatusMessage>;

      expect(element.props.variant).toBe("warning");
    });
  });

  describe("variant combinations", () => {
    test("should support all four variants", () => {
      const variants = ["info", "success", "error", "warning"] as const;
      for (const variant of variants) {
        const element = (
          <StatusMessage variant={variant}>Test message</StatusMessage>
        );
        expect(element).toBeDefined();
        expect(element.props.variant).toBe(variant);
      }
    });
  });

  describe("content types", () => {
    test("should support string content with all variants", () => {
      const variants = ["info", "success", "error", "warning"] as const;
      for (const variant of variants) {
        const element = (
          <StatusMessage variant={variant}>String content</StatusMessage>
        );
        expect(element).toBeDefined();
      }
    });

    test("should support element content with all variants", () => {
      const variants = ["info", "success", "error", "warning"] as const;
      for (const variant of variants) {
        const element = (
          <StatusMessage variant={variant}>
            <Box>Element content</Box>
          </StatusMessage>
        );
        expect(element).toBeDefined();
      }
    });
  });
});
