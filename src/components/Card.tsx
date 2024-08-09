import React from "react"
import Button from "./Button"
import { Link } from "react-router-dom"
import { IconBrandGithub, IconOpenLink } from "@irsyadadl/paranoid"

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
    <div className="border-[1px] shadow-sm rounded-lg bg-zinc-50 dark:bg-zinc-950 text-zinc-950 dark:text-white border-zinc-900 dark:border-zinc-500 p-4">
      <h1 className="text-xl font-bold">{title}</h1>
      <p className=" mt-2 text-sm min-h-[100px] tracking-tight max-h-[100px] line-clamp-[5] overflow-y-hidden">
        {description}
      </p>
      <div className="flex items-center justify-between w-full gap-2 mt-4">
        <Link className="w-full" to={route}>
          <Button className="hover:underline">Read Me</Button>
        </Link>
        <Button size="icon" onClick={() => window.open(url)}>
          <IconOpenLink width={18} />
        </Button>
        <Button size="icon" onClick={() => window.open(github)}>
          <IconBrandGithub width={18} />
        </Button>
      </div>
    </div>
  )
}

export default Card
