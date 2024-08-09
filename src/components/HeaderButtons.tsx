import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconFileDownload,
  IconMail,
  IconSun,
  IconMoon
} from "@irsyadadl/paranoid"

const HeaderButtons = ({ handleTheme }: any) => {
  const links = [
    {
      label: "Github",
      url: "https://github.com/cshorg",
      icon: <IconBrandGithub width={18} />
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/colegrohs/",
      icon: <IconBrandLinkedin width={18} />
    },
    {
      label: "X",
      url: "https://x.com/cshorg1",
      icon: <IconBrandX width={18} />
    }
  ]

  return (
    <div className="flex flex-wrap items-center gap-2 mt-4 lg:mt-6">
      {links.map((link) => (
        <button
          key={link.label}
          onClick={() => window.open(link.url)}
          className="flex focus:outline focus:outline-2 focus-visible:outline-2 focus:outline-offset-2 focus:outline-blue-500 items-center hover:underline gap-1 text-xs border-[1px] text-zinc-950 border-zinc-200 hover:bg-zinc-100/50 dark:text-zinc-50 dark:border-zinc-800 rounded-lg h-9 px-4 dark:hover:bg-zinc-800/50 transition ease-in duration-75 cursor-pointer"
        >
          {link.icon}
          {link.label}
        </button>
      ))}
      <a
        aria-label="Resume"
        type="button"
        className="flex focus:outline focus:outline-2 focus-visible:outline-2 focus:outline-offset-2 focus:outline-blue-500 items-center hover:underline gap-1 text-xs border-[1px] text-zinc-950 border-zinc-200 hover:bg-zinc-100/50 dark:text-zinc-50 dark:border-zinc-800 rounded-lg h-9 px-4 dark:hover:bg-zinc-800/50 transition ease-in duration-75 cursor-pointer"
        href="/Resume.pdf"
        download="Cole_Grohs_Resume.pdf"
      >
        <IconFileDownload width={18} />
        Resume
      </a>
      <a
        aria-label="Email"
        type="button"
        href="mailto:Colegrohs@outlook.com"
        className="flex focus:outline focus:outline-2 focus-visible:outline-2 focus:outline-offset-2 focus:outline-blue-500 items-center hover:underline gap-1 text-xs border-[1px] text-zinc-950 border-zinc-200 hover:bg-zinc-100/50 dark:text-zinc-50 dark:border-zinc-800 rounded-lg h-9 px-4 dark:hover:bg-zinc-800/50 transition ease-in duration-75 cursor-pointer"
      >
        <IconMail width={18} />
        Email
      </a>
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
  )
}

export default HeaderButtons
