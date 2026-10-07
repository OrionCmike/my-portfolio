import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-content">
        <p className="eyebrow">Websites &amp; interfaces for people with something to share</p>
        <h1>Clean and responsive websites. Affordable.</h1>
        <p className="hero-text">I&apos;m Nicholas. I build clear, usable interfaces for the web.</p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/" state={{ scrollTo: 'projects' }}>View projects <span aria-hidden="true">↗</span></Link>
          <Link className="button button-secondary" to="/" state={{ scrollTo: 'contact' }}>Get in touch</Link>
        </div>
      </div>
    </section>
  )
}
export default Hero
