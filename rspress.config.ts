import * as path from 'node:path'
import { defineConfig } from '@rspress/core'

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'shaadkit',
  description: 'Next.js foundation for modern web applications',
  lang: 'en',
  icon: '/logos/Skit-logo.png',
  base: '/shaadkit-docs/',
  locales: [
    {
      lang: 'en',
      label: 'English',
    },
  ],
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/shaadcode/shaadkit',
      },
    ],
  },
})
