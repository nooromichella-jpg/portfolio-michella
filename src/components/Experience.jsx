import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaMapMarkerAlt, FaCertificate, FaLanguage, FaSchool } from 'react-icons/fa'

const experiences = [
  {
    period: 'Août – Octobre 2026',
    title: 'Développeuse Web Stagiaire',
    company: 'FCRA – Fifanampiana Centre Rassoul Akram',
    location: 'Antananarivo, Madagascar',
    type: 'Stage',
    icon: <FaBriefcase />,
    gradient: 'from-blue-500 to-cyan-400',
    description:
      'Réalisation de 5 projets web complets allant de sites vitrines à des plateformes complexes intégrant IA, paiements mobiles et synchronisation cloud.',
    tasks: [
      'Interfaces modernes avec React, Next.js et Tailwind CSS',
      'Intégration Firebase (Firestore, Authentication)',
      'API REST avec Node.js et Express',
      'Intégration d\'IA générative (Google Gemini)',
      'Paiements mobiles (MVola, Orange Money, Airtel Money)',
    ],
  },
  {
    period: '2025 – Aujourd\'hui',
    title: 'Étudiante en Informatique – 2ème année',
    company: 'UPH – Université Privée Hay ',
    location: 'Antananarivo, Madagascar',
    type: 'Formation',
    icon: <FaGraduationCap />,
    gradient: 'from-emerald-500 to-teal-400',
    description:
      'Formation en informatique avec spécialisation progressive en développement web et applications modernes.',
    tasks: [
      'Fondamentaux de la programmation (algorithmique, structures de données)',
      'Développement web front-end et back-end',
      'Bases de données relationnelles et NoSQL',
      'Projets académiques et personnels',
    ],
  },
  {
    period: '2024',
    title: 'Certificats d\'Allemand A1 & A2',
    company: 'Centre de langues',
    location: 'Madagascar',
    type: 'Certificat',
    icon: <FaLanguage />,
    gradient: 'from-yellow-500 to-orange-400',
    description:
      'Obtention des certificats de langue allemande niveaux A1 et A2, validant les compétences de base en compréhension et expression.',
    tasks: [
      'Certificat Allemand niveau A1',
      'Certificat Allemand niveau A2',
      'Compétences en compréhension orale et écrite',
    ],
  },
  {
    period: '2023',
    title: 'Baccalauréat (BACC)',
    company: 'Lycée Privé La Ruche',
    location: 'Vohemar, Madagascar',
    type: 'Diplôme',
    icon: <FaCertificate />,
    gradient: 'from-violet-500 to-purple-400',
    description:
      'Obtention du Baccalauréat, marquant le début de mon parcours dans le domaine de l\'informatique.',
    tasks: [
      'Obtention du diplôme du Baccalauréat',
      'Orientation choisie : Informatique',
    ],
  },
  {
    period: '2020',
    title: 'BEPC',
    company: 'Collège Privé Les Rosiers',
    location: 'Vohemar, Madagascar',
    type: 'Diplôme',
    icon: <FaSchool />,
    gradient: 'from-pink-500 to-rose-400',
    description:
      'Obtention du Brevet d\'Études du Premier Cycle (BEPC), première étape de mon parcours scolaire.',
    tasks: [
      'Obtention du diplôme du BEPC',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            — Mon histoire —
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3 text-gray-900">
            Mon <span className="text-gradient">parcours</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            De mon BEPC à mon stage chez FCRA, en passant par mes diplômes et certifications.
          </p>
        </motion.div>

        <div className="relative">
          {/* Ligne verticale */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative mb-14 pl-16 md:pl-0 md:w-1/2 ${
                index % 2 === 0
                  ? 'md:pr-12 md:text-right'
                  : 'md:ml-auto md:pl-12'
              }`}
            >
              {/* Icône sur la timeline */}
              <div
                className={`absolute top-6 w-12 h-12 rounded-2xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center text-white text-lg shadow-lg border-4 border-white z-10 ${
                  index % 2 === 0
                    ? 'left-2 md:left-auto md:-right-6'
                    : 'left-2 md:-left-6'
                }`}
              >
                {exp.icon}
              </div>

              {/* Carte */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-modern-lg transition-all duration-300 hover:-translate-y-1">
                <div className={`flex flex-wrap items-center gap-2 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                  <span className={`inline-block bg-gradient-to-r ${exp.gradient} text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm`}>
                    {exp.type}
                  </span>
                  <span className="text-sm text-gray-500 font-medium">
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {exp.title}
                </h3>
                <p className="text-primary font-semibold text-sm mb-1">
                  {exp.company}
                </p>
                <p className={`text-gray-500 text-xs mb-4 flex items-center gap-1.5 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                  <FaMapMarkerAlt /> {exp.location}
                </p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <ul className={`text-sm text-gray-600 space-y-1.5 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  {exp.tasks.map((task) => (
                    <li key={task} className={`flex gap-2 ${index % 2 === 0 ? 'md:justify-end md:flex-row-reverse' : ''}`}>
                      <span className="text-primary font-bold">▸</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}