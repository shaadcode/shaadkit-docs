import { Box, Button, Center, Container, Grid, GridCol, Group, Stack, Text } from '@mantine/core'
import { LogoStepper } from '../ui/logo-stepper'
import AnimatedTexts from './AnimatedTexts'
import TechnologiesLogos from './TechnologiesLogos'

function Landing() {
  return (
    <Container size="xl">
      <Grid>
        <GridCol span={{ base: 12, lg: 6 }}>
          <Stack gap={0} justify="center" h="100dvh">
            <AnimatedTexts data={[
              { word: 'Modern', props: { c: 'green' } },
              { word: 'Scalable', props: { c: 'orange' } },
              { word: 'Powerful', props: { c: 'yellow' } },
              { word: 'Ready', props: { c: 'blue' } },
            ]}
            />
            <Text>
              <Text span fz={45} fw={700} tt="uppercase">shaadkit,</Text>
              {'  '}
              <Text span fz={35} tt="uppercase">my production-oriented stack for Nextjs projects</Text>
            </Text>
            <Group mt="xl">
              <Button component="a" target="_blank" href="https://github.com/shaadcode/shaadkit" color="dark" radius={999} tt="capitalize" variant="outline">
                repository
              </Button>
            </Group>
          </Stack>
        </GridCol>
        <GridCol visibleFrom="lg" span={{ base: 0, lg: 6 }}>
          <Center h="100%">
            <TechnologiesLogos />
          </Center>
        </GridCol>
      </Grid>
    </Container>
  )
}

export default Landing
