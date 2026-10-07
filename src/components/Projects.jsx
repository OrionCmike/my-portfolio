import { Link } from 'react-router-dom'
import { projects } from '../pages/projects'

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-heading projects-heading">
          <div><p className="eyebrow">Selected projects</p><h2>Ideas, made visible.</h2></div>
          <p>A closer look at the interfaces, tools, and decisions behind each project.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <img className="project-banner" src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="project-tags">{project.tools.map((tool) => <span className="tag" key={tool}>{tool}</span>)}</div>
                <Link className="text-link" to={`/projects/${project.slug}`}><span>View project</span><svg viewBox="0 0 14 14" aria-hidden="true"><path d="M2 7h9M8 3l4 4-4 4" /></svg></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Projects
