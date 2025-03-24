import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaUser, FaCode, FaProjectDiagram, FaGraduationCap, FaVideo, FaAward, FaFileAlt, FaEnvelope } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.body.classList.add('bg-dark', 'text-light');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    document.body.classList.toggle('bg-dark', newMode);
    document.body.classList.toggle('text-light', newMode);
  };

  const sectionClass = darkMode ? 'bg-secondary text-light' : 'bg-light text-dark';

  return (
    <>
      <Navbar bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'} expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#">Ben Spak</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about"><FaUser /> About</Nav.Link>
              <Nav.Link href="#skills"><FaCode /> Skills</Nav.Link>
              <Nav.Link href="#projects"><FaProjectDiagram /> Projects</Nav.Link>
              <Nav.Link href="#courses"><FaGraduationCap /> Courses</Nav.Link>
              <Nav.Link href="#videos"><FaVideo /> Videos</Nav.Link>
              <Nav.Link href="#recognition"><FaAward /> Recognition</Nav.Link>
              <Nav.Link href="#resume"><FaFileAlt /> Resume</Nav.Link>
              <Nav.Link href="#contact"><FaEnvelope /> Contact</Nav.Link>
            </Nav>
            <Button variant="outline-secondary" onClick={toggleDarkMode}>
              {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{ marginTop: '80px' }}>
        <section id="about" className={`p-4 ${sectionClass}`}>
          <Container>
            <h2>About Me</h2>
            <p>Seasoned IT professional with 13+ years in full-stack development, systems admin, and technical SEO. Veteran with leadership experience and a passion for teaching & optimizing digital systems.</p>
          </Container>
        </section>

        <section id="skills" className={`p-4 ${sectionClass}`}>
          <Container>
            <h2>Skills</h2>
            <ul>
              <li>React, Vue, JavaScript, TypeScript</li>
              <li>Node.js, Express, PHP, Django</li>
              <li>MySQL, MongoDB, PostgreSQL</li>
              <li>CI/CD, Docker, Azure, AWS</li>
            </ul>
          </Container>
        </section>

        <section id="projects" className={`p-4 ${sectionClass}`}>
          <Container>
            <h2>Projects</h2>
            <p>Coming soon: Professional & personal project highlights with GitHub links and screenshots.</p>
          </Container>
        </section>

        <section id="courses" className={`p-4 ${sectionClass}`}>
          <Container>
            <h2>Courses & Certifications</h2>
            <ul>
              <li>Hack Reactor – Full-stack Engineering Bootcamp</li>
              <li>Sabio – Software Engineering</li>
              <li>CS50 – Harvard University</li>
              <li>AWS Cloud Practitioner (In Progress)</li>
            </ul>
          </Container>
        </section>

        <section id="videos" className={`p-4 ${sectionClass}`}>
          <Container>
            <h2>Featured Videos</h2>
            <ul>
              <li><a href="https://www.youtube.com/watch?v=kPQftUukf7A" target="_blank" rel="noreferrer">Front-end Resume Review (freeCodeCamp)</a></li>
            </ul>
          </Container>
        </section>

        <section id="recognition" className={`p-4 ${sectionClass}`}>
          <Container>
            <h2>Recognition</h2>
            <ul>
              <li><a href="https://blog.avocode.com/the-man-behind-the-301daysofcode-challenge-reveals-how-he-started-coding-9086609c2e08" target="_blank" rel="noreferrer">#301DaysOfCode Challenge</a></li>
              <li>SEO instructor for 20,000+ students on Udemy</li>
            </ul>
          </Container>
        </section>

        <section id="resume" className={`p-4 ${sectionClass}`}>
          <Container>
            <h2>Resume</h2>
            <a href="/Ben-Spak-2025-resume.pdf" target="_blank" className="btn btn-primary">Download Resume</a>
          </Container>
        </section>

        <section id="contact" className={`p-4 ${sectionClass}`}>
          <Container>
            <h2>Contact</h2>
            <p>Email: <a href="mailto:benvspak@gmail.com">benvspak@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/benspak" target="_blank" rel="noreferrer">linkedin.com/in/benspak</a></p>
            <p>GitHub: <a href="https://github.com/benspak" target="_blank" rel="noreferrer">github.com/benspak</a></p>
          </Container>
        </section>
      </div>
    </>
  );
}

export default App;
