import Button from "../components/Button"
import Tooltip from "../components/Tooltip"
import images from "../data/images.json"
import { Link } from "react-router-dom"

const Complib = () => {
  const languages = ["React", "JavaScript", "Vite", "TailwindCSS"]

  const filteredImages = images.filter((img) =>
    languages.includes(img.imageName)
  )

  return (
    <div className="flex w-full min-h-screen">
      <div className="w-1/2 px-4 pt-4 md:pt-6 md:px-10 lg:pl-20 2xl:px-36 2xl:pt-20 bg-zinc-50">
        <Link to="/">
          <Button fullWidth={false} className="px-8">
            Back
          </Button>
        </Link>
        <div className="mt-20">
          <h1 className="text-5xl font-bold leading-snug">Complib</h1>
          <div className="flex items-center gap-2 mt-2">
            {filteredImages.map((img) => (
              <Tooltip label={img.imageName} position="bottom">
                <img
                  key={img.imageName}
                  src={img.url}
                  alt={img.imageName}
                  className="size-7"
                />
              </Tooltip>
            ))}
          </div>
        </div>
      </div>

      <div className="w-1/2 max-h-screen px-4 pt-4 overflow-y-auto text-white md:pt-6 md:px-10 lg:pl-20 2xl:px-36 2xl:pt-20 bg-zinc-950">
        <header className="text-lg font-semibold">
          Why I created complib.
        </header>
        <article>
          a
          <img
            src="./blog-header-image.jpg"
            alt="blog-image"
            className="my-6"
          />
        </article>
      </div>
    </div>
  )
}

export default Complib
