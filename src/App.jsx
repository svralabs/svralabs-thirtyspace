import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Hero from "./pages/Hero.jsx";
import Components from "./pages/Components.jsx";
import AuthModal from "./components/AuthModal.jsx";

export default function App() {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#FDFBF7] text-black font-sans flex flex-col justify-between">
        
        {/* Neobrutalist Navbar */}
        <header className="border-b-4 border-black bg-white px-6 py-4 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 border-3 border-black bg-[#FFE600] flex items-center justify-center font-black text-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              30
            </div>
            <span className="text-2xl font-black uppercase tracking-wider">ThirtySpace</span>
          </div>

          <nav className="flex items-center gap-6 font-bold uppercase text-sm">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/components" className="hover:underline">Components</Link>
            <button 
              onClick={() => setAuthOpen(true)}
              className="border-3 border-black bg-[#FF5C00] text-white px-4 py-2 font-black uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
            >
              Sign In
            </button>
          </nav>
        </header>

        {/* Dynamic Pages */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Hero onOpenAuth={() => setAuthOpen(true)} />} />
            <Route path="/components" element={<Components />} />
            <Route path="*" element={
              <div className="p-12 text-center">
                <h1 className="text-6xl font-black">404</h1>
                <p className="mt-4 font-bold">Page Not Found</p>
                <Link to="/" className="mt-4 inline-block border-3 border-black bg-[#FFE600] px-4 py-2 font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  Return Home
                </Link>
              </div>
            } />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="border-t-4 border-black bg-white p-6 text-center font-bold text-sm">
          Built autonomously by <span className="underline font-black">SVRALABS Multi-Agent System</span> © 2026
        </footer>

        {/* Auth Modal Overlay */}
        <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />

      </div>
    </BrowserRouter>
  );
}
