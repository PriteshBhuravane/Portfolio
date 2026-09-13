import { useState } from "react";
import { Radio, Wifi, Send, CheckCircle2, RefreshCw } from "lucide-react";
import { motion } from "motion/react";
import { triggerConfetti } from "@/utils/confetti";

export const SignalBeaconModel = () => {
  const [isPinging, setIsPinging] = useState(false);
  const [latency, setLatency] = useState(18);
  const [pingCount, setPingCount] = useState(1);

  const testPing = () => {
    if (isPinging) return;
    setIsPinging(true);
    setTimeout(() => {
      const newLatency = Math.floor(Math.random() * 12 + 10);
      setLatency(newLatency);
      setPingCount((c) => c + 1);
      setIsPinging(false);
      triggerConfetti();
    }, 600);
  };

  return (
    <div className="p-6 rounded-3xl border border-slate-800 bg-slate-900/90 shadow-xl relative overflow-hidden backdrop-blur-xl">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Radio size={16} className="animate-pulse" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          </div>
          <div>
            <h4 className="font-bold text-xs sm:text-sm text-white flex items-center gap-1.5">
              Direct Transmission Beacon
            </h4>
            <span className="text-[10px] text-emerald-400 font-mono">
              Status: Available for Opportunities
            </span>
          </div>
        </div>

        <button
          onClick={testPing}
          disabled={isPinging}
          className="px-3 py-1.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 hover:scale-105 cursor-pointer"
        >
          <RefreshCw size={12} className={isPinging ? "animate-spin" : ""} />
          <span>{isPinging ? "Pinging..." : "Test Latency"}</span>
        </button>
      </div>

      {/* Radar Pulse Visual */}
      <div className="flex items-center justify-between gap-4">
        <div className="relative w-24 h-24 flex items-center justify-center flex-shrink-0">
          {/* Animated concentric radar rings */}
          <div className="absolute inset-0 rounded-full border border-emerald-500/20 animate-ping" style={{ animationDuration: "2.5s" }} />
          <div className="absolute inset-2 rounded-full border border-purple-500/30 animate-pulse" />
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-emerald-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/30 z-10">
            <Wifi size={18} />
          </div>
        </div>

        <div className="space-y-1.5 flex-1 min-w-0">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-slate-400">Signal Latency</span>
            <span className="text-emerald-400 font-bold">{latency} ms</span>
          </div>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-purple-500 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(100, Math.max(20, 100 - latency * 2))}%` }}
            />
          </div>
          <p className="text-[11px] text-slate-400 pt-1">
            Based in Ratnagiri, open to remote and on-site software engineering and DevOps positions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignalBeaconModel;
