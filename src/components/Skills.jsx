function Skills() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Git', 'GitHub', 'Responsive Design']
  return (
    <section className="section section-tint" id="skills">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">The toolkit</p>
          <h2>The tools behind the work.</h2>
        </div>
        <div className="skill-list">{skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div>
      </div>
    </section>
  )
}
export default Skills
