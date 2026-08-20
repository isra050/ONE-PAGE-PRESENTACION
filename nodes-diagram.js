/**
 * RIGEOPS - Clean SVG Architecture Diagram (Railway Inspired)
 * Sober, developer-focused aesthetic.
 */

(function () {
  'use strict';

  // Architecture Nodes Configuration
  const ARCH_NODES = [
    { id: 'input', title: 'Data Ingestion', sub: 'Webhook / API', x: 50, y: 150 },
    { id: 'auth', title: 'Gateway', sub: 'Zero-Trust Auth', x: 250, y: 150 },
    { id: 'ai-core', title: 'Neural Engine', sub: 'LLM Orchestration', x: 450, y: 150 },
    { id: 'db', title: 'Vector Store', sub: 'Embeddings', x: 450, y: 300 },
    { id: 'worker', title: 'Auto-Workers', sub: 'Background Jobs', x: 650, y: 150 },
    { id: 'crm', title: 'CRM Sync', sub: 'External Integration', x: 650, y: 300 },
    { id: 'analytics', title: 'Analytics Hub', sub: 'Real-time Metrics', x: 850, y: 150 }
  ];

  // Connections
  const ARCH_CONNS = [
    { from: 'input', to: 'auth' },
    { from: 'auth', to: 'ai-core' },
    { from: 'ai-core', to: 'db' },
    { from: 'ai-core', to: 'worker' },
    { from: 'worker', to: 'crm' },
    { from: 'worker', to: 'analytics' }
  ];

  function initDiagram() {
    const svg = document.getElementById('arch-svg');
    if (!svg) return;

    let html = '';

    // Draw Connections (Orthogonal or Straight)
    html += '<g id="arch-lines">';
    ARCH_CONNS.forEach(c => {
      const n1 = ARCH_NODES.find(n => n.id === c.from);
      const n2 = ARCH_NODES.find(n => n.id === c.to);
      if(n1 && n2) {
        // Simple straight lines connecting centers
        const x1 = n1.x + 75; // center of 150px width card
        const y1 = n1.y + 30; // center of 60px height card
        const x2 = n2.x + 75;
        const y2 = n2.y + 30;
        
        // Orthogonal path logic
        const midX = x1 + (x2 - x1) / 2;
        const path = `M ${x1} ${y1} L ${midX} ${y1} L ${midX} ${y2} L ${x2} ${y2}`;
        
        html += `<path d="${path}" class="conn-line" />`;
      }
    });
    html += '</g>';

    // Draw Nodes (Cards)
    html += '<g id="arch-nodes">';
    ARCH_NODES.forEach(n => {
      html += `
        <g class="node-group" transform="translate(${n.x}, ${n.y})">
          <rect width="150" height="60" class="node-rect" />
          <rect x="10" y="15" width="30" height="30" class="node-icon-bg" />
          <!-- Generic icon placeholder -->
          <svg x="15" y="20" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
          <text x="50" y="28" class="node-title">${n.title}</text>
          <text x="50" y="44" class="node-subtitle">${n.sub}</text>
        </g>
      `;
    });
    html += '</g>';

    svg.innerHTML = html;
  }

  // No complex animation loop, just render once.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDiagram);
  } else {
    initDiagram();
  }
})();
