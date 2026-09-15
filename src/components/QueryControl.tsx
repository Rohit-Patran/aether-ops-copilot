import React from 'react';

interface QueryControlProps {
  query: string;
  onChangeQuery: (query: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export const QueryControl: React.FC<QueryControlProps> = ({
  query,
  onChangeQuery,
  onSubmit,
  isLoading,
}) => {
  return (
    <div className="space-y-5">
      <div className="bg-[#0e1322] border border-slate-800 rounded-xl p-5 shadow-lg space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono">
            2. Copilot Query Parameters
          </span>
          <span className="text-[10px] text-slate-500 font-mono">STREAMING COMPLETION</span>
        </div>

        <textarea
          rows={3}
          value={query}
          onChange={(e) => onChangeQuery(e.target.value)}
          className="w-full bg-[#07090e] border border-slate-800 rounded-lg p-3 text-xs text-slate-200 focus:outline-none focus:border-purple-500 transition font-mono resize-none"
        />

        <button
          onClick={onSubmit}
          disabled={isLoading}
          className={`w-full py-2.5 rounded-lg text-xs font-semibold tracking-wide flex items-center justify-center gap-2 transition shadow-lg ${
            isLoading
              ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-purple-600/20'
          }`}
        >
          {isLoading ? (
            <>
              <span className="w-3.5 h-3.5 border-2 border-slate-400 border-t-transparent rounded-full animate-spin"></span>
              <span>Streaming Tokens via Node.js SSE...</span>
            </>
          ) : (
            <span>✦ Generate Root-Cause & Runbook</span>
          )}
        </button>
      </div>

      <div className="bg-[#07090e] border border-slate-800/80 rounded-xl p-4 text-xs space-y-2 text-slate-400 font-mono">
        <div className="text-white font-semibold text-[11px] flex items-center gap-1.5">
          <span className="text-cyan-400">⚡</span> Full-Stack Streaming Architecture
        </div>
        <p className="text-[11px] leading-relaxed text-slate-400">
          Back-end built with <b>Node.js & Express</b>. Uses <b>Server-Sent Events (SSE)</b> to stream
          token chunks progressively, eliminating sluggish 10-second JSON batch waits.
        </p>
      </div>
    </div>
  );
};