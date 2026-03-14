'use client';

import { useCallback, useState } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  Edge,
  Handle,
  Position,
  Connection,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Type definitions for node data
interface CustomNodeData extends Record<string, unknown> {
  label: string;
  role?: string;
  icon?: string;
  current?: boolean;
}

// Custom Node Components
function InternetNode() {
  return (
    <div className="px-4 py-3 bg-[#1e293b] rounded-lg border border-[#334155]">
      <Handle type="source" position={Position.Bottom} className="w-2 h-2 bg-[#10b981]" />
      <div className="text-white font-semibold text-sm">🌐 Internet</div>
    </div>
  );
}

function CloudflareNode({ data }: { data: CustomNodeData }) {
  return (
    <div className="px-4 py-3 bg-[#f48120]/20 rounded-lg border border-[#f48120] cursor-pointer hover:bg-[#f48120]/30 transition">
      <Handle type="target" position={Position.Top} className="w-2 h-2 bg-[#f48120]" />
      <Handle type="source" position={Position.Bottom} className="w-2 h-2 bg-[#f48120]" />
      <div className="text-[#f48120] font-semibold text-sm">☁️ Cloudflare</div>
      <div className="text-[#94a3b8] text-xs">{data.label}</div>
    </div>
  );
}

function NginxNode({ data }: { data: CustomNodeData }) {
  return (
    <div className="px-4 py-3 bg-[#009639]/20 rounded-lg border border-[#009639] cursor-pointer hover:bg-[#009639]/30 transition">
      <Handle type="target" position={Position.Top} className="w-2 h-2 bg-[#009639]" />
      <Handle type="source" position={Position.Bottom} className="w-2 h-2 bg-[#009639]" />
      <div className="text-[#009639] font-semibold text-sm">🔀 Nginx Proxy</div>
      <div className="text-[#94a3b8] text-xs">{data.label}</div>
    </div>
  );
}

function AppNode({ data }: { data: CustomNodeData }) {
  const isCurrent = data.current === true;
  return (
    <div 
      className={`px-4 py-3 rounded-lg border cursor-pointer transition ${
        isCurrent 
          ? 'bg-[#10b981]/20 border-[#10b981] shadow-[0_0_20px_rgba(16,185,129,0.3)]' 
          : 'bg-[#0f172a] border-[#1e293b] hover:border-[#06b6d4]'
      }`}
    >
      <Handle type="target" position={Position.Top} className="w-2 h-2 bg-[#06b6d4]" />
      <Handle type="source" position={Position.Bottom} className="w-2 h-2 bg-[#06b6d4]" />
      <div className="text-[#f4f4f5] font-semibold text-sm">{data.icon || '📦'} {data.label}</div>
      <div className="text-[#64748b] text-xs">{data.role || ''}</div>
      {isCurrent && (
        <div className="text-[#10b981] text-xs mt-1 font-mono">➜ YOU ARE HERE</div>
      )}
    </div>
  );
}

function DatabaseNode({ data }: { data: CustomNodeData }) {
  return (
    <div className="px-4 py-3 bg-[#8b5cf6]/20 rounded-lg border border-[#8b5cf6] cursor-pointer hover:bg-[#8b5cf6]/30 transition">
      <Handle type="target" position={Position.Top} className="w-2 h-2 bg-[#8b5cf6]" />
      <Handle type="source" position={Position.Bottom} className="w-2 h-2 bg-[#8b5cf6]" />
      <div className="text-[#8b5cf6] font-semibold text-sm">🗄️ Dev Stack</div>
      <div className="text-[#94a3b8] text-xs">{data.label}</div>
    </div>
  );
}

function ObservabilityNode({ data }: { data: CustomNodeData }) {
  return (
    <div className="px-4 py-3 bg-[#e37b29]/20 rounded-lg border border-[#e37b29] cursor-pointer hover:bg-[#e37b29]/30 transition">
      <Handle type="target" position={Position.Top} className="w-2 h-2 bg-[#e37b29]" />
      <div className="text-[#e37b29] font-semibold text-sm">📊 Observability</div>
      <div className="text-[#94a3b8] text-xs">{data.label}</div>
    </div>
  );
}

const nodeTypes = {
  internet: InternetNode,
  cloudflare: CloudflareNode,
  nginx: NginxNode,
  app: AppNode,
  database: DatabaseNode,
  observability: ObservabilityNode,
};

const initialNodes: Node[] = [
  // Edge Layer
  {
    id: 'internet',
    type: 'internet',
    position: { x: 400, y: 0 },
    data: { label: 'Internet' },
  },
  
  // Cloudflare Tunnel (Node 103 equivalent)
  {
    id: 'cloudflare',
    type: 'cloudflare',
    position: { x: 400, y: 100 },
    data: { label: 'Edge Tunnel' },
  },
  
  // Nginx Proxy Manager (Node 102 equivalent)
  {
    id: 'nginx',
    type: 'nginx',
    position: { x: 400, y: 200 },
    data: { label: 'Reverse Proxy' },
  },
  
  // Application Layer - Side by side
  {
    id: 'portfolio',
    type: 'app',
    position: { x: 250, y: 320 },
    data: { 
      label: 'Portfolio', 
      role: 'Next.js 15 + Docker',
      icon: '🎨',
      current: true 
    },
  },
  {
    id: 'mailing',
    type: 'app',
    position: { x: 550, y: 320 },
    data: { 
      label: 'Mailing', 
      role: 'Listmonk + Poste.io',
      icon: '📧',
      current: false 
    },
  },
  
  // Data Layer
  {
    id: 'database',
    type: 'database',
    position: { x: 400, y: 450 },
    data: { label: 'PostgreSQL + Redis + RabbitMQ' },
  },
  
  // Observability - Side floating
  {
    id: 'observability',
    type: 'observability',
    position: { x: 700, y: 200 },
    data: { label: 'Grafana + InfluxDB' },
  },
];

const initialEdges: Edge[] = [
  // Internet → Cloudflare
  {
    id: 'e-internet-cloudflare',
    source: 'internet',
    target: 'cloudflare',
    animated: true,
    style: { stroke: '#10b981', strokeWidth: 2 },
  },
  
  // Cloudflare → Nginx
  {
    id: 'e-cloudflare-nginx',
    source: 'cloudflare',
    target: 'nginx',
    animated: true,
    style: { stroke: '#10b981', strokeWidth: 2 },
  },
  
  // Nginx → Apps
  {
    id: 'e-nginx-portfolio',
    source: 'nginx',
    target: 'portfolio',
    style: { stroke: '#06b6d4', strokeWidth: 2 },
  },
  {
    id: 'e-nginx-mailing',
    source: 'nginx',
    target: 'mailing',
    style: { stroke: '#06b6d4', strokeWidth: 2 },
  },
  
  // Apps → Database
  {
    id: 'e-portfolio-db',
    source: 'portfolio',
    target: 'database',
    style: { stroke: '#8b5cf6', strokeWidth: 2 },
  },
  {
    id: 'e-mailing-db',
    source: 'mailing',
    target: 'database',
    style: { stroke: '#8b5cf6', strokeWidth: 2 },
  },
  
  // Database → Observability
  {
    id: 'e-db-obs',
    source: 'database',
    target: 'observability',
    style: { stroke: '#e37b29', strokeWidth: 1, strokeDasharray: '5,5' },
  },
  
  // Observability dotted connections to all
  {
    id: 'e-obs-cloudflare',
    source: 'cloudflare',
    target: 'observability',
    style: { stroke: '#e37b29', strokeWidth: 1, strokeDasharray: '5,5' },
  },
  {
    id: 'e-obs-nginx',
    source: 'nginx',
    target: 'observability',
    style: { stroke: '#e37b29', strokeWidth: 1, strokeDasharray: '5,5' },
  },
  {
    id: 'e-obs-portfolio',
    source: 'portfolio',
    target: 'observability',
    style: { stroke: '#e37b29', strokeWidth: 1, strokeDasharray: '5,5' },
  },
  {
    id: 'e-obs-mailing',
    source: 'mailing',
    target: 'observability',
    style: { stroke: '#e37b29', strokeWidth: 1, strokeDasharray: '5,5' },
  },
];

export default function ArchitectureDiagram() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onNodeClick = useCallback((_: React.MouseEvent, node: Node) => {
    setSelectedNode(node);
  }, []);

  return (
    <div className="w-full">
      <div className="h-[500px] bg-[#020617] rounded-xl border border-[#1e293b] touch-pan-y">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={onNodeClick}
          nodeTypes={nodeTypes}
          fitView
          attributionPosition="bottom-left"
          panOnScroll={false}
        >
          <Background color="#1e293b" gap={16} />
          <Controls className="!bg-[#0f172a] !border-[#1e293b] !shadow-lg [&>button]:!bg-[#1e293b] [&>button]:!border-[#334155] [&>button]:!text-[#f4f4f5] [&>button]:hover:!bg-[#334155]" />
          <MiniMap 
            className="!bg-[#0f172a] !border-[#1e293b] !rounded-lg" 
            maskColor="rgba(15, 23, 42, 0.7)"
            maskStrokeColor="#334155"
            nodeStrokeColor="#334155"
            nodeBorderRadius={4}
            nodeColor={(node) => {
              if (node.type === 'internet') return '#334155';
              if (node.type === 'cloudflare') return '#f48120';
              if (node.type === 'nginx') return '#009639';
              if (node.type === 'app') return (node.data?.current as boolean) ? '#10b981' : '#06b6d4';
              if (node.type === 'database') return '#8b5cf6';
              if (node.type === 'observability') return '#e37b29';
              return '#64748b';
            }}
          />
        </ReactFlow>
      </div>
      
      {/* Node Details Panel */}
      {selectedNode && (
        <div className="mt-4 bg-[#0f172a] rounded-lg border border-[#1e293b] p-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#f4f4f5]">
                {(selectedNode.data as CustomNodeData)?.icon || '📦'} {(selectedNode.data as CustomNodeData)?.label}
              </h3>
              <p className="text-[#64748b] text-sm">{(selectedNode.data as CustomNodeData)?.role || (selectedNode.data as CustomNodeData)?.label}</p>
            </div>
            <button 
              onClick={() => setSelectedNode(null)}
              className="text-[#64748b] hover:text-[#f4f4f5] transition"
            >
              ✕
            </button>
          </div>
          {selectedNode.id === 'portfolio' && (
            <p className="mt-2 text-[#10b981] text-sm font-mono">➜ This is where you are right now!</p>
          )}
          {selectedNode.id === 'observability' && (
            <p className="mt-2 text-[#e37b29] text-sm">Collects metrics from all nodes via dotted connections</p>
          )}
          {selectedNode.id === 'cloudflare' && (
            <p className="mt-2 text-[#f48120] text-sm">Secure tunnel - no open ports on the firewall</p>
          )}
          {selectedNode.id === 'nginx' && (
            <p className="mt-2 text-[#009639] text-sm">Routes traffic and manages SSL certificates</p>
          )}
          {selectedNode.id === 'database' && (
            <p className="mt-2 text-[#8b5cf6] text-sm">Core persistence layer for all applications</p>
          )}
        </div>
      )}
      
      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-4 text-xs text-[#64748b]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 bg-[#10b981]" />
          <span>Animated traffic</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 border-t border-dashed border-[#e37b29]" />
          <span>Monitoring</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#10b981]" />
          <span>Current node</span>
        </div>
      </div>
    </div>
  );
}
