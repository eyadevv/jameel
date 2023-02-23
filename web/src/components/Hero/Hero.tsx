import { Link } from '@redwoodjs/router'

const Hero = () => {
  return (
    <div className="flex h-max min-h-[60vh] w-full flex-col items-center justify-center gap-2 overflow-clip whitespace-nowrap bg-blue-900 p-4">
      <div className="flex h-max w-max flex-row flex-wrap items-center justify-between gap-2 rounded-full bg-emerald-300 bg-opacity-20 p-1 text-xs">
        <div className="h-6 w-6 rounded-full bg-blue-600"></div>
        <p>No hidden fees</p>
        <Link to="/money">Read More</Link>
      </div>
      <h1 className="text-[9vw] font-bold  laptop:text-5xl">
        Find The Best Talent
      </h1>
      <h2 className="text-[7vw] font-semibold laptop:text-3xl">
        For The Best Price
      </h2>
      <a
        href="/app"
        className="flex h-10 w-36 items-center justify-center rounded bg-blue-600 font-bold "
      >
        Get Started
      </a>
      <div className="flex h-max w-max flex-row flex-wrap items-center justify-start gap-1 py-4 text-xs phone:hidden tablet:w-11/12   tablet:justify-start">
        <p>Most Wanted :</p>
        <Tag name="Web Design" />
        <Tag name="Web Development" />
        <Tag name="Ai Expert" />
        <Tag name="Graphic Design" />
        <Tag name="Devops" />
      </div>
    </div>
  )
}

export default Hero
const Tag = ({ name }) => {
  return (
    <Link
      to={`/tags/`}
      className="rounded-lg bg-emerald-900 bg-opacity-25 p-2 text-center"
    >
      {name}
    </Link>
  )
}
