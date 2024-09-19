import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconFileDownload,
  IconMail,
  IconSun,
  IconMoon
} from "@irsyadadl/paranoid"

import Button from "./Button"

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
        <Button
          key={link.label}
          fullWidth={false}
          className="gap-1 px-4"
          onClick={() => window.open(link.url)}
        >
          {link.icon}
          {link.label}
        </Button>
      ))}
      <a
        aria-label="Resume Download"
        type="button"
        className="relative rounded-lg h-9 px-4 bg-zinc-50 border-[1px] border-zinc-950 dark:text-zinc-950 flex items-center justify-center gap-1 text-xs font-semibold text-zinc-950 transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_rgb(41,37,36)] dark:hover:shadow-[4px_4px_0_rgb(41,37,36)] hover:after:absolute hover:after:-bottom-2 hover:after:-right-2 hover:after:left-0 hover:after:top-0 hover:after:-z-10"
        href="/Resume.pdf"
        download="Cole_Grohs_Resume.pdf"
      >
        <IconFileDownload width={18} />
        Download Resume
      </a>
      <a
        aria-label="Email"
        type="button"
        href="mailto:Colegrohs@outlook.com"
        className="relative rounded-lg h-9 px-4 bg-zinc-50 border-[1px] border-zinc-950 dark:text-zinc-950 flex items-center justify-center gap-1 text-xs font-semibold text-zinc-950 transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_rgb(41,37,36)] dark:hover:shadow-[4px_4px_0_rgb(41,37,36)] hover:after:absolute hover:after:-bottom-2 hover:after:-right-2 hover:after:left-0 hover:after:top-0 hover:after:-z-10"
      >
        <IconMail width={18} />
        Contact Me
      </a>
      <div className="w-[1px] h-7 bg-zinc-500 dark:bg-zinc-500 mx-1" />
      <Button size="icon" onClick={handleTheme}>
        <IconSun
          width={18}
          className="transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0"
        />
        <IconMoon
          width={18}
          className="absolute transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100"
        />
      </Button>
    </div>
  )
}

export default HeaderButtons
