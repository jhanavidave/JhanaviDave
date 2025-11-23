import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Aboutme from './aboutme';
import Achievements from './achievements';
import './App.css';
import Courses from './courses';
import Edu from './edu';
import Profex from './profex';
import Projects from './projects';
import Resume from './resume';

function App() {
  const tiles = [
    { label: 'About Me', to: '/aboutme' },
    { label: 'Resume', to: '/resume' },
    { label: 'Experience', to: '/profex' },
    { label: 'Education', to: '/edu' },
    { label: 'Projects', to: '/projects' },
    { label: 'Courses', to: '/courses' },
    { label: 'Achievements', to: '/achievements' },
  ];

  return (
    <BrowserRouter>
      <div className="App" id="div1">
        <h1>JHANAVI DAVE</h1>
        <h3>Software Engineer | Full Stack Developer | App Developer</h3>
        <hr />

        <div className="tile-grid" role="navigation" aria-label="Main navigation tiles">
          {tiles.map((t) => (
            <NavLink key={t.to} to={t.to} className="tile">
              <div className="tile-label">{t.label}</div>
            </NavLink>
          ))}
        </div>
      </div>

      <Routes>
        <Route path="/" element={<div />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/profex" element={<Profex />} />
        <Route path="/edu" element={<Edu />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;