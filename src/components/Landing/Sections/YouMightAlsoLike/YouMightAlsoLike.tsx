import { Badge, Button, Card, Divider, Group, SimpleGrid, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { IconArrowUpRight, IconMessage2, IconPalette, IconSparkles, IconTransform, IconWorld } from '@tabler/icons-react';
import classes from './YouMightAlsoLike.module.css';

const projectsData = [
  {
    name: 'ICU-studio',
    tagline: 'Fast and lightweight IDE for ICU messages',
    description:
      'A fast, lightweight IDE for working with ICU messages. Built with TypeScript and designed to make message formatting easier.',
    icon: IconMessage2,
    tags: ['IDE', 'ICU-message', 'I18n'],
    link: 'https://github.com/shaadcode/ICU-Studio',
    cta: 'View on GitHub',
    badgeColor: 'grape',
    featured: true,
  },
  {
    name: 'Transform.tools',
    tagline: 'Convert anything to anything',
    description:
      'A multi-purpose converter for code formats — HTML to JSX, JSON to TypeScript, SVG to JSX, and dozens more. Essential for any developer working across multiple languages.',
    icon: IconTransform,
    tags: ['Converter', 'Code', 'Productivity'],
    link: 'https://transform.tools',
    cta: 'Open Transform.tools',
    badgeColor: 'blue',
    featured: false,
  },
  {
    name: 'Mantine Colors Generator',
    tagline: 'Generate perfect color palettes',
    description:
      'Official Mantine tool for generating 10-shade color palettes that work seamlessly with the Mantine theme. Paste a color, get a full palette ready for your theme object.',
    icon: IconPalette,
    tags: ['Mantine', 'Colors', 'Theme'],
    link: 'https://mantine.dev/colors-generator/',
    cta: 'Generate Colors',
    badgeColor: 'teal',
    featured: false,
  },
  {
    name: 'i18n Ally Next',
    tagline: 'i18n on steroids',
    description:
      'A powerful internationalization companion for Next.js. Inline translations, auto-completion, and a visual editor for your locale files — makes next-intl feel like a breeze.',
    icon: IconWorld,
    tags: ['i18n', 'Vscode-extension', 'DX'],
    link: 'https://lydanne.github.io/i18n-ally-next/',
    cta: 'Explore i18n Ally',
    badgeColor: 'orange',
    featured: false,
  },
]

function YouMightAlsoLike() {
  return (
    <Stack gap="xl" py="xl" maw={900} mx="auto" px="md">
      {/* Header */}
      <Stack gap="xs" align="center">
        <Badge
          variant="light"
          color="grape"
          size="lg"
          leftSection={<IconSparkles size={14} />}
        >
          You Might Also Like
        </Badge>
        <Title
          order={2}
          ta="center"
          fz={{ base: 28, sm: 40 }}
          fw={800}
          lh={1.2}
        >
          More tools from the same maker
        </Title>
        <Text c="dimmed" ta="center" size="md" maw={600}>
          If you find ShaadKit useful, you might also enjoy these projects
          built with the same philosophy — lightweight, focused, and
          ready to use.
        </Text>
      </Stack>

      <Divider />

      {/* Cards Grid */}
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        {projectsData.map((project) => {
          const Icon = project.icon
          return (
            <Card
              key={project.name}
              withBorder
              radius="md"
              p="lg"
              className={classes['cardRoot']}
              style={{
                transition: 'transform 150ms ease, box-shadow 150ms ease',
                borderColor: project.featured
                  ? 'var(--mantine-color-grape-5)'
                  : undefined,
              }}
            >
              <Stack gap="md" h="100%" justify="space-between">
                <Stack gap="sm">
                  {/* Header: Icon + Status */}
                  <Group justify="space-between" align="flex-start">
                    <ThemeIcon
                      size={48}
                      radius="md"
                      variant="light"
                      color={project.badgeColor}
                    >
                      <Icon size={26} />
                    </ThemeIcon>
                  </Group>

                  {/* Title + Tagline */}
                  <Stack gap={4}>
                    <Group gap="xs" align="center">
                      <Text fz={20} fw={700}>
                        {project.name}
                      </Text>
                    </Group>
                    <Text c="dimmed" size="sm" fw={500}>
                      {project.tagline}
                    </Text>
                  </Stack>

                  {/* Description */}
                  <Text size="sm" c="dimmed" lh={1.6}>
                    {project.description}
                  </Text>

                  {/* Tags */}
                  <Group gap="xs" mt="xs">
                    {project.tags.map(tag => (
                      <Badge
                        key={tag}
                        variant="light"
                        color="gray"
                        size="sm"
                        radius="sm"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </Group>
                </Stack>

                {/* CTA */}
                <Button
                  component="a"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant={project.featured ? 'filled' : 'light'}
                  color={project.badgeColor}
                  radius="md"
                  fullWidth
                  rightSection={<IconArrowUpRight size={16} />}
                >
                  {project.cta}
                </Button>
              </Stack>
            </Card>
          )
        })}
      </SimpleGrid>

    </Stack>
  )
}

export default YouMightAlsoLike
