import type { ComponentMeta, ComponentStory } from '@storybook/react'

import ProjectLayout from './ProjectsLayout'

export const generated: ComponentStory<typeof ProjectLayout> = (args) => {
  return <ProjectLayout {...args} />
}

export default {
  title: 'Layouts/ProjectLayout',
  component: ProjectLayout,
} as ComponentMeta<typeof ProjectLayout>
