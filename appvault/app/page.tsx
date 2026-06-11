=export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      {/* Navbar */}
      <nav className="bg-white border-b p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-black">App<span className="text-rose-500">Vault</span></h1>
          <button className="bg-gray-900 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            Installer
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-5xl mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-extrabold mb-6">Your One-Stop App Solution.</h2>
        <p className="text-gray-500 mb-10 max-w-lg mx-auto text-lg">
          Manage and install your favorite applications seamlessly. Clean, fast, and simple.
        </p>
        <button className="bg-rose-500 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-rose-600 transition">
          Get Started
        </button>
      </header>

      {/* Dashboard Preview */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <h3 className="font-bold text-xl mb-6">Dashboard Preview</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-100 rounded-2xl bg-gray-50">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl mb-4"></div>
              <h4 className="font-bold">System Tools</h4>
              <p className="text-sm text-gray-400 mt-1">Manage system apps.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl bg-gray-50">
              <div className="w-12 h-12 bg-rose-100 rounded-xl mb-4"></div>
              <h4 className="font-bold">Game Launcher</h4>
              <p className="text-sm text-gray-400 mt-1">Direct installation.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl bg-gray-50">
              <div className="w-12 h-12 bg-amber-100 rounded-xl mb-4"></div>
              <h4 className="font-bold">App Updates</h4>
              <p className="text-sm text-gray-400 mt-1">Keep things current.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}