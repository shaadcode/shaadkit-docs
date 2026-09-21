import { MantineProvider } from '@mantine/core'
import { Layout as BasicLayout } from '@rspress/core/theme-original'
// Learn how to customize the theme: https://rspress.rs/guide/basic/custom-theme
import '@mantine/core/styles.css'
import './index.css'

function Layout() {
  return (
    <MantineProvider
      theme={{
        fontFamily: 'Geist',
        headings: { fontFamily: 'Geist' },
      }}
      forceColorScheme="light"
    >
      <BasicLayout />
    </MantineProvider>
  )
}

export { Layout }
// eslint-disable-next-line react-refresh/only-export-components
export * from '@rspress/core/theme-original'
