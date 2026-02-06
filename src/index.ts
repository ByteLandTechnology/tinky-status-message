/**
 * Main entry point for tinky-status-message package.
 *
 * This module provides the public API for the tinky-status-message package,
 * exporting the StatusMessage component and its associated theme configuration.
 *
 * The package exports:
 * - `StatusMessage` - Main status message component for displaying messages in terminal UIs
 * - `StatusMessageProps` - TypeScript interface for StatusMessage component props
 * - `statusMessageTheme` - Default theme configuration for StatusMessage components
 * - `StatusMessageTheme` - TypeScript type for the StatusMessage theme
 * - `StatusMessageThemeProps` - TypeScript interface for StatusMessage theme functions
 * - `isUnicodeSupported` - Utility function for detecting Unicode support in terminals
 *
 * @example
 * Basic usage:
 * ```tsx
 * import { StatusMessage } from "tinky-status-message";
 *
 * <StatusMessage variant="success">
 *   Operation completed successfully
 * </StatusMessage>
 * ```
 *
 * @example
 * With theme provider:
 * ```tsx
 * import { StatusMessage, statusMessageTheme } from "tinky-status-message";
 * import { ThemeProvider } from "tinky-theme";
 *
 * <ThemeProvider theme={{ components: { StatusMessage: statusMessageTheme } }}>
 *   <StatusMessage variant="info">
 *     Important information message
 *   </StatusMessage>
 * </ThemeProvider>
 * ```
 *
 * @see {@link StatusMessage}
 * @see {@link statusMessageTheme}
 */

export {
  StatusMessage,
  type StatusMessageProps,
} from "./components/StatusMessage.js";
export {
  default as statusMessageTheme,
  type StatusMessageTheme,
  type StatusMessageThemeProps,
} from "./themes/status-message-theme.js";
export { type StatusMessageVariant } from "./types/status-message-types.js";
export { isUnicodeSupported } from "./utils/unicode.js";
