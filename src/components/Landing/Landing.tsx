import { Button, Center, Container, Grid, GridCol, Group, Stack, Text } from '@mantine/core'
import AnimatedTexts from './AnimatedTexts'
import classes from './Landing.module.css'
import TechnologiesLogos from './TechnologiesLogos'

function Landing() {
  return (
    <Container size="xl">
      <Grid
        styles={{
          inner: { height: '100%' },
        }}
        h="100dvh"
      >
        <GridCol order={{ base: 2, lg: 1 }} span={{ base: 12, lg: 6 }}>
          <Stack className={classes['detailsContainer']}>
            <AnimatedTexts data={[
              { word: 'Modern', props: { c: 'green' } },
              { word: 'Scalable', props: { c: 'orange' } },
              { word: 'Powerful', props: { c: 'yellow' } },
              { word: 'Ready', props: { c: 'blue' } },
            ]}
            />
            <Text>
              <Text span fz={45} fw={700} tt="uppercase">shaadkit,</Text>
              <br />
              <Text span fz={{ base: 25, lg: 35 }} tt="uppercase">my production-oriented stack for Nextjs projects</Text>
            </Text>
            <Group mt="xl">
              <Button component="a" target="_blank" href="https://github.com/shaadcode/shaadkit" color="dark" radius={999} tt="capitalize" variant="outline">
                repository
              </Button>
            </Group>
          </Stack>
        </GridCol>
        <GridCol order={{ base: 1, lg: 2 }} span={{ base: 12, lg: 6 }}>
          <Center h="100%">
            <TechnologiesLogos />
          </Center>
        </GridCol>
      </Grid>
    </Container>
  )
}

export default Landing
