import { Activity } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-darkBg/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Activity className="text-brand w-8 h-8" />
          <span className="text-2xl font-black tracking-tighter">PRANALYSE</span>
        </div>
        <div className="hidden md:flex gap-8 items-center text-sm font-medium text-gray-400">
          <a href="#features" className="hover:text-brand transition">Features</a>
          <a href="#tech" className="hover:text-brand transition">Technology</a>
          <button className="bg-brand text-black px-5 py-2 rounded-full font-bold hover:shadow-[0_0_20px_rgba(0,255,194,0.3)] transition">
            Live Demo
          </button>
        </div>
      </div>
    </nav>
  );
}