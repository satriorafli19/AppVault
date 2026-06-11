'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-8xl font-black tracking-tighter mb-6">
          App<span className="text-rose-500">Vault</span>
        </h1>
        <p className="text-xl text-gray-400 mb-10 max-w-sm mx-auto">
          Manage, install, and optimize your apps with elegance.
        </p>
        <Link href="/dashboard">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg"
          >
            Enter Dashboard
          </motion.button>
        </Link>
      </motion.div>
    </main>
  );
}