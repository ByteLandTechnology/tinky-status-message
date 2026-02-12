[**tinky-status-message**](../README.md)

---

[tinky-status-message](../globals.md) / statusMessageTheme

# Variable: statusMessageTheme

> `const` **statusMessageTheme**: `object`

Default theme configuration for StatusMessage components.

This theme provides all necessary style functions for rendering
StatusMessage components in terminal UIs. It follows the tinky-theme
ComponentTheme interface for seamless integration with the theme system.

Theme structure:

- `styles` - Style functions for each component element

Style functions:
Each style function returns props for the corresponding component:

- `styles.container(props)` - BoxProps for the status message container
- `styles.iconContainer()` - BoxProps for the icon wrapper
- `styles.icon(props)` - TextProps for the icon character
- `styles.message()` - TextProps for the message text

## Type Declaration

### styles

> **styles**: `object`

#### styles.container()

> **container**: () => `BoxProps`

Style function for the status message container.

##### Returns

`BoxProps`

Props for rendering the status message container

The container provides the main visual structure of the status message with:

- Horizontal layout (default flex direction)
- Spacing between icon and message
- Flexible sizing for responsive behavior

Applied styles:

- `columnGap: 1` - Horizontal spacing between icon and message

##### Example

```typescript
import { statusMessageTheme } from "tinky-status-message";

const containerStyles = statusMessageTheme.styles.container();
// Returns: { columnGap: 1 }
```

#### styles.icon()

> **icon**: (`props`) => `TextProps`

Style function for the icon text element.

##### Parameters

###### props

[`StatusMessageThemeProps`](../interfaces/StatusMessageThemeProps.md)

Props containing the variant

##### Returns

`TextProps`

Props for rendering the icon character

The icon is a variant-specific figure character selected in the component.
Symbol selection is handled by `useFigures()` in `StatusMessage`.

Applied styles:

- `color: variant-specific` - Color based on variant

Icon mapping: - info: Blue color - success: Green color - error: Red color - warning: Yellow color

##### Example

```typescript
import { statusMessageTheme } from "tinky-status-message";

const successIconStyles = statusMessageTheme.styles.icon({
  variant: "success",
});
// Returns: { color: "green" }
```

#### styles.iconContainer()

> **iconContainer**: () => `BoxProps`

Style function for the icon container.

##### Returns

`BoxProps`

Props for rendering the icon container

The icon container wraps the icon character and ensures it maintains
its size regardless of content layout.

Applied styles:

- `flexShrink: 0` - Prevents icon from shrinking

This ensures the icon always displays at its full size, even when
the message area needs to shrink to fit constraints.

##### Example

```typescript
import { statusMessageTheme } from "tinky-status-message";

const iconContainerStyles = statusMessageTheme.styles.iconContainer();
// Returns: { flexShrink: 0 }
```

#### styles.message()

> **message**: () => `TextProps`

Style function for the message text element.

##### Returns

`TextProps`

Props for rendering the message text

The message is the main content of the status message, providing detailed
information about the status message's purpose.

Applied styles:

- (none) - Default text styling

The message uses normal text styling, allowing it to be more
readable and less visually demanding than the colored icon.

##### Example

```typescript
import { statusMessageTheme } from "tinky-status-message";

const messageStyles = statusMessageTheme.styles.message();
// Returns: {}
```

## Examples

Using the theme directly:

```tsx
import { statusMessageTheme } from "tinky-status-message";

const { styles } = statusMessageTheme;
const containerProps = styles.container({ variant: "success" });
// containerProps === { columnGap: 1 }

<Box {...containerProps}>Status message content</Box>;
```

Integrating with theme provider:

```tsx
import { ThemeProvider } from "tinky-theme";
import { statusMessageTheme } from "tinky-status-message";

<ThemeProvider
  theme={{
    components: {
      StatusMessage: statusMessageTheme,
    },
  }}
>
  <StatusMessage variant="info">Info message</StatusMessage>
</ThemeProvider>;
```

## See

- [StatusMessageTheme](../type-aliases/StatusMessageTheme.md)
- [StatusMessageProps](../interfaces/StatusMessageProps.md)
