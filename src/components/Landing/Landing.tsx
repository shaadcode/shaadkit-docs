import { Affix, Container, Stack } from '@mantine/core';
import ThemeToggle from '../ui/ThemeToggle';
import Contributing from './Sections/Contributing/Contributing';
import Faq from './Sections/FAQ/FAQ';
import Hero from './Sections/Hero/Hero';
import HowToUse from './Sections/HowToUse/HowToUse';
import WhyShaadKit from './Sections/WhyShaadKit/WhyShaadKit';
import YouMightAlsoLike from './Sections/YouMightAlsoLike/YouMightAlsoLike';

function Landing() {
  return (
    <Container size="xl" pb="xl">
      <Affix position={{ bottom: 20, left: 20 }}>
        <ThemeToggle />
      </Affix>
      <Stack gap={100}>
        <Hero />
        <WhyShaadKit />
        <HowToUse />
        <Faq />
        <YouMightAlsoLike />
        <Contributing />
      </Stack>
    </Container>
  )
}

export default Landing
