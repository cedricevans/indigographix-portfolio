import { motion } from 'framer-motion';

export default function Contact() {
  return (
   <motion.section
      className="text-center py-20 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">Contact</h1>
      <p className="text-gray-300 text-lg max-w-2xl mx-auto">I design bold, accessible, user-driven experiences that push the boundary of frontend design.</p>
 
    </motion.section>
  );
}



