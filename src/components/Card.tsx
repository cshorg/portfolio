import { IconBrandGithub, IconOpenLink } from "@irsyadadl/paranoid"
import { Link } from "react-router-dom"
import React from "react"

interface CardProps {
  title: string
  description: string | React.ReactNode
  route: string
  url: string
  github: string
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  route,
  url,
  github
}) => {
  return (
    <div className="border-[1px] rounded-lg text-zinc-950 dark:text-zinc-50 border-zinc-200 dark:border-zinc-800 p-4">
      <h1 className="text-xl font-bold">{title}</h1>
      <p className=" mt-2 text-sm min-h-[100px] tracking-tight max-h-[100px] line-clamp-[5] overflow-y-hidden">
        {description}
      </p>
      <div className="flex items-center justify-between w-full gap-2 mt-4">
        <Link
          to={route}
          className="focus:outline focus:outline-2 focus-visible:outline-2 focus:outline-offset-2 focus:outline-blue-500 text-xs hover:underline dark:hover:bg-zinc-800/50 border-[1px] flex items-center justify-center text-zinc-950 border-zinc-200 hover:bg-zinc-100/50 dark:text-zinc-50 dark:border-zinc-800 rounded-lg h-9 w-full"
        >
          Learn more
        </Link>
        <button
          onClick={() => window.open(url)}
          className="focus:outline focus:outline-2 focus-visible:outline-2 focus:outline-offset-2 focus:outline-blue-500 text-xs border-[1px] dark:hover:bg-zinc-800/50 transistion ease-in duration-75 text-zinc-950 border-zinc-200 hover:bg-zinc-100/50 dark:text-zinc-50 dark:border-zinc-800 rounded-lg min-h-9 min-w-9 flex items-center justify-center"
        >
          <IconOpenLink width={18} />
        </button>
        <button
          onClick={() => window.open(github)}
          className="focus:outline focus:outline-2 focus-visible:outline-2 focus:outline-offset-2 focus:outline-blue-500 text-xs border-[1px] text-zinc-950 border-zinc-200 hover:bg-zinc-100/50 dark:text-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-800/50 transistion ease-in duration-75  rounded-lg min-h-9 min-w-9 flex items-center justify-center"
        >
          <IconBrandGithub width={18} />
        </button>
      </div>
    </div>
  )
}

export default Card
