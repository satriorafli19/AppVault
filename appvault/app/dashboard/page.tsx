import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white p-10">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-sm font-semibold text-gray-400 hover:text-gray-900 transition-colors">
          ← Back to Home
        </Link>
        
        <h2 className="text-4xl font-black mt-6 mb-10 tracking-tight">Dashboard Installer</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="p-8 border border-gray-100 rounded-3xl bg-gray-50 hover:border-rose-200 hover:shadow-lg transition-all cursor-pointer">
            <h3 className="font-bold text-xl mb-2">System Apps</h3>
            <p className="text-gray-500">Kelola dan update aplikasi sistem lu dengan mudah.</p>
          </div>
          
          {/* Card 2 */}
          <div className="p-8 border border-gray-100 rounded-3xl bg-gray-50 hover:border-rose-200 hover:shadow-lg transition-all cursor-pointer">
            <h3 className="font-bold text-xl mb-2">Game Library</h3>
            <p className="text-gray-500">Kumpulan instalasi game favorit dalam satu klik.</p>
          </div>
        </div>
      </div>
    </div>
  );
}