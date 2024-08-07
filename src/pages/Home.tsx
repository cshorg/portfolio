import Card from "../components/Card"

const Home = () => {
  const projects = [
    {
      title: "TFT-Forge",
      description:
        "TFT-Forge is amde to be a social platform for users playing the game Team Fight Tactics. TFT-Forge is amde to be a social platform for users playing the game Team Fight Tactics. It allows users to find optimal builds and find current metas.",
      route: "/tft-forge",
      url: "https://tft-forge.vercel.app/",
      github: "https://github.com/cshorg/tft-forge"
    },
    {
      title: "Wordle Clone",
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
      route: "/tft-forge",
      url: "https://tft-forge.vercel.app/",
      github: "https://github.com/cshorg/tft-forge"
    },
    {
      title: "complib-ui",
      description:
        "TFT-Forge is amde to be a social platform for users playing the game Team Fight Tactics. It allows users to find optimal builds and find current metas.",
      route: "/tft-forge",
      url: "https://tft-forge.vercel.app/",
      github: "https://github.com/cshorg/tft-forge"
    }
  ]

  return (
    <div className="grid max-w-screen-lg grid-cols-3 gap-4 mt-2">
      {projects.map((project) => (
        <Card
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
