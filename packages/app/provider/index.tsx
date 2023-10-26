import { TamaguiProvider, TamaguiProviderProps } from '@my/ui'
import { useColorScheme } from 'react-native'
import MainProvider from './MainProvider'


import config from '../tamagui.config'

export function Provider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  const scheme = useColorScheme()
  return (
    <TamaguiProvider
      config={config}
      disableInjectCSS
      defaultTheme={'light'}
      {...rest}
    >
      <MainProvider>
        {children}
      </MainProvider>
    </TamaguiProvider>
  )
}
