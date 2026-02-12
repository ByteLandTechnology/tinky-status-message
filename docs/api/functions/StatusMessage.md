[**tinky-status-message**](../README.md)

---

[tinky-status-message](../globals.md) / StatusMessage

# Function: StatusMessage()

> **StatusMessage**(`props`): `Element`

StatusMessage component for displaying messages in terminal UIs.

## Parameters

### props

[`StatusMessageProps`](../interfaces/StatusMessageProps.md)

Component props

## Returns

`Element`

The rendered status message component

This is the main status message component that renders stylized message boxes with
variant-specific colors and icons for terminal applications.

Component structure:

```
┌─────────────────────┐
│  [icon]  Message    │  <- icon container + message text
└─────────────────────┘
```

Rendering behavior:

1. Reads theme configuration for the StatusMessage component
2. Resolves variant-specific styles from theme
3. Gets terminal-appropriate symbols from `useFigures()`
4. Displays icon on the left side (non-shrinking)
5. Displays content on the right side

Theme integration:

- Uses `useComponentTheme` hook to resolve styles
- Styles come from `statusMessageTheme.styles.*` functions
- Styles are applied to Box and Text components from tinky

Flex layout behavior:

- Icon maintains fixed size (flexShrink: 0)
- Message can expand/shrink as needed

## Examples

Simple info message:

```tsx
<StatusMessage variant="info">
  System maintenance scheduled for tonight
</StatusMessage>
```

Success message:

```tsx
<StatusMessage variant="success">Your changes have been saved</StatusMessage>
```

Error message:

```tsx
<StatusMessage variant="error">
  Unable to reach the server. Please try again later.
</StatusMessage>
```

Warning message:

```tsx
<StatusMessage variant="warning">
  You are using 90% of your available storage
</StatusMessage>
```

## See

- [StatusMessageProps](../interfaces/StatusMessageProps.md)
- [statusMessageTheme](../variables/statusMessageTheme.md)
