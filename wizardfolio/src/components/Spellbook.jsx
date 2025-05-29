import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import './Spellbook.css';
import { useRef } from 'react';


const Page = React.forwardRef(({ title, children }, ref) => (
  <div ref={ref} className="page">
    <div className="page-inner">
      <h2 className="text-2xl font-cinzel font-bold mb-4">{title}</h2>
      <div className="text-md leading-relaxed">{children}</div>
    </div>
  </div>
));



export default function Spellbook() {
const bookRef = useRef();

//const flipToPage = (index) => {
    //if (bookRef.current) {
      //bookRef.current.pageFlip().flip(index);
    //}
  //};

  return (
    <div className="book-wrapper">
    <HTMLFlipBook
    ref={bookRef}
    width={500}
    height={700}
    size="fixed"
    showCover={true}
    className="book"
    >

<Page title="">
  <div className="scroll-frame">
    <div className="floating-glyphs">
    <span>✦</span>
    <span>ᛃ</span>
    <span>✧</span>
    </div>
    <div className="welcome-full">
      <img
        src="/images/profile.jpg"
        alt="Portrait of Hashem"
        className="spellbook-profile"
      />
      <h1 className="spell-title">Hashem</h1>
      <p className="spell-subtitle">
        Enchanter of Software · Artisan of Code · Dreamer of Systems
      </p>
      <p className="spell-description">
        Born in Amman, Jordan — I am an aspiring software engineer with a passion
        for cybersecurity, as well as web, app, and game development. Within this
        tome you shall find my creations, disciplines, and curious endeavors.
      </p>
    </div>
  </div>
</Page>



        <Page title="About Me">
        <div className="about-page">
            <h2 className="page-heading">Introduction</h2>
            <p>
            Hi there! I’m <strong>Hashem</strong>. I was born on the <strong>16th of January 2004</strong> in Amman, Jordan. I’m a twin, an older brother, and a huge fan of Harry Potter.
            </p>
            <p>
            I’m currently a junior studying <strong>Computer Science at George Washington University</strong>. At the moment, I’m also interning at <strong>LigaData</strong>, where I work on real-world data engineering problems using modern technologies.
            </p>
        </div>
        </Page>
        <Page title="Tools of the Trade">
        <div className="about-page">
            <h2 className="page-heading">My Spellbook of Technologies</h2>
            <ul className="tech-list">
            <li>⚙️ Java</li>
            <li>🐍 Python</li>
            <li>💻 C</li>
            <li>🌐 HTML & CSS</li>
            <li>🗄️ SQL</li>
            </ul>
            <p>These are the languages and tools I feel most at home with—my magical instruments, if you will.</p>
        </div>
        </Page>

        <Page title="Projects">
          🧪 Orb of Automation<br/>
          ⚙️ Alchemy Engine (React + Flask)<br/>
          🕸️ Enchanted Meal Logger (Firebase)
        </Page>
        <Page title="Skills">
          ✨ JavaScript, Python, React<br/>
          🔮 PostgreSQL, Flask, Firebase<br/>
          📜 HTML, CSS, Tailwind
        </Page>
        <Page title="Contact">
          Send me an owl: hashem@example.com<br/>
          Or summon me on <a href="https://github.com/" className="underline text-blue-800">GitHub</a>
        </Page>
      </HTMLFlipBook>
    </div>
  );
}
