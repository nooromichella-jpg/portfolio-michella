import { motion } from 'framer-motion'
import { FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const contacts = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'nooromichella@gmail.com',
    link: 'mailto:nooromichella@gmail.com',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    icon: <FaPhone />,
    label: 'Téléphone',
    value: '032 20 982 69',
    link: 'tel:+261322098269',
    gradient: 'from-emerald-500 to-teal-400',
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    value: 'nooromichella-jpg',
    link: 'https://github.com/nooromichella-jpg',
    gradient: 'from-gray-800 to-gray-600',
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'Localisation',
    value: '67ha Antananarivo, 101 Madagascar',
    link: null,
    gradient: 'from-orange-500 to-amber-400',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-cyan-300/10 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            — Restons en contact —
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3 text-gray-900">
            Me <span className="text-gradient">contacter</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            N'hésitez pas à me contacter pour toute opportunité, collaboration ou simple question.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {contacts.map((contact, index) => {
            const CardWrapper = contact.link ? 'a' : 'div'
            const props = contact.link
              ? { href: contact.link, target: '_blank', rel: 'noopener noreferrer' }
              : {}

            return (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <CardWrapper
                  {...props}
                  className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-modern-lg transition-all duration-300 flex items-center gap-5 cursor-pointer block"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center text-2xl text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0`}>
                    {contact.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">
                      {contact.label}
                    </p>
                    <p className="text-gray-900 font-semibold group-hover:text-primary transition-colors truncate">
                      {contact.value}
                    </p>
                  </div>
                  {contact.link && (
                    <span className="text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all">
                      →
                    </span>
                  )}
                </CardWrapper>
              </motion.div>
            )
          })}
        </div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 bg-gradient-to-br from-primary to-accent rounded-3xl p-10 text-center text-white shadow-modern-lg relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid opacity-10"></div>
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-3">
              Prêt à collaborer ?
            </h3>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Je suis actuellement à la recherche d'opportunités pour mettre mes
              compétences au service de projets ambitieux.
            </p>
            <a
              href="mailto:nooromichella@gmail.com"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all hover:-translate-y-1 shadow-lg"
            >
              <FaEnvelope /> Envoyez-moi un message
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}