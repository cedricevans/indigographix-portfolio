import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}
      className="bg-slate-900 py-8 text-center text-sm text-slate-400 border-t border-slate-800 mt-20">
      <p>&copy; 2025 IndigoGraphix. All rights reserved.</p>
    </motion.footer>
  );
}
