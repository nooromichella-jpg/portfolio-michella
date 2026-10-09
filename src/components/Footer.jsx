export default function Footer() {
  const links = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'À propos', href: '#apropos' },
    { name: 'Compétences', href: '#competences' },
    { name: 'Parcours', href: '#experience' },
    { name: 'Projets', href: '#projets' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5"></div>

      <div className="max-w-6xl mx-auto px-6 py-14 relative">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-lg">
                M
              </div>
              <span className="font-bold text-lg">
                Michella<span className="text-primary">.</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Étudiante en informatique et développeuse web full-stack, passionnée
              par la création d'applications modernes et performantes.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary text-sm transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:nooromichella@gmail.com"
                  className="text-gray-400 hover:text-primary transition flex items-center gap-2"
                >
                   nooromichella@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+261322098269"
                  className="text-gray-400 hover:text-primary transition flex items-center gap-2"
                >
                   032 20 982 69
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/nooromichella-jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition flex items-center gap-2"
                >
                   GitHub
                </a>
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                 Antananarivo, Madagascar
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-sm">
            © 2026 <span className="text-white font-semibold">RANDRIAMIHAJA Michella Nooro</span>
          </p>
          <p className="text-gray-500 text-xs">
            Créé avec <span className="text-primary">React</span> + <span className="text-primary">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}