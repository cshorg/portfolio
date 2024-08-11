import React from "react"
import Button from "./Button"
import { Link } from "react-router-dom"
import { IconBrandGithub, IconOpenLink } from "@irsyadadl/paranoid"
import { tv } from "tailwind-variants"

const getRandomRotationClass = () => {
  const rotations = [
    "rotate-2",
    "rotate-6",
    "rotate-12",
    "-rotate-2",
    "-rotate-6",
    "-rotate-12"
  ]
  const randomIndex = Math.floor(Math.random() * rotations.length)
  return rotations[randomIndex]
}

const card = tv({
  base: "border-[1px] z-10 cursor-move shadow-sm rounded-lg text-zinc-950 dark:text-zinc-950 border-zinc-950 dark:border-zinc-950 p-4 shadow-md",
  variants: {
    bgColor: {
      green: "bg-green-400",
      indigo: "bg-indigo-400",
      yellow: "bg-yellow-300",
      orange: "bg-orange-300",
      red: "bg-red-400",
      blue: "bg-blue-400",
      sky: "bg-sky-400"
    }
  },
  defaultVariants: {
    bgColor: "green"
  }
})

interface CardProps {
  title: string
  description: string | React.ReactNode
  route: string
  url: string
  github: string
  color: any
  className?: string
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  route,
  url,
  github,
  color,
  className
}) => {
  const rotationClass = getRandomRotationClass()

  return (
    <div className={`${card({ bgColor: color, className })} ${rotationClass}`}>
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="mt-2 text-sm min-h-[100px] tracking-tight max-h-[100px] line-clamp-[5] overflow-y-hidden">
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
