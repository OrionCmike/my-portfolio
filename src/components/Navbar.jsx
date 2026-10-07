import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar({ detail = false }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuButton = useRef(null)
  useEffect(() => {
    function handleScroll() { setScrolled(window.scrollY > 24) }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  useEffect(() => {
    if (!menuOpen) return
    function handleKey(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButton.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [menuOpen])
  function closeMenu() { setMenuOpen(false) }
  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}${detail ? ' navbar--detail' : ''}`}>
      <div className="container navigation">
        <Link className="wordmark" to="/" state={{ scrollTo: 'top' }} onClick={closeMenu}>Nicholas<span>.</span></Link>
        <button className="menu-button" type="button" ref={menuButton} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>
        <nav id="main-navigation" className={menuOpen ? 'nav-links nav-links-open' : 'nav-links'} aria-label="Main navigation">
          <Link to="/" state={{ scrollTo: 'about' }} onClick={closeMenu}>About</Link>
          <Link to="/" state={{ scrollTo: 'skills' }} onClick={closeMenu}>Skills</Link>
          <Link to="/" state={{ scrollTo: 'projects' }} onClick={closeMenu}>Projects</Link>
          <Link to="/" state={{ scrollTo: 'contact' }} onClick={closeMenu}>Contact</Link>
        </nav>
      </div>
    </header>
  )
}
export default Navbar
