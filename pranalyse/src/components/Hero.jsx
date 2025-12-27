import { motion } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 px-3 py-1 rounded-full text-brand text-xs font-bold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
            </span>
            NEXT-GEN MOVEMENT AI
          </div>
          <h1 className="text-6xl lg:text-8xl font-black leading-[0.9] mb-6">
            Analyse your <span className="text-brand">Prana.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-10">
            Real-time movement, posture, and wellness intelligence. 
            No wearables. Just your camera and our AI.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-brand text-black px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:scale-105 transition">
              START ANALYSING <ChevronRight size={20}/>
            </button>
            <button className="bg-white/5 border border-white/10 px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:bg-white/10 transition">
              <Play size={20} fill="currentColor"/> VIEW DEMO
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[2rem] border border-white/10 overflow-hidden bg-surface shadow-2xl">
            {/* Visual simulation of the AI */}
            <img 
              src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80" 
              className="w-full aspect-video object-cover opacity-60" 
              alt="Yoga Pose"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-transparent to-transparent"></div>
            
            {/* Skeletal Overlay Simulation */}
            <div className="absolute inset-0 flex items-center justify-center">
               <svg className="w-full h-full text-brand/60" viewBox="0 0 100 100">
                  <motion.circle cx="50" cy="25" r="1.5" fill="currentColor" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 2 }} />
                  <line x1="50" y1="25" x2="50" y2="55" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="50" y1="35" x2="30" y2="50" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="50" y1="35" x2="70" y2="50" stroke="currentColor" strokeWidth="0.5" />
               </svg>
            </div>

            {/* Floating Data Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] text-brand font-mono uppercase tracking-widest">Live Posture Score</p>
                  <p className="text-3xl font-black">98.4%</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-gray-400 font-mono">STABILITY</p>
                  <p className="text-lg font-bold text-brand">OPTIMAL</p>
                </div>
              </div>
            </div>
          </div>
          {/* Background Glow */}
          <div className="absolute -inset-4 bg-brand/20 blur-[100px] -z-10 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
}