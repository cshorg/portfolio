import Card from "../components/Card"
import projects from "../data/projects.json"

const Home = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
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
