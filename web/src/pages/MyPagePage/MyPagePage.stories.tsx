import type { ComponentMeta } from '@storybook/react'

import MyPagePage from './MyPagePage'

export const generated = () => {
  return <MyPagePage />
}

export default {
  title: 'Pages/MyPagePage',
  component: MyPagePage,
} as ComponentMeta<typeof MyPagePage>
