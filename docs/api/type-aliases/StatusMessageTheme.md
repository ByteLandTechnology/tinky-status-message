[**tinky-status-message**](../README.md)

---

[tinky-status-message](../globals.md) / StatusMessageTheme

# Type Alias: StatusMessageTheme

> **StatusMessageTheme** = _typeof_ [`statusMessageTheme`](../variables/statusMessageTheme.md)

Type definition for the StatusMessage theme.

## Example

Creating a custom theme that extends the base:

```typescript
import type { StatusMessageTheme } from "tinky-status-message";

const customTheme: StatusMessageTheme = {
  ...statusMessageTheme,
  styles: {
    ...statusMessageTheme.styles,
    container: () => ({
      columnGap: 2, // Changed spacing
    }),
  },
};
```

## See

- [statusMessageTheme](../variables/statusMessageTheme.md)
- [StatusMessageThemeProps](../interfaces/StatusMessageThemeProps.md)
- [ComponentTheme](#)
