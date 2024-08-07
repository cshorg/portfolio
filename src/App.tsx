import Header from "./components/Header"
import Card from "./components/Card"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom"

function App({ handleTheme }: any) {
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
    <div className="flex flex-col w-full text-white bg-white items dark:bg-zinc-950 h-dvh">
      <Header handleTheme={handleTheme} />
      <main className="flex max-w-screen-lg mt-4 mx-36">
        <div className="relative flex max-w-screen-lg gap-2 mt-2">
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
      </main>
      <Footer />
    </div>
  )
}

export default App
