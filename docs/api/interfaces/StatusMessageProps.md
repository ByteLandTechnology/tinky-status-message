[**tinky-status-message**](../README.md)

---

[tinky-status-message](../globals.md) / StatusMessageProps

# Interface: StatusMessageProps

Props for the StatusMessage component.

StatusMessageProps

## Examples

Info status message:

```tsx
const infoMessage: StatusMessageProps = {
  variant: "info",
  children: "Your request was received successfully",
};
```

Success status message:

```tsx
const successMessage: StatusMessageProps = {
  variant: "success",
  children: "All systems operational",
};
```

## Properties

### children

> `readonly` **children**: `ReactNode`

The message content to display within the status message.
This is the main body of the status message and can include text or any valid ReactNode.
The message is rendered in normal text style for readability.
Must be a valid ReactNode (components, elements, strings, numbers, etc.).

---

### variant

> `readonly` **variant**: [`StatusMessageVariant`](../type-aliases/StatusMessageVariant.md)

The status variant
determines the visual appearance including icon color and semantic meaning.

Variant options and their meanings:

- `info`: General information or neutral messages (blue color, ℹ️ icon / ℹ fallback)
- `success`: Successful operations or confirmations (green color, ✅ icon / √ fallback)
- `error`: Error messages or failure notifications (red color, ❌ icon / × fallback)
- `warning`: Warning messages or cautionary notes (yellow color, ⚠️ icon / ‼ fallback)

Each variant has associated:

- Icon color for visual emphasis
- Icon character displayed alongside the message
- Semantic meaning for accessibility and understanding
