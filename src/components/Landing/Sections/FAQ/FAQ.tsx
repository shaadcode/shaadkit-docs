import {
    Accordion,
    Anchor,
    Badge,
    Divider,
    Group,
    Stack,
    Text,
    Title,
} from '@mantine/core';
import { IconHelp, IconInfoCircle, IconPalette, IconSettings, IconSparkles } from '@tabler/icons-react';

const faqData = [
  {
    category: 'About ShaadKit',
    icon: IconInfoCircle,
    questions: [
      {
        q: 'What exactly is ShaadKit?',
        a: 'ShaadKit is a production-oriented starter kit for Next.js projects. The goal is to let you launch an MVP quickly without complex configuration.',
      },
      {
        q: 'How is it different from create-next-app?',
        a: 'create-next-app only sets up Next.js. ShaadKit additionally pre-configures Mantine, next-intl, Storybook, Vitest, Playwright, and ESLint for you.',
      },
      {
        q: 'How is it different from the official Mantine templates?',
        a: 'Official Mantine templates are minimal and only set up Mantine. ShaadKit is a community template that bundles more tools (i18n, testing, Storybook) together.',
      },
    ],
  },
  {
    category: 'Installation & Setup',
    icon: IconSettings,
    questions: [
      {
        q: 'Why Bun? Can I use npm or pnpm instead?',
        a: 'In practice, the Bun package manager is significantly faster than pnpm and npm. While it may require more storage space, I have prioritized speed and quality for Shaadkit. Of course, you are free to use any other package manager you prefer instead of Bun.',
      },
    ],
  },
  {
    category: 'Customization',
    icon: IconPalette,
    questions: [
      {
        q: 'What is the philosophy behind using ShaadKit?',
        a: 'Think of ShaadKit as a foundation. I believe that a high-quality project foundation makes the development process faster and more enjoyable. ShaadKit is neither so cluttered that it confuses you, nor so simple that you get bogged down in unnecessary configurations. You are free to choose your own technologies (the defaults are merely personal recommendations).',
      },
      {
        q: 'Can I remove Mantine and use Tailwind or something else?',
        a: 'Yes! But Mantine is the heart of ShaadKit. The goal is to boost output speed, and Mantine is perfectly suited for this thanks to its exceptional features. I do not recommend using Tailwind and Shadcn for large-scale projects!',
      },
      {
        q: 'Why ESLint instead of oxlint?',
        a: 'ESLint has more capabilities and the Antfu config provides great flexibility. oxlint is faster but has not yet reached ESLint maturity.',
      },
    ],
  },
  {
    category: 'Features & Capabilities',
    icon: IconSparkles,
    questions: [
      {
        q: 'Why next-intl? Is it only for translation?',
        a: 'Not just translation. next-intl is also used for "static text management" so you do not have to search through multiple files to change a single word.',
      },
      {
        q: 'Is ShaadKit suitable for large enterprise projects?',
        a: 'It focuses on MVPs and small-to-medium-sized projects. You might need additional configuration for large enterprise projects, but in my opinion, this foundation is a good starting point for large-scale projects as well.',
      },
      {
        q: 'Does it include a database or ORM?',
        a: 'No, ShaadKit only covers the frontend. For a database you can add Prisma, Drizzle, or any other tool.',
      },
    ],
  },
] as const satisfies Array<{
  category: string
  questions: Array<{ q: string, a: string }>
  icon: any
}>

function Faq() {
  return (
    <Stack mx="auto" gap="xl" px="md" w="100%" maw={900}>
      {/* Header */}
      <Stack gap="xs" align="center">
        <Badge
          variant="light"
          color="teal"
          size="lg"
          leftSection={<IconHelp size={14} />}
        >
          FAQ
        </Badge>
        <Title
          order={1}
          ta="center"
          fz={{ base: 32, sm: 50 }}
          fw={800}
          lh={1.2}
        >
          Frequently Asked Questions
        </Title>
        <Text c="dimmed" ta="center" size="lg" maw={600}>
          Everything you need to know about ShaadKit. Can&apos;t find what
          you&apos;re looking for?
          {' '}
          <Anchor
            inline
            href="https://github.com/shaadcode/shaadkit/issues"
            target="_blank"
            c="indigo"
            fw={600}
          >
            Open an issue on GitHub
          </Anchor>
        </Text>
      </Stack>

      <Divider />

      {/* Categories */}
      <Stack gap="xl">
        {faqData.map(category => (
          <Stack key={category.category} gap="sm">
            <Group gap="xs">
              <category.icon size={18} />
              <Title order={3} fw={700}>
                {category.category}
              </Title>
            </Group>

            <Accordion variant="separated" radius="md" chevronPosition="left">
              {category.questions.map((item, index) => (
                <Accordion.Item
                  key={index}
                  value={`${category.category}-${index}`}
                >
                  <Accordion.Control>
                    <Text fw={600} size="sm">
                      {item.q}
                    </Text>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Text c="dimmed" size="sm">
                      {item.a}
                    </Text>
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </Stack>
        ))}
      </Stack>

      <Divider />

      {/* Footer note */}
      <Stack gap="xs" align="center">
        <Text c="dimmed" size="sm" ta="center">
          Still have questions?
          {' '}
          <Anchor
            href="https://github.com/shaadcode/shaadkit/issues"
            target="_blank"
            c="teal"
            fw={600}
          >
            Open an issue on GitHub
          </Anchor>
        </Text>
      </Stack>
    </Stack>
  )
}

export default Faq
