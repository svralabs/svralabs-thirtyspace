import React, { useState, useEffect } from "react";

export default function AuthModal({ isOpen, open, onClose }) {
  const isVisible = isOpen || open;
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && onClose) onClose();
    };
    if (isVisible) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signed in successfully as ${email}! (Demo SVRALABS)`);
    if (onClose) onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div 
        className="w-full max-w-md border-4 border-black bg-white p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] relative animate-in fade-in zoom-in duration-150"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 border-2 border-black bg-[#FF5C00] text-white w-8 h-8 flex items-center justify-center font-black text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FF0055]"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="border-b-4 border-black pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 border-2 border-black bg-[#FFE600] flex items-center justify-center font-black text-xs">30</span>
            <h3 className="text-2xl font-black uppercase tracking-tight">ThirtySpace Auth</h3>
          </div>
          <p className="text-xs font-bold text-black/70 mt-1">Access your Neobrutalist Component Cloud</p>
        </div>

        {/* Tab Switcher */}
        <div className="grid grid-cols-2 gap-2 mb-6 border-3 border-black p-1 bg-zinc-100">
          <button
            onClick={() => setIsLogin(true)}
            className={`py-2 font-black uppercase text-sm border-2 border-black transition-all ${
              isLogin ? "bg-[#FFE600] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" : "bg-transparent border-transparent text-zinc-600"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`py-2 font-black uppercase text-sm border-2 border-black transition-all ${
              !isLogin ? "bg-[#FFE600] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" : "bg-transparent border-transparent text-zinc-600"
            }`}
          >
            Register
          </button>
        </div>

        {/* Auth Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-xs font-black uppercase mb-1">Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Svra Developer"
                className="w-full border-3 border-black p-2.5 font-bold text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:bg-[#FFE600]/20"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-black uppercase mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="developer@svralabs.dev"
              className="w-full border-3 border-black p-2.5 font-bold text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:bg-[#FFE600]/20"
            />
          </div>

          <div>
            <label className="block text-xs font-black uppercase mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full border-3 border-black p-2.5 font-bold text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:bg-[#FFE600]/20"
            />
          </div>

          <button
            type="submit"
            className="w-full border-3 border-black bg-[#00FF66] py-3 font-black uppercase tracking-wider text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all mt-4"
          >
            {isLogin ? "Authenticate Now →" : "Create Developer Account →"}
          </button>
        </form>
      </div>
    </div>
  );
}
