// code.js — jalan di sandbox Figma (nggak bisa akses network/DOM).
// Tugas: baca component yang di-select, kirim datanya ke ui.html.

figma.showUI(__html__, { width: 340, height: 460 });

function rgbToHex({ r, g, b }) {
  const to = (v) => Math.round(v * 255).toString(16).padStart(2, '0');
  return `#${to(r)}${to(g)}${to(b)}`.toUpperCase();
}

function readSelection() {
  const node = figma.currentPage.selection[0];
  if (!node) {
    figma.ui.postMessage({ type: 'no-selection' });
    return;
  }

  // Ambil warna solid pertama (kalau ada)
  let fillHex = null;
  const fills = Array.isArray(node.fills) ? node.fills : [];
  const solid = fills.find((f) => f.type === 'SOLID' && f.visible !== false);
  if (solid) fillHex = rgbToHex(solid.color);

  figma.ui.postMessage({
    type: 'selection',
    name: node.name, // mis. "Button/Primary"
    nodeType: node.type, // COMPONENT, INSTANCE, FRAME, ...
    fillHex, // mis. "#7C3AE2"
  });
}

// Baca saat plugin dibuka + setiap selection berubah.
readSelection();
figma.on('selectionchange', readSelection);
