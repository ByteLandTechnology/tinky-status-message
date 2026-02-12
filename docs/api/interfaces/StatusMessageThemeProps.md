[**tinky-status-message**](../README.md)

---

[tinky-status-message](../globals.md) / StatusMessageThemeProps

# Interface: StatusMessageThemeProps

Props interface for StatusMessage theme functions.

StatusMessageThemeProps

## Example

```typescript
const infoProps: StatusMessageThemeProps = { variant: "info" };
const successProps: StatusMessageThemeProps = { variant: "success" };
const errorProps: StatusMessageThemeProps = { variant: "error" };
const warningProps: StatusMessageThemeProps = { variant: "warning" };
```

## Properties

### variant

> **variant**: [`StatusMessageVariant`](../type-aliases/StatusMessageVariant.md)

The status message variant
determines the color scheme. Each variant has specific semantic meaning:

- info: General information or neutral messages
- success: Successful operations or confirmations
- error: Error messages or failure notifications
- warning: Warning messages or cautionary notes

Variant visual characteristics:

- info: Blue color with info symbol (`ℹ`/`i`)
- success: Green color with tick symbol (`✔`/`√`)
- error: Red color with cross symbol (`✘`/`×`)
- warning: Yellow color with warning symbol (`⚠`/`‼`)
