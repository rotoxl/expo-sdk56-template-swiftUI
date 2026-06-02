# This template vs the official Expo template (June 2026) 👋

This project is a port of the standard template (with standard RN components) to `@expo/ui/swift-ui`.

Mind that the purpose of this port is not pixel-perfection, just `similar enough`

## Code

- Screens
  - `src/app/index.tsx` → `src/app/index.swiftui.tsx`
  - `src/app/explore.tsx` → `src/app/explore.swiftui.tsx`

- Components
  - `src/components/ui/collapsible.tsx` → `src/components/ui/collapsible.swiftui.tsx`
  - `src/components/hint-row.tsx` → `src/components/hint-row.swiftui.tsx`
  - `src/components/themed-text.tsx` → `src/components/themed-text.swiftui.tsx`

## Comparison

|                                            Default                                             |                                              with ExpoUI                                              |
| :--------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------: |
| ![](https://github.com/rotoxl/expo-sdk56-template-swiftUI/blob/main/docs/explore.png?raw=true) | ![](https://github.com/rotoxl/expo-sdk56-template-swiftUI/blob/main/docs/explore.expoui.png?raw=true) |
|  ![](https://github.com/rotoxl/expo-sdk56-template-swiftUI/blob/main/docs/index.png?raw=true)  |  ![](https://github.com/rotoxl/expo-sdk56-template-swiftUI/blob/main/docs/index.expoui.png?raw=true)  |
