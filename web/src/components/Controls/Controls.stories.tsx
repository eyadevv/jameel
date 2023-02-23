// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Controls> = (args) => {
//   return <Controls {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Controls from './Controls'

export const generated = () => {
  return <Controls />
}

export default {
  title: 'Components/Controls',
  component: Controls,
} as ComponentMeta<typeof Controls>
