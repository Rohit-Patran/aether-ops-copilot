import React, { useState } from 'react';

interface RunbookTerminalProps {
  selectedNodeId: string;
  output: string;
  isLoading: boolean;
}

export const RunbookTerminal: React.FC<RunbookTerminalProps> = ({
  selectedNodeId,
  output,
  isLoading,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyCli = () => {
    // Extract shell command inside bash code fence or fallback
    const codeMatch = output.match(/```(?:bash)?\s*([\s\S]*?)\s*```/);
    const cliText = codeMatch ? codeMatch[1].trim() : output;

    navigator.clipboard.writeText(cliText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-purple-400"></span>
          <span className="font-semibold text-xs text-white">Live AI Runbook Stream</span>
          <span className="text-[10px] font-mono text-slate-500">[{selectedNodeId}]</span>
        </div>
        {output && (
          <button
            onClick={handleCopyCli}
            className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition flex items-center gap-1"
          >
            <span>{copied ? '✓ Copied' : 'Copy CLI Command'}</span>
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-4 bg-[#07090e] border border-slate-800/80 rounded-lg mt-4 font-mono text-xs leading-relaxed space-y-2 text-slate-300">
        {!output && !isLoading ? (
          <div className="h-full flex flex-col items-center justify-center text-slate-600 space-y-2">
            <span className="text-2xl">✦</span>
            <span>Select an incident node and click "Generate Root-Cause & Runbook" to begin.</span>
            <span className="text-[10px] text-slate-700">
              Tied live to PulseOps telemetry data and KineticFlow tickets.
            </span>
          </div>
        ) : (
          <div className="whitespace-pre-wrap">
            {output}
            {isLoading && (
              <span className="inline-block w-2 h-4 bg-purple-400 animate-pulse ml-1 align-middle"></span>
            )}
          </div>
        )}
      </div>
    </>
  );
};