import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNode,
  FaGit,
  FaFigma,
  FaDocker,
  FaNpm
} from "react-icons/fa"
import { BiLogoTypescript } from "react-icons/bi"
import { DiPostgresql, DiMongodb } from "react-icons/di"
import {
  RiJavascriptFill,
  RiTailwindCssFill,
  RiNextjsFill
} from "react-icons/ri"

export default function Projects() {
  const skills = [
    { label: "HTML5", icon: <FaHtml5 size={20} /> },
    { label: "CSS", icon: <FaCss3Alt size={20} /> },
    { label: "Javascript", icon: <RiJavascriptFill size={20} /> },
    { label: "TypeScript", icon: <BiLogoTypescript size={20} /> },
    { label: "React", icon: <FaReact size={20} /> },
    { label: "Next", icon: <RiNextjsFill size={20} /> },
    { label: "Node", icon: <FaNode size={20} /> },
    { label: "Tailwind", icon: <RiTailwindCssFill size={20} /> },
    { label: "PostgreSQL", icon: <DiPostgresql size={20} /> },
    { label: "MongoDB", icon: <DiMongodb size={20} /> },
    { label: "Git", icon: <FaGit size={20} /> },
    { label: "Figma", icon: <FaFigma size={20} /> },
    { label: "Docker", icon: <FaDocker size={20} /> },
    { label: "Npm", icon: <FaNpm size={20} /> }
  ]
  const projects = [
    {
      name: "Ancient Realms LLC",
      desc: "about asdsdfasdfasdf aasdfasdfa dfd adf df a asdf adfasd f asdf about asdsdfasdfasdf aasdfasdfa dfd adf df a asdf adfasd f asdf about asdsdfasdfasdf aasdfasdfa dfd adf df a asdf adfasd f asdf"
    },
    {
      name: "TFT-Forge",
      desc: "about asdsdfasdfasdf aasdfasdfa dfd adf df a asdf adfasd f asdf about asdsdfasdfasdf aasdfasdfa dfd adf df a asdf adfasd f asdf"
    },
    {
      name: "Wordle Clone",
      desc: "about asdsdfasdfasdf aasdfasdfa dfd adf df a asdf adfasd f asdf about asdsdfasdfasdf aasdfasdfa dfd adf df a asdf adfasd f asdf about asdsdfasdfasdf aasdfasdfa dfd adf df a asdf adfasd f asdf"
    }
  ]

  return (
    <section className="mt-10">
      <div>
        <h1 className="font-bold">Projects</h1>
        <ul className="flex flex-col gap-3 mt-2">
          {projects.map((project, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="leading-4">
                <h2 className="font-semibold">{project.name}</h2>

                <p className="text-neutral-50 text-[12px] max-w-[400px]">
                  {project.desc}
                </p>
              </div>

              <div className="flex gap-1 text-neutral-50 text-[14px] cursor-pointer">
                <a className="hover:underline">Live</a>|
                <a className="hover:underline">Github</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10 ">
        <h1 className="font-bold">Skills</h1>
        <ul className="flex flex-wrap items-center max-w-screen-md gap-2 mt-2">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="flex items-center gap-1 px-2 py-1 text-[12px] rounded-sm bg-neutral-800"
            >
              {skill.icon}
              {skill.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
