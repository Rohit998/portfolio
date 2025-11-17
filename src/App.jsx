import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X, ExternalLink, Moon, Sun, FileText } from "lucide-react";

function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 ${darkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-sm border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:text-blue-500 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800">
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 hover:text-blue-500 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Hi, I'm <span className="text-blue-500">Rohit Reddy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400"
          >
            Full Stack Developer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center space-x-4"
          >
            <a
              href="https://github.com/Rohit998"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-blue-500 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/rohit-reddy-457761144/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-blue-500 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:cprohit1998@gmail.com"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-blue-500 hover:text-white transition-colors"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-lg text-center max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            Add your about section content here. Describe your skills, experience, and passion for development.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards will go here */}
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} hover:shadow-lg transition-shadow`}>
              <h3 className="text-2xl font-bold mb-4">Project 1</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Project description goes here.</p>
              <a href="#" className="text-blue-500 hover:underline flex items-center">
                View Project <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">
            Feel free to reach out if you'd like to work together!
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Mail size={20} className="mr-2" />
            Send Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 text-center border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <p className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Portfolio;
