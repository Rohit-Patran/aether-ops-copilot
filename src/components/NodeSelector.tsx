import React from 'react';
import { EdgeNodeOption } from '../types';

interface NodeSelectorProps {
  nodes: EdgeNodeOption[];
  selectedNode: EdgeNodeOption;
  onSelectNode: (node: EdgeNodeOption) => void;
}

export const NodeSelector: React.FC<NodeSelectorProps> = ({
  nodes,
  selectedNode,
  onSelectNode,
}) => {
  return (
    <div className="bg-[#0e1322] border border-slate-800 rounded-xl p-5 shadow-lg">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono">
          1. Select Target Incident Node
        </span>
        <span className="text-[10px] text-cyan-400 font-mono">ECOSYSTEM SYNCED</span>
      </div>

      <div className="space-y-2">
        {nodes.map((node) => (
          <div
            key={node.id}
            onClick={() => onSelectNode(node)}
            className={`p-3 rounded-lg border cursor-pointer transition ${
              selectedNode.id === node.id
                ? 'bg-purple-950/30 border-purple-500 shadow-sm shadow-purple-500/20'
                : 'bg-[#090d17] border-slate-800/80 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono font-semibold text-white">{node.name}</span>
              <span
                className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${
                  node.priority === 'CRITICAL'
                    ? 'text-rose-400 border-rose-800 bg-rose-950/40'
                    : 'text-amber-400 border-amber-800 bg-amber-950/40'
                }`}
              >
                {node.priority}
              </span>
            </div>
            <div className="text-[11px] text-slate-400 mt-1">{node.location}</div>
            <div className="text-[10px] font-mono text-cyan-400/90 mt-1">
              Flagged: {node.anomaly}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};