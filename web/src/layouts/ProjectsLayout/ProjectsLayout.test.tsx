import { render } from '@redwoodjs/testing/web'

import ProjectsLayout from './ProjectsLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ProjectsLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProjectsLayout />)
    }).not.toThrow()
  })
})
