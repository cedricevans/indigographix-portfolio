import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <motion.section
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-slate-950 to-slate-900 px-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-yellow-400 mb-6 leading-tight"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Design Beyond Aesthetics
      </motion.h1>

      <motion.p
        className="text-lg text-gray-300 max-w-xl mb-10"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Crafting impactful digital experiences that blend strategy, creativity, and seamless UX.
      </motion.p>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Link
          to="/works"
          className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition"
        >
          Explore My Work
        </Link>
      </motion.div>
    </motion.section>
  );
}
