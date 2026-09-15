import React from 'react';

interface ActionFooterProps {
  disabled: boolean;
  actionSuccess: boolean;
  onExecute: () => void;
}

export const ActionFooter: React.FC<ActionFooterProps> = ({
  disabled,
  actionSuccess,
  onExecute,
}) => {
  return (
    <div className="pt-4 border-t border-slate-800 mt-4 flex items-center justify-between">
      <div className="text-[11px] text-slate-400">
        {actionSuccess ? (
          <span className="text-emerald-400 font-mono flex items-center gap-1.5">
            <span>✓</span> Automated remediation script dispatched to cluster edge.
          </span>
        ) : (
          <span>Ready for human-in-the-loop sign-off.</span>
        )}
      </div>

      <button
        onClick={onExecute}
        disabled={disabled}
        className={`text-xs px-4 py-2 rounded-lg font-semibold transition ${
          disabled
            ? 'bg-slate-800 text-slate-600 cursor-not-allowed border border-slate-700/50'
            : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20'
        }`}
      >
        Dispatch Automated Remediation
      </button>
    </div>
  );
};