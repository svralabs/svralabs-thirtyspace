import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Components() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-black font-sans p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="border-4 border-black p-8 bg-[#FFE600] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">ThirtySpace Design System</h1>
          <p className="mt-3 text-lg font-bold text-black/80">
            A high-contrast, neobrutalist component kit built with pure Tailwind CSS.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link to="/" className="border-3 border-black bg-white px-5 py-2.5 font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
              ← Back to Hero
            </Link>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Bento Card 1: Buttons */}
          <div className="border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-4">
            <h2 className="text-2xl font-black uppercase border-b-4 border-black pb-2">1. Buttons</h2>
            <div className="flex flex-col gap-3">
              <button className="border-3 border-black bg-[#FF5C00] text-white px-5 py-3 font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                Primary Button
              </button>
              <button className="border-3 border-black bg-[#00E5FF] text-black px-5 py-3 font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                Secondary Cyan
              </button>
              <button className="border-3 border-black bg-[#FF0055] text-white px-5 py-3 font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                Destructive Action
              </button>
            </div>
          </div>

          {/* Bento Card 2: Badges & Tags */}
          <div className="border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-4">
            <h2 className="text-2xl font-black uppercase border-b-4 border-black pb-2">2. Status Badges</h2>
            <div className="flex flex-wrap gap-3">
              <span className="border-2 border-black bg-[#00FF66] px-3 py-1 text-xs font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Active 🟢
              </span>
              <span className="border-2 border-black bg-[#FFE600] px-3 py-1 text-xs font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Pending ⏳
              </span>
              <span className="border-2 border-black bg-[#FF0055] text-white px-3 py-1 text-xs font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Rejected ❌
              </span>
              <span className="border-2 border-black bg-purple-300 px-3 py-1 text-xs font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Beta v2.0
              </span>
            </div>
          </div>

          {/* Bento Card 3: Inputs & Forms */}
          <div className="border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-4">
            <h2 className="text-2xl font-black uppercase border-b-4 border-black pb-2">3. Form Controls</h2>
            <div className="space-y-3">
              <input 
                type="text" 
                placeholder="Enter your API Key..." 
                className="w-full border-3 border-black p-3 font-bold placeholder-black/40 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:bg-[#FFE600]/20"
              />
              <select className="w-full border-3 border-black p-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none">
                <option>Select Tier: Enterprise Pro</option>
                <option>Select Tier: Developer Starter</option>
              </select>
            </div>
          </div>

          {/* Bento Card 4: Data Table */}
          <div className="md:col-span-2 lg:col-span-3 border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-4">
            <h2 className="text-2xl font-black uppercase border-b-4 border-black pb-2">4. Neobrutalist Data Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-3 border-black text-left">
                <thead className="bg-[#FFE600] border-b-3 border-black">
                  <tr>
                    <th className="p-3 font-black uppercase border-r-3 border-black">Service ID</th>
                    <th className="p-3 font-black uppercase border-r-3 border-black">Endpoint</th>
                    <th className="p-3 font-black uppercase border-r-3 border-black">Latency</th>
                    <th className="p-3 font-black uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y-3 divide-black font-bold">
                  <tr>
                    <td className="p-3 border-r-3 border-black">SRV-098</td>
                    <td className="p-3 border-r-3 border-black font-mono">/v1/auth/tokens</td>
                    <td className="p-3 border-r-3 border-black font-mono">42ms</td>
                    <td className="p-3"><span className="bg-[#00FF66] border border-black px-2 py-0.5 text-xs font-black">200 OK</span></td>
                  </tr>
                  <tr className="bg-zinc-50">
                    <td className="p-3 border-r-3 border-black">SRV-099</td>
                    <td className="p-3 border-r-3 border-black font-mono">/v1/models/9router</td>
                    <td className="p-3 border-r-3 border-black font-mono">180ms</td>
                    <td className="p-3"><span className="bg-[#00FF66] border border-black px-2 py-0.5 text-xs font-black">200 OK</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
