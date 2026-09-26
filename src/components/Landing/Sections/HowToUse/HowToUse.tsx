import type { DefaultMantineColor } from '@mantine/core';
import { ActionIcon, Alert, Anchor, Badge, Card, Code, CopyButton, Divider, Group, Stack, Text, Timeline, Title, Tooltip } from '@mantine/core';
import { IconCheck, IconCopy, IconInfoCircle, IconPlayerPlay, IconRocket, IconSettings, IconTerminal2 } from '@tabler/icons-react';

function CodeBlock({ code, label }: { code: string, label?: string }) {
  return (
    <Card withBorder radius="md" p="md" bg="dark.8">
      <Group justify="space-between" mb="xs">
        <Text size="xs" c="dimmed" ff="monospace">
          {label || 'Terminal'}
        </Text>
        <CopyButton value={code} timeout={2000}>
          {({ copied, copy }) => (
            <Tooltip label={copied ? 'Copied!' : 'Copy'} withArrow position="left">
              <ActionIcon
                color={copied ? 'teal' : 'gray'}
                variant="subtle"
                onClick={copy}
                size="sm"
              >
                {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
              </ActionIcon>
            </Tooltip>
          )}
        </CopyButton>
      </Group>
      <Code block c="teal.4" bg="transparent" style={{ fontSize: 13 }}>
        {code}
      </Code>
    </Card>
  )
}

const prerequisitesData = [
  { label: 'Bun v1.1+', color: '#ff2e97' },
  { label: 'Node.js v24+', color: 'green' },
] as const satisfies Array<{ label: string, color: DefaultMantineColor }>

function HowToUse() {
  return (
    <Stack gap="xl" px="md">
      {/* Title */}
      <Stack gap="xs" align="center">
        <Badge
          variant="light"
          color="teal"
          size="lg"
          leftSection={<IconRocket size={14} />}
        >
          Quick Start
        </Badge>
        <Title
          order={1}
          ta="center"
          fz={{ base: 32, sm: 50 }}
          fw={800}
          lh={1.2}
        >
          It&apos;s ready in under 5 minutes!
        </Title>
        <Text c="dimmed" ta="center" size="lg" maw={600}>
          Get ShaadKit up and running with just a few commands. No complex
          configuration, no extra dependencies — just a production-oriented stack.
        </Text>
      </Stack>

      <Divider />

      {/* Prerequisites */}
      <Stack gap="sm">
        <Title order={3} fw={700}>
          📋 Prerequisites
        </Title>
        <Text c="dimmed" size="sm">
          Before you begin, make sure the following tools are installed on your
          system:
        </Text>
        <Group gap="xs">
          {prerequisitesData.map(prerequisite => (
            <Badge

              key={prerequisite.label}
              variant="dot"
              color={prerequisite.color}
              size="lg"
            >
              {prerequisite.label}
            </Badge>
          ))}
        </Group>
        <Alert
          variant="light"
          color="orange"
          icon={<IconInfoCircle size={16} />}
          title="Why Bun?"
        >
          I use the Bun package manager because it offers better speed and quality compared to
          {' '}
          <Code>pnpm</Code>
          {' '}
          and
          {' '}
          <Code>npm</Code>
          {' '}
          .
        </Alert>
      </Stack>

      {/* Setup Steps */}
      <Stack gap="md">
        <Title order={3} fw={700}>
          🚀 Setup Steps
        </Title>

        <Timeline active={4} bulletSize={32} lineWidth={2}>
          <Timeline.Item
            bullet={<IconTerminal2 size={16} />}
            title={<Text fw={600}>1. Clone the template</Text>}
          >
            <Text c="dimmed" size="sm" mb="xs">
              Clone the ShaadKit template from GitHub:
            </Text>
            <CodeBlock
              code="git clone https://github.com/shaadcode/shaadkit.git my-app"
              label="Git"
            />
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconSettings size={16} />}
            title={<Text fw={600}>2. Install dependencies</Text>}
          >
            <Text c="dimmed" size="sm" mb="xs">
              Navigate into the project folder and install dependencies:
            </Text>
            <CodeBlock code="cd my-app && bun install" label="Bun" />
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconPlayerPlay size={16} />}
            title={<Text fw={600}>3. Start the dev server</Text>}
          >
            <Text c="dimmed" size="sm" mb="xs">
              Launch the Next.js development server:
            </Text>
            <CodeBlock code="bun dev" label="Bun" />
            <Text c="dimmed" size="sm" mt="xs">
              You can now view your project at
              {' '}
              <Anchor href="http://localhost:3000" target="_blank" c="teal">
                http://localhost:3000
              </Anchor>
              .
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconCheck size={16} />}
            title={<Text fw={600}>4. Done! 🎉</Text>}
          >
            <Text c="dimmed" size="sm">
              Your project is ready. You can now explore components in
              Storybook, run tests, or start coding right away.
            </Text>
          </Timeline.Item>
        </Timeline>
      </Stack>

    </Stack>
  )
}

export default HowToUse
