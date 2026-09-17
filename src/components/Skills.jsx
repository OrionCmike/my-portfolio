function Skills() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Git', 'GitHub', 'Responsive Design']

  return (
    <section className="section section-tint" id="skills">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">What I use</p>
          <h2>Tools I am learning with.</h2>
        </div>
        <div className="skill-list">
          {skills.map((skill) => <span className="skill-pill" key={skill}>{skill}</span>)}
        </div>
      </div>
    </section>
  )
}

export default Skills