import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-7xl font-black mb-6 tracking-tighter">
        App<span className="text-rose-500">Vault</span>
      </h1>
      <p className="text-lg text-gray-500 mb-10 max-w-md">
        Solusi manajemen aplikasi paling simpel dan elegan untuk perangkat lu.
      </p>
      
      <div className="flex gap-4">
        <Link 
          href="/dashboard" 
          className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-rose-500 transition-all transform hover:scale-105 active:scale-95"
        >
          Go to Dashboard
        </Link>
        <button className="border border-gray-200 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all">
          Learn More
        </button>
      </div>
    </div>
  );
}