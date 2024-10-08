import Card from "../components/Card"
import projects from "../data/projects.json"
import Draggable from "react-draggable"

const getRandomPosition = (maxX: number, maxY: number) => {
  return {
    x: Math.random() * (maxX - 1) + 1,
    y: Math.random() * (maxY - 1) + 1
  }
}

const Home = () => {
  const maxX = 200
  const maxY = 200

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {projects.map((project, index) => {
        const { x, y } =
          typeof window !== "undefined" && window.innerWidth >= 1200
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
