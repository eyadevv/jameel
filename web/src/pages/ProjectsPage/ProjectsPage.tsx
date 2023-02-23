import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Project from 'src/components/Project/Project'
import ProjectLayout from 'src/layouts/ProjectsLayout/ProjectsLayout'
const ProjectsPage = () => {
  return (
    <ProjectLayout>
      <MetaTags title="Projects" description="Projects page" />
      <main className="flex h-full w-full flex-col items-center justify-start gap-y-4 ">
        <Project name="lol this project is fake" />
        <Project name="lol this project is fake" />
        <Project name="Help Wanted" />
      </main>
    </ProjectLayout>
  )
}

export default ProjectsPage
