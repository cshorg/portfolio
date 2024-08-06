import {
  IconSun,
  IconMoon,
  IconBrandGithub,
  IconBrandX
} from "@irsyadadl/paranoid"

const Navbar = ({ handleTheme }: any) => {
  const socials = [
    {
      icon: <IconBrandGithub className="" width={16} />,
      link: "/github"
    },
    { icon: <IconBrandX className="" width={16} />, link: "/x" }
  ]

  return (
    <nav className="sticky top-0 z-10 w-full h-[58px] dark:bg-black bg-white text-zinc-950 dark:text-white border-zinc-100 dark:border-zinc-800 flex items-center border-b-[1px] backdrop-blur-lg">
      <div className="flex items-center justify-between w-full px-4 mx-auto max-w-screen-2xl">
        <div className="flex items-center justify-center px-3 text-lg font-bold tracking-tighter text-black transition duration-75 ease-in rounded-lg cursor-pointer dark:text-white h-9">
          colegrohs
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleTheme}
            type="button"
            aria-label="theme"
            className="border-[1px] size-9 flex items-center justify-center focus:outline-2 focus:outline-offset-2 focus:outline focus:outline-blue-500 border-zinc-100 hover:bg-zinc-100/60 dark:border-zinc-800 dark:hover:bg-zinc-800/50 rounded-lg transition ease-in duration-75"
          >
            <IconSun className="h-[1rem] w-[1rem] transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0" />
            <IconMoon className="h-[1.1rem] w-[1rem] absolute transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100" />
          </button>
          <span className="w-[1px] h-7 bg-zinc-100 dark:bg-zinc-800 mx-1"></span>
          {socials.map((social) => (
            <button
              type="button"
              aria-label="theme"
              className="border-[1px] size-9 flex items-center justify-center focus:outline-2 focus:outline-offset-2 focus:outline focus:outline-blue-500 border-zinc-100 hover:bg-zinc-100/60 dark:border-zinc-800 dark:hover:bg-zinc-800/50 rounded-lg transition ease-in duration-75"
            >
              {social.icon}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
