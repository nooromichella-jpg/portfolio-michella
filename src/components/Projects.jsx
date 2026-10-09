import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    number: '01',
    title: 'BFT – Béton Fort de Tana',
    category: 'Site vitrine',
    description:
      'Site web vitrine professionnel pour la société BFT, spécialisée dans les matériaux de construction à Antananarivo.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Web3Forms'],
    github: 'https://github.com/nooromichella-jpg/bft-tana.git',
    image: '/projets/bft.png',
    gradient: 'from-orange-500 to-amber-400',
  },
  {
    number: '02',
    title: 'FCRA Forage',
    category: 'Site vitrine',
    description:
      'Application web moderne pour présenter les services de FCRA Forage et permettre aux clients de demander un devis.',
    tech: ['React 18', 'Vite', 'Tailwind', 'Framer Motion'],
    github: 'https://github.com/nooromichella-jpg/fcra-forage.git',
    image: '/projets/fcra-forage.png',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    number: '03',
    title: 'NourStore',
    category: 'E-commerce',
    description:
      'Plateforme e-commerce avec dashboard admin sécurisé, gestion de stock en temps réel et notifications WhatsApp.',
    tech: ['Next.js', 'Firebase', 'Zustand', 'Recharts'],
    github: 'https://github.com/nooromichella-jpg/mon-projet-ecommerce.git',
    image: '/projets/nourstore.png',
    gradient: 'from-emerald-500 to-teal-400',
  },
  {
    number: '04',
    title: 'Catalogue High-Tech',
    category: 'Application',
    description:
      'Gestion de catalogue avec panier, multi-devises (€/MGA), Google Sheets et assistant IA Gemini intégré.',
    tech: ['React 19', 'TypeScript', 'Express', 'Gemini'],
    github: 'https://github.com/nooromichella-jpg/catalogue-high-tech.git',
    image: '/projets/catalogue.png',
    gradient: 'from-violet-500 to-purple-400',
  },
  {
    number: '05',
    title: 'SkillHub',
    category: 'Plateforme',
    description:
      'Plateforme d\'apprentissage en ligne avec tuteur IA, quiz, certificats et paiements Mobile Money.',
    tech: ['React 19', 'Firebase', 'Gemini', 'Chart.js'],
    github: 'https://github.com/nooromichella-jpg/plateforme-de-formation-en-ligne.git',
    image: '/projets/skillhub.png',
    gradient: 'from-pink-500 to-rose-400',
  },
]

export default function Projects() {
  return (
    <section id="projets" className="py-24 px-6 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="absolute top-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            — Portfolio —
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3 text-gray-900">
            Mes <span className="text-gradient">projets</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            5 projets réalisés durant mon stage chez FCRA, mêlant design moderne et technologies avancées.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-modern-lg transition-all duration-500 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Badge catégorie */}
                <div className={`absolute top-4 left-4 bg-gradient-to-r ${project.gradient} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg`}>
                  {project.category}
                </div>

                {/* Numéro */}
                <div className="absolute top-4 right-4 text-white/90 font-bold text-2xl drop-shadow-lg">
                  {project.number}
                </div>

                {/* Lien GitHub hover */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-lg"
                >
                  Voir le code →
                </a>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-slate-50 text-gray-700 text-xs px-3 py-1.5 rounded-lg font-medium border border-gray-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                >
                  <FaGithub />
                  <span>Voir sur GitHub</span>
                  <span>→</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/nooromichella-jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary transition-all duration-300 hover:-translate-y-1 shadow-modern"
          >
            <FaGithub />
            <span>Voir tous mes projets sur GitHub</span>
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}