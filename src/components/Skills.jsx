import { motion } from 'framer-motion'
import { FaPaintBrush, FaCog, FaDatabase, FaRobot, FaCreditCard, FaTools } from 'react-icons/fa'

const skills = [
  {
    icon: <FaPaintBrush />,
    title: 'Frontend',
    color: 'from-blue-500 to-cyan-400',
    items: ['React', 'Next.js', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    icon: <FaCog />,
    title: 'Backend',
    color: 'from-emerald-500 to-teal-400',
    items: ['Node.js', 'Express', 'API REST'],
  },
  {
    icon: <FaDatabase />,
    title: 'Base de données',
    color: 'from-orange-500 to-amber-400',
    items: ['Firebase (Firestore)', 'SQLite'],
  },
  {
    icon: <FaRobot />,
    title: 'IA & Services',
    color: 'from-purple-500 to-pink-400',
    items: ['Google Gemini API', 'Web3Forms', 'Google Sheets API', 'jsPDF'],
  },
  {
    icon: <FaCreditCard />,
    title: 'Paiements',
    color: 'from-green-500 to-lime-400',
    items: ['MVola', 'Orange Money', 'Airtel Money'],
  },
  {
    icon: <FaTools />,
    title: 'Outils',
    color: 'from-slate-600 to-gray-400',
    items: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Figma'],
  },
]

export default function Skills() {
  return (
    <section id="competences" className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            — Mes outils —
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3 text-gray-900">
            Mes <span className="text-gradient">compétences</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Technologies et outils que j'utilise au quotidien pour créer des applications modernes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-3xl p-6 shadow-sm hover:shadow-modern-lg transition-all duration-500 border border-gray-100 overflow-hidden"
            >
              {/* Barre colorée en haut */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${skill.color}`}></div>

              {/* Icône */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 mb-5`}>
                {skill.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {skill.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="bg-slate-50 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-lg border border-gray-100 hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}