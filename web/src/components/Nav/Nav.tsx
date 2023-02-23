import { Work, Talent, Why } from '../../../data/text'
const Nav = () => {
  return (
    <nav className="flex h-16 w-full flex-shrink-0 flex-row items-center justify-center bg-blue-900 px-2 text-xs">
      <div className="flex h-full w-11/12 flex-row items-center justify-between">
        <div className="flex h-full w-max items-center justify-center gap-2">
          <p className="text-xl font-bold">Waseet</p>
        </div>
        <div className="flex h-full w-1/2 flex-row items-center justify-center gap-4 phone:hidden tablet:hidden"></div>
        <button className="rounded bg-emerald-600 px-4 py-2 font-bold">
          Talent?
        </button>
      </div>
    </nav>
  )
}

export default Nav
