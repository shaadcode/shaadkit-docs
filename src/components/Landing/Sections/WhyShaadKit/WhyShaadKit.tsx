import { Badge, Card, Divider, Group, SimpleGrid, Stack, Text, ThemeIcon, Title } from '@mantine/core';

import { IconArrowsExchange, IconAtom, IconBolt, IconBook, IconBrush, IconComponents, IconPackage, IconSearch, IconShieldCheck, IconSparkles, IconTestPipe, IconWorld } from '@tabler/icons-react';
import classes from './WhyShaadKit.module.css';

const featuresData = [
  {
    emoji: '⚡',
    icon: IconBolt,
    title: 'Bun as Package Manager',
    description: 'A fast and modern package manager that keeps dependency installation, scripts, and project tooling simple and efficient.',
    color: 'yellow',
  },
  {
    emoji: '🧩',
    icon: IconComponents,
    title: 'Mantine v9',
    description: 'A powerful and accessible component library with flexible theming, composable primitives, and everything needed to build polished interfaces.',
    color: 'teal',
  },
  {
    emoji: '🌍',
    icon: IconWorld,
    title: 'next-intl',
    description: 'Production-ready internationalization with structured translations, locale management, and a scalable foundation for multilingual applications.',
    color: 'blue',
  },
  {
    emoji: '🔄',
    icon: IconArrowsExchange,
    title: 'TanStack Query',
    description: 'A robust server-state solution for caching, synchronization, mutations, background updates, and managing asynchronous application data.',
    color: 'red',
  },
  {
    emoji: '📖',
    icon: IconBook,
    title: 'Storybook 10',
    description: 'Develop, document, test, and refine UI components in isolation with a dedicated environment built for component-driven development.',
    color: 'pink',
  },
  {
    emoji: '🧪',
    icon: IconTestPipe,
    title: 'Vitest + Playwright',
    description: 'A complete testing foundation combining fast unit and integration tests with reliable end-to-end testing for critical user flows.',
    color: 'green',
  },
  {
    emoji: '🎨',
    icon: IconBrush,
    title: 'Stylelint + ESLint',
    description: 'Consistent and maintainable code through automated linting, modern conventions, and opinionated rules that keep the codebase clean.',
    color: 'grape',
  },
  {
    emoji: '🔍',
    icon: IconSearch,
    title: 'Bundle Analyzer',
    description: 'Visualize your production bundle, identify unnecessary dependencies, and discover practical opportunities to improve application performance.',
    color: 'orange',
  },
  {
    emoji: '⚛️',
    icon: IconAtom,
    title: 'React 19 + Compiler',
    description: 'Built on modern React with compiler-powered optimizations designed to reduce manual performance work and keep components efficient.',
    color: 'cyan',
  },
  {
    emoji: '✅',
    icon: IconShieldCheck,
    title: 'Arktype & Arkenv',
    description: 'Type-safe runtime validation and environment configuration that help catch invalid data and configuration issues before they reach production.',
    color: 'lime',
  },
  {
    emoji: '🛠️',
    icon: IconPackage,
    title: 'Production Ready',
    description: 'A carefully curated development foundation with essential tooling and conventions already configured for building maintainable applications.',
    color: 'indigo',
  },
  {
    emoji: '✨',
    icon: IconSparkles,
    title: 'Zero Configuration',
    description: 'Everything is preconfigured to work together from the first command, eliminating repetitive setup so you can focus on building your product.',
    color: 'violet',
  },
]

function WhyShaadKit() {
  return (
    <Stack gap="xl" py="xl" px="md">
      {/* Header */}
      <Stack gap="xs" align="center">
        <Badge

          color="teal"
          size="lg"
          leftSection={<IconSparkles size={14} />}
        >
          Why ShaadKit?
        </Badge>
        <Title
          order={2}
          ta="center"
          fz={{ base: 28, sm: 44 }}
          fw={800}
          lh={1.2}
        >
          Not just a boilerplate
        </Title>
        <Text c="dimmed" ta="center" size="lg" maw={700}>
          Ordinary boilerplates are just a starting point. ShaadKit is a
          complete, opinionated foundation that solves every concern of a
          professional project from day one.
        </Text>
      </Stack>

      <Divider />

      {/* Features Grid */}
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
        {featuresData.map((feature) => {
          const Icon = feature.icon
          return (
            <Card
              key={feature.title}
              withBorder
              style={{
                '--feature-color-border': `var(--mantine-color-${feature.color}-2)`,
              }}
              className={classes['featureCard']}

            >
              <Stack gap="sm">
                <Group gap="sm" align="center">
                  <ThemeIcon
                    size={44}
                    radius="md"
                    variant="light"
                    color={feature.color}
                  >
                    <Icon size={22} />
                  </ThemeIcon>
                  <Text fz={18} fw={700} style={{ lineHeight: 1.2 }}>
                    {feature.title}
                  </Text>
                </Group>
                <Text c="dimmed" size="sm" lh={1.6}>
                  {feature.description}
                </Text>
              </Stack>
            </Card>
          )
        })}
      </SimpleGrid>
    </Stack>
  )
}

export default WhyShaadKit
