import Card from "../components/Card"
import projects from "../data/projects.json"
import Draggable from "react-draggable"

const getRandomPosition = (maxX: number, maxY: number) => {
  return {
    x: Math.floor(Math.random() * maxX),
    y: Math.floor(Math.random() * maxY)
  }
}

const Home = () => {
  const maxX = 300
  const maxY = 300

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {projects.map((project, index) => {
        const { x, y } =
          typeof window !== "undefined" && window.innerWidth >= 768
            ? getRandomPosition(maxX, maxY)
            : { x: 0, y: 0 }

        return (
          <Draggable key={index} bounds=".layout" defaultPosition={{ x, y }}>
            <div>
              <Card
                title={project.title}
                description={project.description}
                route={project.route}
                url={project.url}
                github={project.github}
                color={project.color}
              />
            </div>
          </Draggable>
        )
      })}
    </div>
  )
}

export default Home
