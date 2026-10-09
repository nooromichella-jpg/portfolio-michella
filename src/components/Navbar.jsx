import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('accueil')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Détecter la section active
      const sections = ['accueil', 'apropos', 'competences', 'experience', 'projets', 'contact']
      const scrollPos = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { name: 'Accueil', href: '#accueil', id: 'accueil' },
    { name: 'À propos', href: '#apropos', id: 'apropos' },
    { name: 'Compétences', href: '#competences', id: 'competences' },
    { name: 'Parcours', href: '#experience', id: 'experience' },
    { name: 'Projets', href: '#projets', id: 'projets' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#accueil"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-modern group-hover:shadow-modern-lg transition-all">
            N
          </div>
          <span className="font-bold text-lg text-gray-800 hidden sm:block">
            Nooro<span className="text-primary">.</span>
          </span>
        </motion.a>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-1 bg-white/60 backdrop-blur-md px-2 py-2 rounded-full border border-gray-200/50 shadow-sm">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeSection === link.id
                    ? 'text-white'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Desktop */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-5 py-2.5 rounded-full font-medium text-sm shadow-modern hover:shadow-modern-lg transition-all"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          Disponible
        </motion.a>

        {/* Mobile button */}
        <button
          className="md:hidden text-2xl w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-gray-200/50 overflow-hidden"
          >
            <ul className="py-4 px-6 flex flex-col gap-2">
              {links.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    className={`block px-4 py-3 rounded-xl font-medium transition ${
                      activeSection === link.id
                        ? 'bg-gradient-to-r from-primary to-primary-light text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}