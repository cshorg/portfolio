const Header = () => {
  return (
    <header className="max-w-screen-xl justify-between bg-zinc-900 backdrop-blur-lg border-[1px] border-zinc-800 h-[60px] w-[500px] flex items-center px-8 rounded-full mt-6">
      <a href="" className="font-bold text-lg">
        Cole Grohs
      </a>
      <ul className="flex items-center gap-4 text-sm text-zinc-400">
        <li>About</li>
        <li>Projects</li>
        <li>Github</li>
        <li>dark</li>
      </ul>
    </header>
  )
}

export default Header
