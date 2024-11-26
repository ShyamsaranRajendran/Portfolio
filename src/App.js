import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import './styles.css';
function App() {
  return (
    <div className="bg-gray-900">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;