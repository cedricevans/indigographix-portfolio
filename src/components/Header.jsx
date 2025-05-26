import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-slate-900/80 shadow backdrop-blur z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-yellow-400 text-2xl font-bold">IndigoGraphix</Link>
        <div className="space-x-6 text-sm text-gray-300">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/works" className="hover:text-yellow-300">Works</Link>
          <Link to="/about" className="hover:text-yellow-300">About</Link>
          <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
        </div>
      </nav>
    </motion.header>
  );
}
