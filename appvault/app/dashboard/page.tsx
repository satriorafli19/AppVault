'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#050505] text-white p-10">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-gray-500 hover:text-white transition-colors">← Back</Link>
        
        <motion.h2 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-5xl font-black mt-8 mb-12"
        >
          Dashboard
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "System Apps", desc: "Manage core system." },
            { title: "Game Library", desc: "Launch your games." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg cursor-pointer"
            >
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}