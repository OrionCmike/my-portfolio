import { Link } from 'react-router-dom'

function ProjectDetail({ project }) {
  return (
    <section className="section project-detail">
      <div className="container">
        <div className="detail-heading">
          <p className="eyebrow">Project notes</p>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
        </div>
        <img className="detail-screenshot" src={project.image} alt={`${project.title} screenshot`} />
        <div className="detail-grid">
          <section className="detail-block">
            <h2>What it does</h2>
            <p>{project.whatItDoes}</p>
          </section>
          <section className="detail-block">
            <h2>What I used</h2>
            <p>{project.whatIUsed}</p>
          </section>
          <section className="detail-block">
            <h2>What was hard</h2>
            <p>{project.whatWasHard}</p>
          </section>
        </div>
        <Link className="button button-primary" to="/"><span aria-hidden="true">←</span>Back to home</Link>
      </div>
    </section>
  )
}
export default ProjectDetail
