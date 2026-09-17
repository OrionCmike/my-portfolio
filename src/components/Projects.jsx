function Projects() {
  const projects = [
    { title: 'Morning Notes', description: 'A calm space for collecting thoughts, plans, and small daily wins.', tags: ['React', 'CSS'] },
    { title: 'Local Finds', description: 'A simple guide that helps people discover interesting places nearby.', tags: ['JavaScript', 'HTML'] },
    { title: 'Study Space', description: 'A focused dashboard for keeping learning goals visible and organized.', tags: ['Vite', 'Responsive'] },
  ]

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-heading projects-heading">
          <div>
            <p className="eyebrow">Selected practice</p>
            <h2>Small projects, thoughtful details.</h2>
          </div>
          <p>Here are a few ideas I have brought to life while learning.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className={`project-banner project-banner-${index + 1}`}><span>0{index + 1}</span></div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <a className="text-link" href="#contact">
                  <span>View project</span>
                  <svg viewBox="0 0 14 14" aria-hidden="true">
                    <path d="M2 7h9M8 3l4 4-4 4" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects