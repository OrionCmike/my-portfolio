import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import MorningNotes from './pages/MorningNotes'
import LocalFinds from './pages/LocalFinds'
import StudySpace from './pages/StudySpace'
import { projects } from './pages/projects'
import './App.css'

function App() {
  const { pathname, state, key } = useLocation()
  useEffect(() => {
    const project = projects.find((item) => pathname === `/projects/${item.slug}`)
    document.title = project ? `${project.title} | Nicholas` : 'Nicholas | Websites & interfaces'
    const frame = window.requestAnimationFrame(() => {
      if (pathname === '/' && state?.scrollTo) {
        document.getElementById(state.scrollTo)?.scrollIntoView()
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' })
      }
    })
    return () => window.cancelAnimationFrame(frame)
  }, [pathname, state, key])

  return (
    <>
      <Navbar key={pathname} detail={pathname !== '/'} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/morning-notes" element={<MorningNotes />} />
          <Route path="/projects/local-finds" element={<LocalFinds />} />
          <Route path="/projects/study-space" element={<StudySpace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
export default App
