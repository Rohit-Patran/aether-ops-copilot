import { useState } from 'react';
import { NODES } from './data/nodes';
import { EdgeNodeOption } from './types';
import { useSseStream } from './hooks/useSseStream';
import { useBackendHealth } from './hooks/useBackendHealth';

import { Header } from './components/Header';
import { NodeSelector } from './components/NodeSelector';
import { QueryControl } from './components/QueryControl';
import { RunbookTerminal } from './components/RunbookTerminal';
import { ActionFooter } from './components/ActionFooter';

export default function App() {
  const [selectedNode, setSelectedNode] = useState<EdgeNodeOption>(NODES[0]);
  const [promptQuery, setPromptQuery] = useState('Analyze root cause and suggest automated failover runbook.');
  const [actionSuccess, setActionSuccess] = useState(false);

  const { isHealthy, verifyHealth } = useBackendHealth();
  const { output, isLoading, startStream, setOutput } = useSseStream();

  const handleRunDiagnosis = async () => {
    setActionSuccess(false);
    const backendOnline = await verifyHealth();

    if (!backendOnline) {
      setOutput('⚠️ Backend service unreachable. Ensure Node.js is running on port 3001.');
      return;
    }

    await startStream('/api/ai/diagnose', {
      nodeRef: selectedNode.id,
      query: promptQuery
    });
  };

  return (
    <div className="min-h-screen bg-[#06080d] text-slate-200 flex flex-col font-sans select-none">
      <Header isBackendHealthy={isHealthy} />
      
      <main className="flex-1 p-6 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 space-y-5">
          <NodeSelector 
            nodes={NODES} 
            selectedNode={selectedNode} 
            onSelectNode={setSelectedNode} 
          />
          <QueryControl 
            query={promptQuery}
            onChangeQuery={setPromptQuery}
            onSubmit={handleRunDiagnosis}
            isLoading={isLoading}
          />
        </div>

        <div className="lg:col-span-7 bg-[#0e1322] border border-slate-800 rounded-xl p-5 shadow-2xl flex flex-col h-[600px]">
          <RunbookTerminal 
            selectedNodeId={selectedNode.id}
            output={output}
            isLoading={isLoading}
          />
          <ActionFooter 
            disabled={!output || isLoading || isHealthy === false}
            actionSuccess={actionSuccess}
            onExecute={() => setActionSuccess(true)}
          />
        </div>
      </main>
    </div>
  );
}