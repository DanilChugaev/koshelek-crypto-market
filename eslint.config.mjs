import antfu from '@antfu/eslint-config'

export default antfu({
  vue: {
    overrides: {
      'vue/component-name-in-template-casing': ['error', 'kebab-case', {
        registeredComponentsOnly: true,
        ignores: [],
      }],
    },
  },
  ignores: [
    'vite.config.ts',
  ],
})
