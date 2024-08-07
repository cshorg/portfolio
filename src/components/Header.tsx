import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconFileDownload,
  IconMail,
  IconSun,
  IconMoon
} from "@irsyadadl/paranoid"

const Header = ({ handleTheme }: any) => {
  const links = [
    { label: "Github", url: "/github", icon: <IconBrandGithub width={18} /> },
    {
      label: "LinkedIn",
      url: "/github",
      icon: <IconBrandLinkedin width={18} />
    },
    { label: "X", url: "/github", icon: <IconBrandX width={18} /> },
    { label: "Resume", url: "/github", icon: <IconFileDownload width={18} /> },
    { label: "Email", url: "/github", icon: <IconMail width={18} /> }
  ]

  return (
    <header className="max-w-screen-lg mt-24 ml-36">
      <h1 className="max-w-screen-lg text-5xl font-bold leading-snug tracking-tight text-zinc-950 dark:text-zinc-50">
        Hello my name is
        <span className="ml-2 text-zinc-50 bg-zinc-950 dark:bg-zinc-100 dark:text-zinc-950">
          Cole Grohs
        </span>
        , I'm a passionate{" "}
        <span className="mr-2 text-zinc-50 bg-zinc-950 dark:bg-zinc-100 dark:text-zinc-950">
          Frontend Developer
        </span>
        always looking to create something{" "}
        <span className=" text-zinc-50 bg-zinc-950 dark:bg-zinc-100 dark:text-zinc-950">
          awesome
        </span>
        .
      </h1>
      <div className="flex items-center gap-2 mt-12">
        {links.map((link) => (
          <button className="flex focus:outline focus:outline-2 focus-visible:outline-2 focus:outline-offset-2 focus:outline-blue-500 items-center hover:underline gap-1 text-xs border-[1px] text-zinc-950 border-zinc-200 hover:bg-zinc-100/50 dark:text-zinc-50 dark:border-zinc-800 rounded-lg h-9 px-4 dark:hover:bg-zinc-800/50 transition ease-in duration-75 cursor-pointer">
            {link.icon}
            {link.label}
          </button>
        ))}
        <div className="w-[1px] h-7 bg-zinc-200 dark:bg-zinc-800 mx-1" />
        <button
          onClick={handleTheme}
          className="flex items-center justify-center focus:outline focus:outline-2 focus-visible:outline-2 focus:outline-offset-2 focus:outline-blue-500 border-[1px] text-zinc-950 border-zinc-200 hover:bg-zinc-100/50 dark:text-zinc-50 dark:border-zinc-800 rounded-lg size-9 dark:hover:bg-zinc-800/50 transition ease-in duration-75 cursor-pointer"
        >
          <IconSun
            width={18}
            className="transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0"
          />
          <IconMoon
            width={18}
            className="absolute transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100"
          />
        </button>
      </div>
    </header>
  )
}

export default Header
