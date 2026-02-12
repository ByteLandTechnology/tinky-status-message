# tinky-status-message

A React status message component for CLI applications, built on the Tinky framework.

## Features

- Four status variants: info, success, warning, error
- Icon-based visual indicators
- Default symbols powered by `tinky-figures` `useFigures()`
- Customizable colors and styles
- Theme support via tinky-theme
- Full TypeScript support

## Installation

```bash
bun add tinky-status-message
```

## Usage

```tsx
import { StatusMessage } from "tinky-status-message";
import { render } from "tinky";

render(
  <>
    <StatusMessage variant="success">
      Operation completed successfully
    </StatusMessage>
    <StatusMessage variant="error">An error occurred</StatusMessage>
    <StatusMessage variant="warning">This is a warning</StatusMessage>
    <StatusMessage variant="info">Additional information</StatusMessage>
  </>,
);
```

## API

### StatusMessage

The main status message component.

#### Props

| Prop       | Type                                          | Required | Description                                       |
| ---------- | --------------------------------------------- | -------- | ------------------------------------------------- |
| `children` | `ReactNode`                                   | Yes      | The message content to display                    |
| `variant`  | `'info' \| 'success' \| 'error' \| 'warning'` | Yes      | The status variant that determines color and icon |

#### Examples

```tsx
// Success message
<StatusMessage variant="success">File saved successfully</StatusMessage>

// Error message
<StatusMessage variant="error">Failed to connect to server</StatusMessage>

// Warning message
<StatusMessage variant="warning">This action cannot be undone</StatusMessage>

// Info message
<StatusMessage variant="info">Your changes have been queued</StatusMessage>
```

## Theme Integration

`StatusMessage` integrates with `tinky-theme` for styling:

```tsx
import { extendTheme } from "tinky-theme";

const theme = extendTheme(defaultTheme, {
  components: {
    StatusMessage: {
      styles: {
        container: () => ({
          columnGap: 2, // Increase spacing
        }),
        icon: (props) => ({
          color: customColorMap[props.variant],
        }),
      },
    },
  },
});
```

## Styling

Each variant uses a predefined color:

- `success` - Green (`✔`)
- `error` - Red (`✘`)
- `warning` - Yellow (⚠)
- `info` - Blue (ℹ)

On terminals without full Unicode support, symbols automatically fall back via `tinky-figures` (for example: `√`, `×`, `‼`, `i`).

You can customize colors through the theme system.

### Development

```bash
# Install dependencies
bun install

# Run tests
bun test

# Run linter
bun run lint

# Build the project
bun run build
```

## License

MIT
