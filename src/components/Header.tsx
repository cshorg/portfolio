import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Header() {
  return (
    <header className="flex items-start justify-between w-full">
      <div>
        <h1 className="text-xl font-bold leading-5">Cole Grohs</h1>
        <h4 className="text-neutral-50 text-[14px]">Frontend Developer</h4>
      </div>

      <ul className="flex items-center gap-1">
        <li>
          <FaGithub />
        </li>
        <li>
          <FaLinkedin />
        </li>
        <li className="text-neutral-50 text-[14px] hover:underline cursor-pointer">
          Resume
        </li>
      </ul>
    </header>
  )
}
