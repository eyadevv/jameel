// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Project> = (args) => {
//   return <Project {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Project from './Project'

export const generated = () => {
  return <Project />
}

export default {
  title: 'Components/Project',
  component: Project,
} as ComponentMeta<typeof Project>
