import Tooltip from "../components/Tooltip"
import images from "../data/images.json"

const TftForge = () => {
  const languages = ["NextJs", "TypeScript", "TailwindCSS"]

  const filteredImages = images.filter((img) =>
    languages.includes(img.imageName)
  )

  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-screen-md overflow-x-visible overflow-y-auto">
        <h1 className="mt-4 text-3xl font-bold tracking-tight lg:mt-0 lg:text-5xl text-zinc-950 dark:text-zinc-50">
          Creating a social platform
        </h1>
        <div className="flex items-center gap-4 mt-4">
          {filteredImages.map((img) => (
            <Tooltip label={img.imageName} position="bottom">
              <img src={img.url} alt={img.imageName} className="size-6" />
            </Tooltip>
          ))}
        </div>
        <article className="mt-4 text-zinc-950 dark:text-zinc-50">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </article>
      </div>
    </div>
  )
}

export default TftForge
