# React Native SSR Boilerplate

👋 Welcome to my React Native boilerplate project! This starter kit is a labor of love, inspired by the amazing technologies that have fueled my passion for cross-platform app development. This project is based on [next-expo-solito from Tamagui project](https://github.com/tamagui/tamagui/tree/master/starters/next-expo-solito) .

## What's Inside?

This project is a synthesis of several fantastic technologies:

- [Tauri](https://tauri.app/): A framework for building desktop apps with web technologies.
- [Tamagui](https://tamagui.dev/): A tool for creating delightful cross-platform apps.
- [Solito](https://solito.dev/): A monorepo management system for building crossplateform apps (Expo & Next.js).
- [Jotai](https://jotai.org/): Primitive and flexible state management for React
- [Storybook](https://storybook.js.org/): A tool for developing UI components in isolation.

## Prerequisites

Before diving into this project, make sure you've taken a look at the following resources:

- [Getting Started with Tauri](https://tauri.app/v1/guides/getting-started/setup/next-js/)
- [Jotai introduction](https://jotai.org/docs/introduction)
- [Storybook for Next.js](https://storybook.js.org/recipes/next)
- [Storybook for React Native Web](https://storybook.js.org/addons/@storybook/addon-react-native-web)
- [Creating a Tamagui App](https://tamagui.dev/docs/guides/create-tamagui-app)
- [Solito Starter](https://solito.dev/starter)

## Installation and Usage

### Tauri (dev)
- Setting up [macos](https://tauri.app/v1/guides/getting-started/prerequisites/#setting-up-macos)
- Setting up [linux](https://tauri.app/v1/guides/getting-started/prerequisites/#setting-up-linux)

### Usage
This project operates as a monorepo and consists of three main packages:

1. **@my/ui**: Handles theming, variants, and more.
2. **@my/app**: Manages the various elements of the application.
3. **@my/design**: Takes care of components and their documentation using Storybook.

To get started, use the following commands:

- `upgrade:tamagui`: Upgrade Tamagui.
- `upgrade:tamagui:canary`: Upgrade to the Tamagui Canary version.
- `update:browserlist`: Update your browser list.
- `build:types`: Build TypeScript definitions.
- `build:desktop`: Build the desktop application.
- `run:web`: Start the web application.
- `run:web:prod`: Run the production web version.
- `run:mobile`: Run the mobile application.
- `run:desktop`: Run the desktop application.
- `run:storybook`: Launch Storybook for component development.

## Utils
```tsx
import { Text as TamaText } from 'tamagui'
import { useLaryVariants } from '@my/ui'

const Foo = () => {
  const Text = useLaryVariants<typeof TamaText>(TamaText); 
  return (
    <Text textBold inSuccess>Hi !</Text>
  )
}
```
`useLaryVariants` will overload your tamagui components with [Lary](https://github.com/RiceCooker-dev/Lary) props, more documentation [here](https://github.com/RiceCooker-dev/Lary/blob/master/doc/doc.md) .


## Credits

This project wouldn't be possible without the amazing work these talented individuals and communities:

- [@natew](https://github.com/natew) for Tamagui
- [@nandorojo](https://github.com/nandorojo) for Solito
- [@dai-shi](https://github.com/dai-shi) for Jotai
- [@storybookjs](https://github.com/storybookjs) for Storybook
- [@tauri-apps](https://github.com/tauri-apps) for Tauri

## Contribute

As an amator enthusiast, I recognize that this project might not adhere to all the best practices of these frameworks. I wholeheartedly welcome your advice and contributions to make this project even better. 😊

Thank you for checking out my React Native boilerplate, and I hope it inspires your own cross-platform development adventures! 🚀🙌

---

*Disclaimer: This project is a labor of love and may not always follow all the best practices of the technologies it uses. Your feedback and guidance are greatly appreciated!* 🙏
