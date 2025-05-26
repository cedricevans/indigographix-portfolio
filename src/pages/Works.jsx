import { motion } from 'framer-motion';

const works = [
  { title: 'Project One', description: 'Description for project one.' },
  { title: 'Project Two', description: 'Description for project two.' },
  { title: 'Project Three', description: 'Description for project three.' },
];

export default function Works() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <motion.h2 className="text-4xl font-bold text-yellow-400 mb-12 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        Works
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {works.map((work, i) => (
          <motion.div key={i} className="bg-white text-black p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2, duration: 0.6 }} viewport={{ once: true }}>
            <h3 className="font-bold text-xl mb-2">{work.title}</h3>
            <p className="text-sm text-gray-600">{work.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
