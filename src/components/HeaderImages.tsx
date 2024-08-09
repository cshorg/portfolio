import images from "../data/images.json"

const HeaderImages = () => {
  return (
    <div className="flex flex-wrap items-center gap-4 mt-4 lg:mt-6">
      {images.map((image, index) => (
        <img
          key={index}
          className="w-[20px] lg:w-[28px]"
          src={image.url}
          alt={image.imageName}
        />
      ))}
    </div>
  )
}

export default HeaderImages
