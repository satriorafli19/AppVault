import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default async function Home() {
  const { data: apps } = await supabase.from('apps').select('*');

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Romsfun Style */}
      <header className="bg-rose-600 text-white p-4">
        <h1 className="text-2xl font-bold max-w-5xl mx-auto">APPVAULT.COM</h1>
      </header>

      <main className="max-w-5xl mx-auto p-4">
        <h2 className="text-xl font-bold mb-4">Best App Collections</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {apps?.map((app) => (
            <div key={app.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="w-full h-32 bg-gray-200 flex items-center justify-center font-bold text-gray-500">
                {app.name.charAt(0)}
              </div>
              <div className="p-3">
                <h3 className="font-bold text-sm">{app.name}</h3>
                <p className="text-xs text-gray-400 mb-2">{app.description}</p>
                <a href={app.embed_url} className="block text-center bg-rose-500 text-white text-xs font-bold py-1 rounded">
                  READY
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}