import Button from "../components/Button"
import Tooltip from "../components/Tooltip"
import images from "../data/images.json"
import { Link } from "react-router-dom"

const GoWebSocket = () => {
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
          <h1 className="text-5xl font-bold leading-snug">GoWebSocket</h1>
          <div className="flex items-center gap-2 mt-2">
            <p className="text-xs font-semibold">Used</p>
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
          Back in the 1990’s, I heard about a Mega Man game for the Sega Genesis
          system. As I didn’t have a Sega Genesis and was an avid Mega Man fan,
          I was quite jealous. It would be some years later that I investigated
          this game further and discovered that it was never physically released
          in the US. I then spent about a decade checking in on its availability
          with no luck (including trying to find a handheld loaded with Sega
          games that inexplicably included Wily Wars). I had nearly given up
          when it was announced as part of the lineup on Sega’s answer to the
          NES Classic Edition, the Sega Genesis Mini. Recently, after having
          played parts of it since getting the Mini, I finally sat down and
          played it through to the end. (If you’re interested in reading more
          about the development and release of Mega Man: The Wily Wars, feel
          free to check out my Retrospection post on this game.) The Set-up: You
          are Mega Man. Former lab assistant to Dr. Light, now converted to a
          super fighting robot tasked with stopping the nefarious Dr. Wily.
          Gifted with the ability to use the weapons of your defeated foes, you
          set out to…um….stop the nefarious Dr. Wily. Technically speaking, Wily
          Wars is a sequel to the original three games, not actually a remake.
          Dr. Wily has traveled to the past in an attempt to once again defeat
          Mega Man, putting him through the exact same fights again because
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

export default GoWebSocket
