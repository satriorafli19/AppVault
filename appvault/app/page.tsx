export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white border-b p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-black text-gray-900">App<span className="text-rose-500">Vault</span></h1>
          <button className="bg-gray-900 text-white px-4 py-1.5 rounded-full text-xs font-bold">INSTALLER</button>
        </div>
      </nav>

      {/* Hero Section (Landing Page) */}
      <header className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-black mb-4">Your One-Stop App Solution.</h2>
        <p className="text-gray-500 mb-8 max-w-lg mx-auto">Download, manage, and install your favorite apps with AppVault. Clean, fast, and simple.</p>
        <button className="bg-rose-500 text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-rose-600">Get Started</button>
      </header>

      {/* Dashboard Preview Section */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <h3 className="font-bold text-lg mb-4">Application Dashboard</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-xl bg-gray-50">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg mb-2"></div>
              <h4 className="font-bold text-sm">System Tools</h4>
              <p className="text-[10px] text-gray-400">Manage your system apps.</p>
            </div>
            <div className="p-4 border rounded-xl bg-gray-50">
              <div className="w-10 h-10 bg-rose-100 rounded-lg mb-2"></div>
              <h4 className="font-bold text-sm">Game Launcher</h4>
              <p className="text-[10px] text-gray-400">Direct installation.</p>
            </div>
            <div className="p-4 border rounded-xl bg-gray-50">
              <div className="w-10 h-10 bg-amber-100 rounded-lg mb-2"></div>
              <h4 className="font-bold text-sm">App Updates</h4>
              <p className="text-[10px] text-gray-400">Keep things current.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}