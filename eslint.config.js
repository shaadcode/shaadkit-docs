import antfu from '@antfu/eslint-config'

export default antfu(
  {
    react: true,

  },
  {
    rules: {
      'dot-notation': 'off',
      'ts/ban-ts-comment': 'warn',
    },
  },
)
