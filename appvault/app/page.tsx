export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-black text-gray-900">App<span className="text-rose-500">Vault</span></h1>
        <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-bold">INSTALLER</button>
      </nav>

      {/* Hero */}
      <header className="max-w-4xl mx-auto text-center py-20 px-4">
        <h2 className="text-6xl font-extrabold text-gray-900 mb-6">Your One-Stop App Solution.</h2>
        <p className="text-xl text-gray-500 mb-10">Manage and install your favorite applications seamlessly.</p>
        <button className="bg-rose-500 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-rose-600 transition">Get Started</button>
      </header>

      {/* Dashboard */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
          <h3 className="text-lg font-bold mb-8">Dashboard Preview</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-gray-100 rounded-xl mb-4"></div>
                <div className="h-4 bg-gray-100 w-24 mb-2 rounded"></div>
                <div className="h-3 bg-gray-50 w-full rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}