import projects from "../data/project"

function Projects() {
  return (
    <>
      <h1>Projects</h1>
      {projects.map((project) =>
        <div>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <img alt={`${project.name} screenshot`} src={project.imageUrl} />
          {project.link && <a href=""></a>}
        </div>
      )}
    </>
  )
}
export default Projects