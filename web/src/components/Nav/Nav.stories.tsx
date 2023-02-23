// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Nav> = (args) => {
//   return <Nav {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Nav from './Nav'

export const generated = () => {
  return <Nav />
}

export default {
  title: 'Components/Nav',
  component: Nav,
} as ComponentMeta<typeof Nav>
