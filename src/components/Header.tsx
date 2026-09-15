import React from 'react';

interface HeaderProps {
  isBackendHealthy: boolean | null;
}

export const Header: React.FC<HeaderProps> = ({ isBackendHealthy }) => {
  return (
    <header className="h-16 border-b border-slate-800 bg-[#0b0f19] px-6 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-lg bg-purple-500/20 border border-purple-500 flex items-center justify-center text-purple-400 font-bold font-mono">
          ✦
        </div>
        <div>
          <h1 className="text-sm sm:text-base font-semibold tracking-wide text-white flex items-center gap-2">
            AetherOps Copilot
            <span className="text-[10px] bg-purple-950/80 text-purple-300 border border-purple-800 px-2 py-0.5 rounded font-mono font-medium">
              GENAI SRE ENGINE
            </span>
          </h1>
          <p className="text-[11px] text-slate-400">
            Automated LLM Root-Cause Analysis & Runbook Synthesis for KinetiqOps & KinetiqFlow
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div
          className={`hidden sm:flex items-center gap-1.5 text-xs px-3 py-1 rounded-lg font-mono border transition-colors ${
            isBackendHealthy === null
              ? 'text-slate-400 bg-slate-900 border-slate-800'
              : isBackendHealthy
              ? 'text-emerald-400 bg-emerald-950/40 border-emerald-900/50'
              : 'text-rose-400 bg-rose-950/40 border-rose-900/50'
          }`}
        >
          <span
            className={`w-2 h-2 rounded-full ${
              isBackendHealthy === null
                ? 'bg-slate-500'
                : isBackendHealthy
                ? 'bg-emerald-400 animate-pulse'
                : 'bg-rose-500'
            }`}
          ></span>
          <span>
            {isBackendHealthy === null
              ? 'AWAITING DISPATCH'
              : isBackendHealthy
              ? 'NODE.JS SSE STREAM READY'
              : 'BACKEND DISCONNECTED'}
          </span>
        </div>
      </div>
    </header>
  );
};