import React from "react"
import {Preview} from "@storybook/react"
//import {Provider} from "@my/app/provider"
import { TamaguiProvider } from '@my/ui'
import config from '@my/app/tamagui.config'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <TamaguiProvider config={config} defaultTheme={'light'}>
        <Story/>
      </TamaguiProvider>
    )
  ]
}

export default preview
