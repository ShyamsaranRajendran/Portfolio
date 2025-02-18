import { Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CustomCursor } from './components/CustomCursor';
import { ScrollIndicator } from './components/ScrollIndicator';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <CustomCursor />
      <ScrollIndicator />
      <div className="noise" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="text-xl font-syncopate font-bold gradient-text">
                SR
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex space-x-8"
            >
              {[
                { to: '/', label: 'Home' },
                { to: '/projects', label: 'Projects' },
                { to: '/about', label: 'About' },
                { to: '/contact', label: 'Contact' }
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;