import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-6 text-center">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-rose-500/20 blur-[128px] rounded-full -z-10"></div>
      
      <h1 className="text-8xl font-black mb-6 tracking-tighter">
        App<span className="text-rose-500">Vault</span>
      </h1>
      <p className="text-xl text-gray-400 mb-12 max-w-md font-light">
        Manage and deploy your applications with a modern, clean, and intuitive dashboard.
      </p>
      
      <div className="flex gap-4">
        <Link 
          href="/dashboard" 
          className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all transform hover:scale-105"
        >
          Enter Dashboard
        </Link>
      </div>
    </div>
  );
}