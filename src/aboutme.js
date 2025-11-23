import { useState } from 'react';
import './aboutme.css';

function Aboutme() {
  const [open, setOpen] = useState('whoami'); // keep Who I Am open by default

  const sections = [
    {
      id: 'whoami',
      title: 'Who I Am',
      content: (
        <>
          <p>
            I am a passionate, results-driven Software Engineer with a deep commitment to building scalable, efficient, and innovative solutions. With a Master of Computer Science from the Illinois Institute of Technology and hands-on experience across a diverse range of technologies, I have developed a reputation for delivering high-quality applications and systems that solve complex problems and exceed expectations.
          </p>
          <p>
            Throughout my career, I’ve worked in both large enterprise environments and agile, fast-paced teams, consistently applying my skills in software engineering, cloud technologies, data-driven solutions, and automation. I thrive on challenges, and my ability to adapt to new technologies and methodologies quickly has allowed me to stay at the forefront of innovation.
          </p>
          <p>
            My expertise spans a wide range of technologies, including Java, Python, JavaScript, and C++, with experience in frameworks like Spring, ReactJS, and Flutter. I have a strong foundation in cloud computing and experience with machine learning libraries such as TensorFlow and PyTorch.
          </p>
        </>
      ),
    },
    {
      id: 'tech',
      title: 'Key Technologies',
      content: (
        <ul>
          <li><b>Programming Languages:</b> Java, Python, C++, SQL, JavaScript</li>
          <li><b>Frameworks & Libraries:</b> Spring, ReactJS, Node.js, Flutter, TensorFlow, PyTorch</li>
          <li><b>Cloud & Databases:</b> AWS, Google Cloud, MongoDB, PostgreSQL, MySQL, Neo4j</li>
          <li><b>Automation & Data Tools:</b> UiPath, Tableau, Pandas, Scikit-Learn</li>
          <li><b>Development Tools:</b> VS Code, Eclipse, Android Studio</li>
        </ul>
      ),
    },
    {
      id: 'whatido',
      title: 'What I Do',
      content: (
        <>
          <p>As a versatile full-stack developer, I specialize in:</p>
          <ul>
            <li><b>Backend & Frontend Development:</b> Crafting dynamic, responsive applications with ReactJS, Spring, Node.js, and Flutter.</li>
            <li><b>Data-Driven Solutions:</b> Developing algorithms and tools to optimize decision-making using Python and machine learning frameworks.</li>
            <li><b>Cloud & Automation:</b> Building scalable systems with AWS, GCP, and UiPath for cloud infrastructure and automation solutions.</li>
          </ul>
          <p>I thrive in environments where technology is used to drive change and improve operational efficiency.</p>
        </>
      ),
    },
    {
      id: 'why',
      title: 'Why I Love What I Do',
      content: (
        <p>My passion lies in transforming complex ideas into tangible results. Whether it’s designing user-centric applications, automating workflows, or building predictive models, I focus on creating high-impact solutions that drive progress and positively impact businesses and users.</p>
      ),
    },
    {
      id: 'strengths',
      title: 'Core Strengths',
      content: (
        <ul>
          <li><b>Creative Problem Solver:</b> I excel at finding innovative solutions to complex challenges.</li>
          <li><b>Adaptable and Technically Proficient:</b> I quickly master new tools and technologies.</li>
          <li><b>Highly Detail-Oriented:</b> I focus on precision and optimization in every line of code.</li>
          <li><b>Empathetic and User-Centered:</b> I prioritize user needs in design.</li>
          <li><b>Results-Driven:</b> I deliver outcomes that align with business goals.</li>
        </ul>
      ),
    },
    {
      id: 'growth',
      title: 'Growth Areas',
      content: (
        <ul>
          <li><b>Tendency to Overcommit:</b> Learning to prioritize better.</li>
          <li><b>Public Speaking:</b> Working on confidence for larger presentations.</li>
          <li><b>Overthinking:</b> Focusing on making quicker, more decisive decisions.</li>
          <li><b>Self-Criticism:</b> Viewing mistakes as growth opportunities.</li>
          <li><b>Difficulty Saying "No":</b> Improving boundary-setting to avoid burnout.</li>
        </ul>
      ),
    },
  ];

  function toggle(id) {
    // open only this one; clicking the open one closes it
    setOpen((prev) => (prev === id ? '' : id));
  }

  return (
    <div className="aboutme-page">
      <hr />
      <div className="accordion">
        {sections.map((s) => (
          <div key={s.id} className="accordion-section">
            <button
              className={`accordion-header ${open === s.id ? 'open' : ''}`}
              onClick={() => toggle(s.id)}
              aria-expanded={open === s.id}
            >
              <span className="title">{s.title}</span>
              <span className="chev">›</span>
            </button>
            <div className={`accordion-content ${open === s.id ? 'open' : ''}`}>
              {s.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Aboutme;