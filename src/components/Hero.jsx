import { motion } from 'framer-motion'

const stats = [
  { value: '5', label: 'Projets réalisés' },
  { value: '2', label: 'Mois de stage' },
  { value: '10+', label: 'Technologies' },
  { value: '100%', label: 'Passion' },
]

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 bg-grid"
    >
      {/* Blobs animés en arrière-plan */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div
        className="absolute top-1/3 -right-20 w-96 h-96 bg-cyan-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"
        style={{ animationDelay: '2s' }}
      ></div>
      <div
        className="absolute bottom-20 left-1/3 w-96 h-96 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"
        style={{ animationDelay: '4s' }}
      ></div>

      <div className="relative max-w-5xl mx-auto text-center px-6 z-10 w-full">
        {/* Photo — parfaitement centrée */}
        <div className="flex justify-center mb-10 mt-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative inline-block"
          >
            {/* Halo lumineux autour de la photo */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-xl opacity-40 animate-pulse-slow"></div>

            {/* Photo */}
            <img
              src="/photo.jpg"
              alt="Michella Nooro"
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto object-cover shadow-modern-lg border-4 border-white block"
            />
          </motion.div>
        </div>

        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-4 leading-tight"
        >
          RANDRIAMIHAJA
          <br />
          <span className="text-gradient animate-gradient bg-clip-text">
            Michella Nooro
          </span>
        </motion.h1>

        {/* Sous-titre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary"></span>
          <p className="text-lg md:text-xl font-medium text-gray-700">
            Étudiante en Informatique · Développeuse Web
          </p>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-primary"></span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-gray-600 max-w-2xl mx-auto mb-10 text-base md:text-lg leading-relaxed"
        >
          Passionnée par le développement web moderne, je crée des applications
          performantes et intuitives avec{' '}
          <span className="font-semibold text-primary">React</span>,{' '}
          <span className="font-semibold text-primary">Next.js</span> et{' '}
          <span className="font-semibold text-primary">Firebase</span>.
        </motion.p>

        {/* Boutons CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="flex gap-4 justify-center flex-wrap mb-16"
        >
          <a
            href="#projets"
            className="group relative bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-semibold shadow-modern hover:shadow-modern-lg transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
            <span>Voir mes projets</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#contact"
            className="border-2 border-gray-200 bg-white/80 backdrop-blur-md text-gray-800 px-8 py-4 rounded-full font-semibold hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-1"
          >
            Me contacter
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-5 shadow-sm hover:shadow-modern transition-all duration-300"
            >
              <p className="text-3xl md:text-4xl font-extrabold text-gradient mb-1">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-gray-600 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}