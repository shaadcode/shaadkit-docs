import type { ComponentProps } from 'react';
import { ActionIcon, Tooltip, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';

interface Props {
  button?: ComponentProps<typeof ActionIcon<'div'>>
}
function ThemeToggle(props: Props) {
  const { toggleColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  })

  return (
    <Tooltip
      label={computedColorScheme === 'dark' ? 'Light mode' : 'Dark mode'}
      withArrow
      position="left"
    >
      <ActionIcon
        onClick={toggleColorScheme}
        variant="default"
        size="lg"
        radius="xl"
        aria-label="Toggle color scheme"
        {...props.button}
      >
        {computedColorScheme === 'dark'
          ? (
              <IconSun size={18} />
            )
          : (
              <IconMoon size={18} />
            )}
      </ActionIcon>
    </Tooltip>
  )
}

export default ThemeToggle
