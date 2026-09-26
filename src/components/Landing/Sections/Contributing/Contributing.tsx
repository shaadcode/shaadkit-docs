import { Anchor, Badge, Button, Card, Divider, Group, List, SimpleGrid, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { IconBook, IconBrandGithub, IconBug, IconBulb, IconExternalLink, IconGitPullRequest, IconHeart, IconMessageCircle, IconStar, IconUsers } from '@tabler/icons-react';
import classes from './Contributing.module.css';

const waysToContribute = [
  {
    emoji: '🐛',
    icon: IconBug,
    title: 'Report Bugs',
    description:
      'Found something broken? Open an issue with clear steps to reproduce. Every bug report helps make ShaadKit more stable.',
    color: 'red',
  },
  {
    emoji: '💡',
    icon: IconBulb,
    title: 'Suggest Features',
    description:
      'Have an idea that would make ShaadKit better? Share it in GitHub Discussions. We love hearing from the community.',
    color: 'yellow',
  },
  {
    emoji: '🔧',
    icon: IconGitPullRequest,
    title: 'Submit Pull Requests',
    description:
      'Fix a bug, improve documentation, or add a new feature. Check out the "good first issue" label for a great starting point.',
    color: 'green',
  },
  {
    emoji: '📖',
    icon: IconBook,
    title: 'Improve Docs',
    description:
      'Documentation is just as important as code. Help us make ShaadKit docs clearer, more complete, and easier to follow.',
    color: 'blue',
  },
  {
    emoji: '⭐',
    icon: IconStar,
    title: 'Star the Repo',
    description:
      'A simple star on GitHub helps others discover ShaadKit. It takes a second and means a lot to the project.',
    color: 'orange',
  },
  {
    emoji: '💬',
    icon: IconMessageCircle,
    title: 'Join the Discussion',
    description:
      'Answer questions, share your experience, or just say hi. The community is what makes open source great.',
    color: 'grape',
  },
]

function Contributing() {
  return (
    <Stack gap="xl" py="xl" maw={1100} mx="auto" px="md">
      {/* Header */}
      <Stack gap="xs" align="center">
        <Badge
          variant="light"
          color="pink"
          size="lg"
          leftSection={<IconHeart size={14} />}
        >
          Contributing & Community
        </Badge>
        <Title
          order={2}
          ta="center"
          fz={{ base: 28, sm: 44 }}
          fw={800}
          lh={1.2}
        >
          Built by the community, for the community
        </Title>
        <Text c="dimmed" ta="center" size="lg" maw={700}>
          ShaadKit is open source and welcomes contributions of all kinds —
          not just code. Whether you report a bug, improve docs, or just star
          the repo, you are part of the project.
        </Text>
      </Stack>

      <Divider />

      {/* Ways to Contribute Grid */}
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
        {waysToContribute.map((item) => {
          const Icon = item.icon
          return (
            <Card
              key={item.title}
              withBorder
              style={{ '--card-border-color': item.color }}
              className={classes['wayToContribute']}
            >
              <Stack gap="sm">
                <Group gap="sm" align="center">
                  <ThemeIcon
                    size={44}
                    radius="md"
                    variant="light"
                    color={item.color}
                  >
                    <Icon size={22} />
                  </ThemeIcon>
                  <Text fz={17} fw={700} style={{ lineHeight: 1.2 }}>
                    {item.title}
                  </Text>
                </Group>
                <Text c="dimmed" size="sm" lh={1.6}>
                  {item.description}
                </Text>
              </Stack>
            </Card>
          )
        })}
      </SimpleGrid>

      <Divider />

      {/* Quick Start for Contributors */}
      <Stack gap="md">
        <Group gap="sm">
          <IconUsers size={20} />
          <Title order={3} fw={700}>
            Ready to make your first contribution?
          </Title>
        </Group>
        <Text c="dimmed" size="sm">
          The process is straightforward. Here is how to get started:
        </Text>
        <Card withBorder radius="md" p="lg">
          <List
            spacing="sm"
            size="sm"
            center
            icon={(
              <ThemeIcon color="teal" size={22} radius="xl">
                <IconGitPullRequest size={12} />
              </ThemeIcon>
            )}
          >
            <List.Item>
              <Text fw={600} span>Discuss</Text>
              {' '}
              first — open an issue or start a discussion to share your idea
              and get feedback before writing code
            </List.Item>
            <List.Item>
              <Text fw={600} span>Fork</Text>
              {' '}
              the repository on GitHub
            </List.Item>
            <List.Item>
              <Text fw={600} span>Clone</Text>
              {' '}
              your fork locally and create a
              new branch
            </List.Item>
            <List.Item>
              <Text fw={600} span>Make</Text>
              {' '}
              your changes following the
              project&apos;s code style
            </List.Item>
            <List.Item>
              <Text fw={600} span>Test</Text>
              {' '}
              your changes with
              {' '}
              <Text ff="monospace" size="xs" span>
                bun run test
              </Text>
            </List.Item>
            <List.Item>
              <Text fw={600} span>Submit</Text>
              {' '}
              a Pull Request with a clear
              description and reference the original issue
            </List.Item>
          </List>
        </Card>
        <Text c="dimmed" size="xs" ta="center">
          New to open source? Look for issues labeled
          {' '}
          <Badge variant="light" color="green" size="sm">
            good first issue
          </Badge>
          {' '}
          — they are specifically for newcomers.
        </Text>
      </Stack>

      <Divider />

      {/* CTA Buttons */}
      <Stack gap="md" align="center">
        <Group justify="center" gap="md">
          <Button
            component="a"
            href="https://github.com/shaadcode/shaadkit"
            target="_blank"
            rel="noopener noreferrer"
            leftSection={<IconBrandGithub size={18} />}
            rightSection={<IconExternalLink size={14} />}
            variant="filled"
            color="dark"
            size="md"
            radius="md"
          >
            View on GitHub
          </Button>
          <Button
            component="a"
            href="https://github.com/shaadcode/shaadkit/issues"
            target="_blank"
            rel="noopener noreferrer"
            leftSection={<IconBug size={18} />}
            variant="light"
            color="teal"
            size="md"
            radius="md"
          >
            Browse Issues
          </Button>
        </Group>
        <Text c="dimmed" size="xs" ta="center">
          Have questions? Open a
          {' '}
          <Anchor
            href="https://github.com/shaadcode/shaadkit/discussions"
            target="_blank"
            c="teal"
            fw={600}
            inline
          >
            GitHub Discussion
          </Anchor>
          {' '}
          and we will help you out.
        </Text>
      </Stack>
    </Stack>
  )
}

export default Contributing
