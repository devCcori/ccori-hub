'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import ArchitectureDiagram from './ArchitectureDiagram';

export const nodes = [
  {
    id: 100,
    name: 'Dev Stack Base',
    role: 'PostgreSQL + Redis + RabbitMQ',
    status: 'online',
    description: 'Stack fundamental de persistencia y mensajería para desarrollo local.'
  },
  {
    id: 101,
    name: 'Observability Node',
    role: 'Grafana + InfluxDB',
    status: 'online',
    description: 'Monitoreo de métricas en tiempo real y análisis de series temporales.'
  },
  {
    id: 102,
    name: 'Edge Proxy',
    role: 'Nginx Proxy Manager',
    status: 'online',
    description: 'Gestión centralizada de certificados SSL y ruteo de tráfico interno.'
  },
  {
    id: 103,
    name: 'Network Gateway',
    role: 'Cloudflare Edge Tunnel',
    status: 'online',
    description: 'Exposición segura de servicios a la red externa sin apertura de puertos.'
  },
  {
    id: 104,
    name: 'Professional Hub',
    role: 'Next.js 15 + Docker',
    status: 'online',
    description: 'Instancia actual: Portafolio interactivo y centro de control profesional.',
    current: true
  },
  {
    id: 105,
    name: 'Mailing Server',
    role: 'Listmonk + Poste.io',
    status: 'in-development',
    description: 'Infraestructura dedicada para gestión de campañas y relay de correo.'
  }
];

export default function HomeLab() {
  const { t } = useI18n();
  const [selectedNode, setSelectedNode] = useState<typeof nodes[0] | null>(null);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#020617]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f4f4f5] mb-4">
            {t('homelab.title')} <span className="text-[#10b981]">HomeLab</span>
          </h2>
          <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
            {t('homelab.subtitle')}
          </p>
        </div>

        {/* Proxmox Cluster Diagram */}
        <div className="bg-[#0f172a] rounded-xl border border-[#1e293b] p-6 md:p-8 mb-8">
          {/* Cluster Header */}
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[#1e293b]">
            <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
            <span className="font-mono text-[#10b981]">{t('homelab.cluster.main')}</span>
            <span className="ml-auto text-[#64748b] text-sm font-mono">{t('homelab.vms')}</span>
          </div>

          {/* Nodes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {nodes.map((node) => (
              <div
                key={node.id}
                className={`
                  relative p-4 rounded-lg border cursor-pointer transition-all duration-300
                  ${node.current 
                    ? 'bg-[#10b981]/10 border-[#10b981] shadow-[0_0_20px_rgba(16,185,129,0.3)]' 
                    : 'bg-[#020617] border-[#1e293b] hover:border-[#06b6d4] hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                  }
                  ${hoveredNode === node.id ? 'scale-[1.02]' : ''}
                `}
                onClick={() => setSelectedNode(node)}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className={`
                    w-2 h-2 rounded-full 
                    ${'bg-[#10b981] animate-pulse'}
                  `}></div>
                  <span className="text-[#64748b] text-xs font-mono">ID: {node.id}</span>
                  {(node as any).current && (
                    <span className="ml-auto text-[#10b981] text-xs font-bold">YOU ARE HERE</span>
                  )}
                </div>

                {/* Node Info */}
                <h3 className="text-[#f4f4f5] font-semibold mb-1">{node.name}</h3>
                <p className="text-[#06b6d4] text-sm font-mono mb-2">{node.role}</p>
                <p className="text-[#64748b] text-xs">{node.description}</p>
              </div>
            ))}
          </div>

          {/* Connection Lines Visualization */}
          <div className="relative h-24 bg-[#020617] rounded-lg border border-[#1e293b] overflow-hidden">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 100">
              {/* Central hub */}
              <circle cx="400" cy="50" r="8" fill="#10b981" className="animate-pulse"/>
              
              {/* Connection lines to nodes - 6 puntos distribuidos uniformemente */}
              <line x1="400" y1="50" x2="120" y2="20" stroke="#1e293b" strokeWidth="2" strokeDasharray="5,5"/>
              <line x1="400" y1="50" x2="235" y2="20" stroke="#1e293b" strokeWidth="2" strokeDasharray="5,5"/>
              <line x1="400" y1="50" x2="350" y2="20" stroke="#1e293b" strokeWidth="2" strokeDasharray="5,5"/>
              <line x1="400" y1="50" x2="465" y2="20" stroke="#1e293b" strokeWidth="2" strokeDasharray="5,5"/>
              <line x1="400" y1="50" x2="580" y2="20" stroke="#10b981" strokeWidth="2"/>
              <line x1="400" y1="50" x2="695" y2="20" stroke="#1e293b" strokeWidth="2" strokeDasharray="5,5"/>

              
              {/* Node indicators on line */}
              <circle cx="120" cy="20" r="4" fill="#64748b"/>
              <circle cx="235" cy="20" r="4" fill="#64748b"/>
              <circle cx="350" cy="20" r="4" fill="#64748b"/>
              <circle cx="465" cy="20" r="4" fill="#64748b"/>
              <circle cx="580" cy="20" r="4" fill="#10b981" className="animate-pulse"/>
              <circle cx="695" cy="20" r="4" fill="#64748b"/>
            </svg>
            
            <div className="absolute bottom-2 left-4 right-4 flex justify-between text-[#64748b] text-xs font-mono">
              <span>100</span>
              <span>101</span>
              <span>102</span>
              <span>103</span>
              <span className="text-[#10b981]">104</span>
              <span>105</span>
            </div>
          </div>
        </div>

        {/* Interactive Architecture Diagram */}
        <div className="bg-[#0f172a] rounded-xl border border-[#1e293b] p-6 md:p-8 mb-8">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#1e293b]">
            <div className="w-3 h-3 rounded-full bg-[#06b6d4]"></div>
            <span className="font-mono text-[#06b6d4]">{t('homelab.diagram.title')}</span>
            <span className="ml-auto text-[#64748b] text-sm">{t('homelab.diagram.subtitle')}</span>
          </div>
          <ArchitectureDiagram />
        </div>

        {/* Selected Node Details */}
        {selectedNode && (
          <div className="bg-[#0f172a] rounded-xl border border-[#10b981] p-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-[#f4f4f5]">{selectedNode.name}</h3>
                <p className="text-[#10b981] font-mono">Node ID: {selectedNode.id}</p>
              </div>
              <button 
                onClick={() => setSelectedNode(null)}
                className="text-[#64748b] hover:text-[#f4f4f5] transition"
              >
                ✕
              </button>
            </div>
            <p className="text-[#f4f4f5] mb-2">{selectedNode.role}</p>
            <p className="text-[#64748b]">{selectedNode.description}</p>
            {selectedNode.id === 104 && (
              <div className="mt-4 p-3 bg-[#10b981]/10 rounded-lg border border-[#10b981]/30">
                <p className="text-[#10b981] text-sm font-mono">
                  ➜ {t('homelab.youarehere')}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Tech Stack Info */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#0f172a] rounded-lg p-4 border border-[#1e293b] text-center">
            <div className="text-2xl mb-2">🖥️</div>
            <div className="text-[#f4f4f5] font-semibold">Proxmox VE</div>
            <div className="text-[#64748b] text-xs">{t('homelab.tech.virtualization')}</div>
          </div>
          <div className="bg-[#0f172a] rounded-lg p-4 border border-[#1e293b] text-center">
            <div className="text-2xl mb-2">🐳</div>
            <div className="text-[#f4f4f5] font-semibold">Docker</div>
            <div className="text-[#64748b] text-xs">{t('homelab.tech.containers')}</div>
          </div>
          <div className="bg-[#0f172a] rounded-lg p-4 border border-[#1e293b] text-center">
            <div className="text-2xl mb-2">⚡</div>
            <div className="text-[#f4f4f5] font-semibold">LXC</div>
            <div className="text-[#64748b] text-xs">{t('homelab.tech.lxc')}</div>
          </div>
          <div className="bg-[#0f172a] rounded-lg p-4 border border-[#1e293b] text-center">
            <div className="text-2xl mb-2">🔒</div>
            <div className="text-[#f4f4f5] font-semibold">{t('homelab.tech.security')}</div>
            <div className="text-[#64748b] text-xs">{t('homelab.tech.security')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
