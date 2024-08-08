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
    <header className="max-w-screen-lg mx-4 mt-4 md:mt-6 md:mx-10 lg:mt-10 lg:ml-20 2xl:mt-20 2xl:ml-36">
      <h1 className="max-w-screen-lg text-3xl font-bold leading-snug tracking-tight lg:leading-snug lg:text-5xl text-zinc-950 dark:text-zinc-50">
        Hello my name is
        <span className="ml-2 bg-blue-500 text-zinc-50 dark:bg-blue-500 dark:text-zinc-950">
          Cole Grohs
        </span>
        , I'm a passionate{" "}
        <span className="mr-2 bg-blue-500 text-zinc-50 dark:bg-blue-500 dark:text-zinc-950">
          Frontend Developer
        </span>
        always looking to create something{" "}
        <span className="bg-blue-500 text-zinc-50 dark:bg-blue-500 dark:text-zinc-950">
          awesome
        </span>
        .
      </h1>
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
      <div className="flex flex-wrap items-center gap-4 mt-4 lg:mt-6">
        <img
          width={28}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
        />
        <img
          width={28}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
        />
        <img
          width={28}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        />
        <img
          width={28}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
        />
        <img
          width={28}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        />
        <img
          width={28}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
        />

        <img
          width={28}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
        />
        <img
          width={28}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
        />
        <img
          width={28}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
        />
        <i className="text-[28px] text-zinc-950 dark:text-zinc-50 devicon-github-original"></i>
        <img
          width={28}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
        />
        <img
          width={28}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/storybook/storybook-original.svg"
        />
        <img
          width={28}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
        />
        <img
          width={28}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg"
        />
        <img
          width={28}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg"
        />
      </div>
    </header>
  )
}

export default Header
