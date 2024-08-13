import React from "react"
import images from "../data/images.json"
import Tooltip from "./Tooltip"

interface Image {
  imageName: string
  url: string
}

const HeaderImages: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-4 mt-4  lg:mt-6">
      {images.map((image: Image, index: number) => (
        <Tooltip label={image.imageName} position="bottom">
          <img
            key={index}
            className="w-[20px] lg:w-[28px]"
            src={image.url}
            alt={image.imageName}
          />
        </Tooltip>
      ))}
    </div>
  )
}

export default HeaderImages
