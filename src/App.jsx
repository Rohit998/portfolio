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
    { name: 'Research', href: '#research' },
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <img
              src="/image.png"
              alt="Rohit Reddy"
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-blue-500 shadow-lg"
            />
          </motion.div>
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
            Data Programmer/Analysts/Engineer/AI Developer/Full Stack Developer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}s
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-lg text-justify max-w-full text-gray-600 dark:text-gray-400 leading-relaxed">
          I am Rohit Reddy, a Data Programmer and AI Innovator with a strong foundation in analytics, automation, and intelligent systems. At the UMKC School of Medicine, I drove major digital transformation efforts—building accreditation dashboards, curriculum analytics tools, automated data pipelines, and Power Platform applications that streamlined compliance and improved decision-making. In Amazon as a Software Development Engineer, I have expanded skills to develop scalable full-stack applications that automate complex validation workflows, significantly reducing manual work and improving data quality. I focus on user-centric design, security, and AI-driven solutions that make organizations smarter, more efficient, and future-ready.
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
              <h3 className="text-2xl font-bold mb-4">DesiVerse</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">DesiVerse is an AI-powered platform designed to simplify immigration, career, and daily life challenges for the Desi community.</p>
              <a href="https://desiverse-psi.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center">
                View Project <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} hover:shadow-lg transition-shadow`}>
              <h3 className="text-2xl font-bold mb-4">AI Semantic Mapper</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">A semantic sentence matching application that uses fine-tuned sentence transformers to compare and match sentences between two sets. This project includes a Streamlit web interface for interactive sentence-to-sentence comparison and tools for training, testing, and comparing models.</p>
              <a href="https://semanticmapper-qwuew2th5wbzlszhpq8kwy.streamlit.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center">
                View Project <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} hover:shadow-lg transition-shadow`}>
              <h3 className="text-2xl font-bold mb-4">Line Follower Robo</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">This is a line follower robo code where robo used to follow black path by using 5 array sensor, it is an IOT project we have used PID algorithm for this project. Accurate PID values have been given to this code, where judgement of turn is accurate.</p>
              <a href="https://github.com/Rohit998/line-follower-robo-" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center">
                View Project <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Research Papers Section */}
      <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Research Papers</h2>
          <div className="space-y-6">
            {/* Research Paper 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:shadow-lg transition-shadow`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Privacy-Preserving AI Database Systems in Education Analytics</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    <span className="font-semibold">Authors:</span><span className="font-semibold">Rohit Reddy</span>
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    <span className="font-semibold">Published in:</span> International Journal of Multidisciplinary Research and Growth Evaluation
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    <span className="font-semibold">Year:</span> 2024
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    This paper presents a privacy-preserving framework for AI-based education analytics. It leverages differential privacy to protect sensitive student data while enabling effective analysis.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://doi.org/10.54660/.IJMRGE.2024.5.6.1626-1629"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      DOI
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Research Paper 2 - Example */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:shadow-lg transition-shadow`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Barriers to AI Tool Adoption for Non-Technical Educators in the Digital Age</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    <span className="font-semibold">Authors:</span> <span className="font-semibold">Rohit Reddy</span>
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    <span className="font-semibold">Published in:</span> Journal of Scientific and Engineering Research
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    <span className="font-semibold">Year:</span> 2024
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    This paper explores the barriers to AI tool adoption for non-technical educators in the digital age. It identifies common challenges and provides recommendations for overcoming them.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://doi.org/10.5281/zenodo.13919017"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      DOI
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Research Paper 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:shadow-lg transition-shadow`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Enhancing Data Security in Higher Education Administration: Strategies for Protecting Student Information and Institutional Integrity in Cloud-Based Systems</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    <span className="font-semibold">Authors:</span>  <span className="font-semibold">Rohit Reddy</span>
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    <span className="font-semibold">Published in:</span> Journal of Artificial Intelligence & Cloud Computing
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    <span className="font-semibold">Year:</span> 2023
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    This paper investigates the security challenges in higher education administration and proposes strategies to protect student information and institutional integrity in cloud-based systems.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://doi.org/10.47363/JAICC/2023(2)E150"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      DOI
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">
            Feel free to reach out if you'd like to work together!
          </p>
          <a
            href="mailto:cprohit1998@gmail.com"
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
          © {new Date().getFullYear()} Rohit Reddy. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Portfolio;
