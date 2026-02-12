/**
 * StatusMessage component implementation for terminal UI applications.
 *
 * This module provides the StatusMessage component, a message display component for
 * showing notifications, warnings, errors, and information in terminal interfaces.
 * The component supports four variants with semantic colors and icons.
 *
 * Key features:
 * - Four semantic variants: info, success, error, warning
 * - Automatic color mapping for each variant
 * - Variant-specific icons from `tinky-figures` `useFigures()`
 * - Integration with tinky-theme for consistent styling
 * - Flexible content support via ReactNode
 *
 * Variant characteristics:
 * - info: Blue color with info symbol (`ℹ`/`i`) for general information
 * - success: Green color with tick symbol (`✔`/`√`) for successful operations
 * - error: Red color with cross symbol (`✘`/`×`) for error notifications
 * - warning: Yellow color with warning symbol (`⚠`/`‼`) for cautionary messages
 *
 * The component uses the tinky-theme system to resolve styling and
 * configuration, allowing for easy customization through theme extension.
 *
 * @example
 * Basic usage:
 * ```tsx
 * import { StatusMessage } from "tinky-status-message";
 *
 * <StatusMessage variant="info">
 *   This is an informational message
 * </StatusMessage>
 * ```
 *
 * @example
 * Success message:
 * ```tsx
 * import { StatusMessage } from "tinky-status-message";
 *
 * <StatusMessage variant="success">
 *   Your operation completed successfully
 * </StatusMessage>
 * ```
 *
 * @example
 * Error message:
 * ```tsx
 * import { StatusMessage } from "tinky-status-message";
 *
 * <StatusMessage variant="error">
 *   Failed to connect to the server
 * </StatusMessage>
 * ```
 *
 * @example
 * Warning message:
 * ```tsx
 * import { StatusMessage } from "tinky-status-message";
 *
 * <StatusMessage variant="warning">
 *   Your session will expire in 5 minutes
 * </StatusMessage>
 * ```
 *
 * @see {@link StatusMessageProps}
 * @see {@link statusMessageTheme}
 */

import { type JSX, type ReactNode } from "react";
import { Box, Text } from "tinky";
import { useFigures } from "tinky-figures";
import { useComponentTheme } from "tinky-theme";
import { type StatusMessageThemeProps } from "../themes/status-message-theme.js";
import statusMessageTheme from "../themes/status-message-theme.js";
import { type StatusMessageVariant } from "../types/status-message-types.js";

/**
 * Props for the StatusMessage component.
 *
 * @interface StatusMessageProps
 *
 * @property {ReactNode} children - The message content to display within the status message.
 *   This is the main body of the status message and can include text or any valid ReactNode.
 *   The message is rendered in normal text style for readability.
 *   Must be a valid ReactNode (components, elements, strings, numbers, etc.).
 *
 * @property {"info" | "success" | "error" | "warning"} variant - The status variant
 *   determines the visual appearance including icon color and semantic meaning.
 *
 *   Variant options and their meanings:
 *   - `info`: General information or neutral messages (blue color, `ℹ` / `i`)
 *   - `success`: Successful operations or confirmations (green color, `✔` / `√`)
 *   - `error`: Error messages or failure notifications (red color, `✘` / `×`)
 *   - `warning`: Warning messages or cautionary notes (yellow color, `⚠` / `‼`)
 *
 *   Each variant has associated:
 *   - Icon color for visual emphasis
 *   - Icon character displayed alongside the message
 *   - Semantic meaning for accessibility and understanding
 *
 * @example
 * Info status message:
 * ```tsx
 * const infoMessage: StatusMessageProps = {
 *   variant: "info",
 *   children: "Your request was received successfully"
 * };
 * ```
 *
 * @example
 * Success status message:
 * ```tsx
 * const successMessage: StatusMessageProps = {
 *   variant: "success",
 *   children: "All systems operational"
 * };
 * ```
 */
export interface StatusMessageProps {
  /**
   * The message content to display within the status message.
   * This is the main body of the status message and can include text or any valid ReactNode.
   */
  readonly children: ReactNode;

  /**
   * The status variant that determines the visual appearance including icon color,
   * and semantic meaning.
   */
  readonly variant: StatusMessageVariant;
}

/**
 * StatusMessage component for displaying messages in terminal UIs.
 *
 * @param {StatusMessageProps} props - Component props
 * @param {ReactNode} props.children - Message content to display
 * @param {"info" | "success" | "error" | "warning"} props.variant - Status variant for styling
 *
 * @returns {JSX.Element} The rendered status message component
 *
 * This is the main status message component that renders stylized message boxes with
 * variant-specific colors and icons for terminal applications.
 *
 * Component structure:
 * ```
 * ┌─────────────────────┐
 * │  [icon]  Message    │  <- icon container + message text
 * └─────────────────────┘
 * ```
 *
 * Rendering behavior:
 * 1. Reads theme configuration for the StatusMessage component
 * 2. Resolves variant-specific styles from theme
 * 3. Gets terminal-appropriate symbols from `useFigures()`
 * 4. Displays icon on the left side (non-shrinking)
 * 5. Displays content on the right side
 *
 * Theme integration:
 * - Uses `useComponentTheme` hook to resolve styles
 * - Styles come from `statusMessageTheme.styles.*` functions
 * - Styles are applied to Box and Text components from tinky
 *
 * Flex layout behavior:
 * - Icon maintains fixed size (flexShrink: 0)
 * - Message can expand/shrink as needed
 *
 * @example
 * Simple info message:
 * ```tsx
 * <StatusMessage variant="info">
 *   System maintenance scheduled for tonight
 * </StatusMessage>
 * ```
 *
 * @example
 * Success message:
 * ```tsx
 * <StatusMessage variant="success">
 *   Your changes have been saved
 * </StatusMessage>
 * ```
 *
 * @example
 * Error message:
 * ```tsx
 * <StatusMessage variant="error">
 *   Unable to reach the server. Please try again later.
 * </StatusMessage>
 * ```
 *
 * @example
 * Warning message:
 * ```tsx
 * <StatusMessage variant="warning">
 *   You are using 90% of your available storage
 * </StatusMessage>
 * ```
 *
 * @see {@link StatusMessageProps}
 * @see {@link statusMessageTheme}
 */
export function StatusMessage({
  children,
  variant,
}: StatusMessageProps): JSX.Element {
  const figures = useFigures();
  const { styles } = useComponentTheme<StatusMessageThemeProps>(
    "StatusMessage",
    statusMessageTheme,
    { variant },
  );

  const iconByVariant: Record<StatusMessageVariant, string> = {
    info: figures.info,
    success: figures.tick,
    error: figures.cross,
    warning: figures.warning,
  };
  const icon = iconByVariant[variant];

  return (
    <Box {...styles.container}>
      <Box {...styles.iconContainer}>
        <Text {...styles.icon}>{icon}</Text>
      </Box>

      <Text {...styles.message}>{children}</Text>
    </Box>
  );
}
