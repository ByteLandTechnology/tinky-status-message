/**
 * Theme configuration and styling for StatusMessage components.
 *
 * This module provides the default theme configuration for StatusMessage components,
 * including variant-specific colors and styling functions.
 *
 * The theme system supports:
 * - Four status message variants: info, success, error, warning
 * - Automatic color mapping for each variant
 * - Variant-specific styling
 * - Consistent styling across all status message elements
 * - Integration with the tinky-theme system
 *
 * Variant configurations:
 * - info: Blue color with info symbol (`ℹ`/`i`)
 * - success: Green color with tick symbol (`✔`/`√`)
 * - error: Red color with cross symbol (`✘`/`×`)
 * - warning: Yellow color with warning symbol (`⚠`/`‼`)
 *
 * The module exports:
 * 1. `statusMessageTheme` - Complete theme with styles
 * 2. `StatusMessageTheme` - Type definition of the theme
 * 3. `StatusMessageThemeProps` - Props interface for theme functions
 *
 * @example
 * Using the default theme:
 * ```tsx
 * import { StatusMessage, statusMessageTheme } from "tinky-status-message";
 * import { ThemeProvider } from "tinky-theme";
 *
 * <ThemeProvider theme={{ components: { StatusMessage: statusMessageTheme } }}>
 *   <StatusMessage variant="info">
 *     Information message
 *   </StatusMessage>
 * </ThemeProvider>
 * ```
 *
 * @example
 * Customizing via theme extension:
 * ```tsx
 * import { extendTheme } from "tinky-theme";
 * import { statusMessageTheme } from "tinky-status-message";
 *
 * const customTheme = extendTheme(defaultTheme, {
 *   components: {
 *     StatusMessage: {
 *       styles: {
 *         container: () => ({
 *           columnGap: 2
 *         })
 *       }
 *     }
 *   }
 * });
 * ```
 *
 * @see {@link StatusMessageTheme}
 * @see {@link StatusMessage}
 */

import { type BoxProps, type TextProps } from "tinky";
import { type ComponentTheme } from "tinky-theme";
import { type StatusMessageVariant } from "../types/status-message-types.js";

/**
 * Color mapping for status message variants.
 *
 * Maps each variant to its corresponding terminal color:
 * - info → blue
 * - success → green
 * - error → red
 * - warning → yellow
 *
 * These colors are used for:
 * - Icon color for visual emphasis
 * - Any other variant-specific styling
 *
 * @constant {Record<StatusMessageVariant, string>}
 * @private
 */
const colorByVariant: Record<StatusMessageVariant, string> = {
  success: "green",
  error: "red",
  warning: "yellow",
  info: "blue",
};

/**
 * Props interface for StatusMessage theme functions.
 *
 * @interface StatusMessageThemeProps
 *
 * @property {StatusMessageVariant} variant - The status message variant
 *   determines the color scheme. Each variant has specific semantic meaning:
 *   - info: General information or neutral messages
 *   - success: Successful operations or confirmations
 *   - error: Error messages or failure notifications
 *   - warning: Warning messages or cautionary notes
 *
 * Variant visual characteristics:
 * - info: Blue color with info symbol (`ℹ`/`i`)
 * - success: Green color with tick symbol (`✔`/`√`)
 * - error: Red color with cross symbol (`✘`/`×`)
 * - warning: Yellow color with warning symbol (`⚠`/`‼`)
 *
 * @example
 * ```typescript
 * const infoProps: StatusMessageThemeProps = { variant: "info" };
 * const successProps: StatusMessageThemeProps = { variant: "success" };
 * const errorProps: StatusMessageThemeProps = { variant: "error" };
 * const warningProps: StatusMessageThemeProps = { variant: "warning" };
 * ```
 */
export interface StatusMessageThemeProps {
  variant: StatusMessageVariant;
}

/**
 * Default theme configuration for StatusMessage components.
 *
 * This theme provides all necessary style functions for rendering
 * StatusMessage components in terminal UIs. It follows the tinky-theme
 * ComponentTheme interface for seamless integration with the theme system.
 *
 * Theme structure:
 * - `styles` - Style functions for each component element
 *
 * Style functions:
 * Each style function returns props for the corresponding component:
 * - `styles.container(props)` - BoxProps for the status message container
 * - `styles.iconContainer()` - BoxProps for the icon wrapper
 * - `styles.icon(props)` - TextProps for the icon character
 * - `styles.message()` - TextProps for the message text
 *
 * @example
 * Using the theme directly:
 * ```tsx
 * import { statusMessageTheme } from "tinky-status-message";
 *
 * const { styles } = statusMessageTheme;
 * const containerProps = styles.container({ variant: "success" });
 * // containerProps === { columnGap: 1 }
 *
 * <Box {...containerProps}>
 *   Status message content
 * </Box>
 * ```
 *
 * @example
 * Integrating with theme provider:
 * ```tsx
 * import { ThemeProvider } from "tinky-theme";
 * import { statusMessageTheme } from "tinky-status-message";
 *
 * <ThemeProvider theme={{
 *   components: {
 *     StatusMessage: statusMessageTheme
 *   }
 * }}>
 *   <StatusMessage variant="info">Info message</StatusMessage>
 * </ThemeProvider>
 * ```
 *
 * @see {@link StatusMessageTheme}
 * @see {@link StatusMessageProps}
 */
const statusMessageTheme = {
  styles: {
    /**
     * Style function for the status message container.
     *
     * @returns {BoxProps} Props for rendering the status message container
     *
     * The container provides the main visual structure of the status message with:
     * - Horizontal layout (default flex direction)
     * - Spacing between icon and message
     * - Flexible sizing for responsive behavior
     *
     * Applied styles:
     * - `columnGap: 1` - Horizontal spacing between icon and message
     *
     * @example
     * ```typescript
     * import { statusMessageTheme } from "tinky-status-message";
     *
     * const containerStyles = statusMessageTheme.styles.container();
     * // Returns: { columnGap: 1 }
     * ```
     */
    container: (): BoxProps => ({
      columnGap: 1,
    }),

    /**
     * Style function for the icon container.
     *
     * @returns {BoxProps} Props for rendering the icon container
     *
     * The icon container wraps the icon character and ensures it maintains
     * its size regardless of content layout.
     *
     * Applied styles:
     * - `flexShrink: 0` - Prevents icon from shrinking
     *
     * This ensures the icon always displays at its full size, even when
     * the message area needs to shrink to fit constraints.
     *
     * @example
     * ```typescript
     * import { statusMessageTheme } from "tinky-status-message";
     *
     * const iconContainerStyles = statusMessageTheme.styles.iconContainer();
     * // Returns: { flexShrink: 0 }
     * ```
     */
    iconContainer: (): BoxProps => ({
      flexShrink: 0,
    }),

    /**
     * Style function for the icon text element.
     *
     * @param {StatusMessageThemeProps} props - Props containing the variant
     * @returns {TextProps} Props for rendering the icon character
     *
     * The icon is a variant-specific figure character selected in the component.
     * Symbol selection is handled by `useFigures()` in `StatusMessage`.
     *
     * Applied styles:
     * - `color: variant-specific` - Color based on variant
     *
     * Icon mapping:
     *      - info: Blue color
     *      - success: Green color
     *      - error: Red color
     *      - warning: Yellow color
     *
     * @example
     * ```typescript
     * import { statusMessageTheme } from "tinky-status-message";
     *
     * const successIconStyles = statusMessageTheme.styles.icon({ variant: "success" });
     * // Returns: { color: "green" }
     * ```
     */
    icon: (props): TextProps => ({
      color: colorByVariant[props.variant],
    }),

    /**
     * Style function for the message text element.
     *
     * @returns {TextProps} Props for rendering the message text
     *
     * The message is the main content of the status message, providing detailed
     * information about the status message's purpose.
     *
     * Applied styles:
     * - (none) - Default text styling
     *
     * The message uses normal text styling, allowing it to be more
     * readable and less visually demanding than the colored icon.
     *
     * @example
     * ```typescript
     * import { statusMessageTheme } from "tinky-status-message";
     *
     * const messageStyles = statusMessageTheme.styles.message();
     * // Returns: {}
     * ```
     */
    message: (): TextProps => ({}),
  },
} satisfies ComponentTheme<StatusMessageThemeProps>;

export default statusMessageTheme;

/**
 * Type definition for the StatusMessage theme.
 *
 * @type {typeof statusMessageTheme}
 *
 * This type represents the complete theme structure for StatusMessage components,
 * including all style functions.
 *
 * Type structure:
 * ```typescript
 * type StatusMessageTheme = {
 *   styles: {
 *     container: () => BoxProps;
 *     iconContainer: () => BoxProps;
 *     icon: (props: StatusMessageThemeProps) => TextProps;
 *     message: () => TextProps;
 *   };
 * }
 * ```
 *
 * @example
 * Creating a custom theme that extends the base:
 * ```typescript
 * import type { StatusMessageTheme } from "tinky-status-message";
 *
 * const customTheme: StatusMessageTheme = {
 *   ...statusMessageTheme,
 *   styles: {
 *     ...statusMessageTheme.styles,
 *     container: () => ({
 *       columnGap: 2  // Changed spacing
 *     })
 *   },
 * };
 * ```
 *
 * @see {@link statusMessageTheme}
 * @see {@link StatusMessageThemeProps}
 * @see {@link ComponentTheme}
 */
export type StatusMessageTheme = typeof statusMessageTheme;
