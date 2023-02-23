import { render } from '@redwoodjs/testing/web'

import Controls from './Controls'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Controls', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Controls />)
    }).not.toThrow()
  })
})
