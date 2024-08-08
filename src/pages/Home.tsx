import Card from "../components/Card"

const Home = () => {
  const projects = [
    {
      title: "Wordle Clone",
      description: (
        <>
          Recreation of the popular game{" "}
          <a
            className="text-blue-500 underline cursor-pointer"
            onClick={() =>
              window.open("https://www.nytimes.com/games/wordle/index.html")
            }
          >
            Wordle
          </a>
          . In this project I learned to utilize localstorage for storing wins
          and losses for returning users. The localstorage also stores which
          theme the user set so its the same when they come back. I then learned
          to use eventListeners for key inputs to allow users to use keyboard
          strokes instead of clicking on the keyboard.
        </>
      ),
      route: "/wordle-clone",
      url: "https://wordle-clone-cshorg.vercel.app/",
      github: "https://github.com/cshorg/wordle-clone"
    },
    {
      title: "TFT-Forge",
      description:
        "TFT-Forge TFT-Forge is amde to be a social platform for users playing the game Team Fight Tactics. TFT-Forge is amde to be a social platform for users playing th TFT-Forge is amde to be a social platform for users playing the game Team Fight Tactics. TFT-Forge is amde to be a social platform for users playing th is amde to be a social platform for users playing the game Team Fight Tactics. It allows users to find optimal builds and find current metas.",
      route: "/tft-forge",
      url: "https://tft-forge.vercel.app/",
      github: "https://github.com/cshorg/tft-forge"
    },
    {
      title: "Websockets with Go",
      description:
        "It allows users to find optimal builds and find current metas.",
      route: "/go-websocket",
      url: "#",
      github: "https://github.com/cshorg/websocket-chat"
    },
    {
      title: "complib-ui",
      description:
        "TFT-Forge is amde to be a social platform for users playing the game Team Fight Tactics. It allows users to find optimal builds and find current metas.",
      route: "/complib",
      url: "https://www.npmjs.com/package/complib-ui",
      github: "https://github.com/cshorg/complib-ui"
    },
    {
      title: "complib-ui",
      description:
        "TFT-Forge is amde to be a social platform for users playing the game Team Fight Tactics. It allows users to find optimal builds and find current metas.",
      route: "/complib",
      url: "https://www.npmjs.com/package/complib-ui",
      github: "https://github.com/cshorg/complib-ui"
    }
  ]

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {projects.map((project) => (
        <Card
          key={project.title}
          title={project.title}
          description={project.description}
          route={project.route}
          url={project.url}
          github={project.github}
        />
      ))}
    </div>
  )
}

export default Home
