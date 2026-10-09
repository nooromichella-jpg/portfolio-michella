import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaMapMarkerAlt, FaLaptopCode, FaLightbulb, FaBullseye, FaRocket } from 'react-icons/fa'

const highlights = [
  { icon: <FaGraduationCap />, label: 'Étudiante UPH', value: '2ème année', color: 'from-blue-500 to-cyan-400' },
  { icon: <FaBriefcase />, label: 'Stage FCRA', value: '2 mois', color: 'from-orange-500 to-amber-400' },
  { icon: <FaMapMarkerAlt />, label: 'Localisation', value: 'Antananarivo', color: 'from-red-500 to-rose-400' },
  { icon: <FaLaptopCode />, label: 'Spécialité', value: 'Full-Stack', color: 'from-violet-500 to-purple-400' },
]

const qualities = [
  { icon: <FaLightbulb />, label: 'Curieuse' },
  { icon: <FaBullseye />, label: 'Rigoureuse' },
  { icon: <FaRocket />, label: 'Autonome' },
]

export default function About() {
  return (
    <section id="apropos" className="relative py-24 px-6 bg-white overflow-hidden">
      {/* Élément décoratif */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            — Qui suis-je —
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3 text-gray-900">
            À <span className="text-gradient">propos</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 space-y-5 text-gray-700 leading-relaxed text-base md:text-lg"
          >
            <p>
              Je suis <strong className="text-gray-900">RANDRIAMIHAJA Michella Nooro</strong>,
              étudiante en 2ème année d'informatique à l'UPH (Université Privée
              d'Hauteville), à Antananarivo, Madagascar.
            </p>

            <p>
              Passionnée par le <span className="font-semibold text-primary">développement web moderne</span>,
              je me spécialise dans la création d'applications complètes, alliant
              design moderne et fonctionnalités avancées.
            </p>

            <p>
              Durant mon stage de deux mois au sein de{' '}
              <strong className="text-gray-900">FCRA</strong> (Fifanampiana Centre
              Rassoul Akram), j'ai eu l'opportunité de réaliser cinq projets web
              complets, allant de sites vitrines à des plateformes complexes
              intégrant intelligence artificielle, paiements mobiles et
              synchronisation cloud.
            </p>

            <p>
              Mon objectif est de continuer à développer mes compétences en{' '}
              <span className="font-semibold text-primary">développement full-stack</span>{' '}
              et de participer à des projets innovants et ambitieux.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {qualities.map((q) => (
                <span
                  key={q.label}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-primary rounded-full text-sm font-medium border border-blue-100"
                >
                  <span className="text-base">{q.icon}</span>
                  {q.label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Cartes infos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-modern transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-xl shadow-lg mb-4`}>
                  {item.icon}
                </div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-bold text-gray-900">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}