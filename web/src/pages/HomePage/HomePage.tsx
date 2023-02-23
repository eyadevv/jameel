// import { Link, routes } from '@redwoodjs/router'
import { useState } from 'react'

import { MetaTags } from '@redwoodjs/web'

import Hero from 'src/components/Hero/Hero'
import Nav from 'src/components/Nav/Nav'
const HomePage = () => {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-start gap-4 overflow-x-clip bg-white dark:bg-black dark:text-white">
      <MetaTags title="Home" description="Home page" />
      <Nav />
      <Hero />
    </main>
  )
}

export default HomePage
