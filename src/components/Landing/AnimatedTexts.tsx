import type { TextProps } from '@mantine/core'
import { Box, Group, Text, Transition } from '@mantine/core'
import { useInterval, useTimeout } from '@mantine/hooks'
import { useEffect, useState } from 'react'

interface Props {
  data: Array<{
    word: string
    props?: TextProps
  }>
}

function AnimatedTexts(props: Props) {
  const [activeWordIndex, setActiveWordIndex] = useState(0)
  const [activeCharIndex, setActiveCharIndex] = useState(-1)
  const decrementActiveCharIndex = useInterval(
    () => setActiveCharIndex(prev => prev - 1),
    100,
  )
  const { start } = useTimeout(decrementActiveCharIndex.start, 4000)
  const activeWord = props.data[activeWordIndex]
  const incrementActiveCharIndex = () => setActiveCharIndex(prevIndex => prevIndex + 1)

  const chars = activeWord?.word.split('').map((char, i) => {
    return (
      <Transition
        key={i}
        mounted={activeCharIndex >= i}
        transition="skew-up"
        duration={100}
        onEntered={() => {
          if (i + 1 >= activeWord.word.length) {
            start()
          }
          else {
            setActiveCharIndex(prev => prev + 1)
          }
        }}
      >
        {styles => (
          <Box style={styles}>
            <Text span fz="xl" fw={800} {...activeWord.props}>
              {char}
            </Text>
          </Box>
        )}
      </Transition>
    )
  })

  useEffect(() => {
    incrementActiveCharIndex()
  }, [])

  useEffect(() => {
    if (activeCharIndex === -1 && decrementActiveCharIndex.active) {
      decrementActiveCharIndex.stop()
      setActiveWordIndex(prev => activeWordIndex + 1 >= props.data.length ? 0 : prev + 1)
      incrementActiveCharIndex()
    }
  }, [activeCharIndex])

  return (
    <Group gap={1} wrap="nowrap">
      {chars}
    </Group>
  )
}

export default AnimatedTexts
