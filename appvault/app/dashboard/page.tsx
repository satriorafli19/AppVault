import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#050505] p-10 text-white">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="text-sm font-medium text-gray-500 hover:text-white transition-colors">
          ← Back
        </Link>
        
        <h2 className="text-5xl font-black mt-8 mb-12 tracking-tight">Dashboard.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card Glassmorphism */}
          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all cursor-pointer">
            <div className="w-12 h-12 bg-rose-500/20 rounded-2xl mb-6"></div>
            <h3 className="font-bold text-2xl mb-2">System Apps</h3>
            <p className="text-gray-400">Optimize and manage your core system processes.</p>
          </div>
          
          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all cursor-pointer">
            <div className="w-12 h-12 bg-indigo-500/20 rounded-2xl mb-6"></div>
            <h3 className="font-bold text-2xl mb-2">Game Library</h3>
            <p className="text-gray-400">Access your curated game collection instantly.</p>
          </div>
        </div>
      </div>
    </div>
  );
}