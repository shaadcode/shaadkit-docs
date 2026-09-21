import type { ComponentProps } from 'react'
import { Image } from '@mantine/core'
import { LogoStepper } from '../ui/logo-stepper'

const logos: ComponentProps<typeof LogoStepper>['logos'] = [
  {
    icon: <Image src="/logos/bun.svg" alt="Bun" width={40} height={40} />,
    label: 'Bun',
  },
  {
    icon: <Image src="/logos/eslint.svg" alt="ESLint" width={40} height={40} />,
    label: 'ESLint',
  },
  {
    icon: <Image src="/logos/mantine.svg" alt="Mantine" width={40} height={40} />,
    label: 'Mantine',
  },
  {
    icon: <Image src="/logos/nextjs.svg" alt="Next.js" width={40} height={40} />,
    label: 'Next.js',
  },
  {
    icon: <Image src="/logos/postcss.svg" alt="PostCSS" width={40} height={40} />,
    label: 'PostCSS',
  },
  {
    icon: <Image src="/logos/storybook.svg" alt="Storybook" width={40} height={40} />,
    label: 'Storybook',
  },
  {
    icon: <Image src="/logos/stylelint.svg" alt="Stylelint" width={40} height={40} />,
    label: 'Stylelint',
  },
  {
    icon: <Image src="/logos/typescript.svg" alt="TypeScript" width={40} height={40} />,
    label: 'TypeScript',
  },
]

function TechnologiesLogos() {
  return (
    <LogoStepper logos={logos} />
  )
}

export default TechnologiesLogos
