type ProjectLayoutProps = {
  children?: React.ReactNode
}
import Controls from 'src/components/Controls/Controls'
import Nav from 'src/components/Nav/Nav'
const ProjectLayout = ({ children }: ProjectLayoutProps) => {
  return (
    <main className="flex h-max w-screen flex-col items-center justify-start gap-4 bg-blue-900">
      <Nav />
      <div className="flex h-max w-11/12 flex-row items-start justify-between ">
        <div className="overflow-show h-max w-1/5 flex-shrink-0 rounded-lg bg-black phone:hidden">
          <Controls />
        </div>
        <div className="h-full w-full flex-shrink items-center justify-center">
          {children}
        </div>
      </div>
    </main>
  )
}

export default ProjectLayout
