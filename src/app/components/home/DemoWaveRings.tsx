import { useEffect, useRef } from 'react';

interface DemoWaveRingsProps {
  isDark: boolean;
}

export function DemoWaveRings({ isDark }: DemoWaveRingsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };
    resize();
    window.addEventListener('resize', resize);

    let frame = 0;

    const WAVE_COUNT = 5;
    const WAVE_SEGMENTS = 200;
    const CORNER_RADIUS = 24; // matches rounded-3xl

    const animate = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      frame++;
      const t = frame;

      const cx = w / 2;
      const cy = h / 2;
      const halfW = w / 2;
      const halfH = h / 2;

      for (let wi = 0; wi < WAVE_COUNT; wi++) {
        const expand = 1 + wi * 0.06; // each ring slightly larger
        const waveFreq = 3 + wi * 1.5;
        const waveSpeed = 0.015 + wi * 0.004;
        const waveAmp = 2.5 + wi * 2.5 + Math.sin(t * 0.006 + wi) * 2;
        const baseOp = (isDark ? 0.12 : 0.10) * (1 - wi * 0.15);

        ctx.beginPath();
        for (let s = 0; s <= WAVE_SEGMENTS; s++) {
          const progress = s / WAVE_SEGMENTS;
          // Walk around the rounded rectangle perimeter
          const { x: bx, y: by } = getRoundedRectPoint(
            cx, cy, halfW * expand, halfH * expand, CORNER_RADIUS * expand, progress
          );

          // Add wave displacement along the normal
          const { nx, ny } = getRoundedRectNormal(
            cx, cy, halfW * expand, halfH * expand, CORNER_RADIUS * expand, progress
          );

          const wave1 = Math.sin(progress * Math.PI * 2 * waveFreq + t * waveSpeed) * waveAmp;
          const wave2 = Math.sin(progress * Math.PI * 2 * (waveFreq + 2) - t * waveSpeed * 1.4 + wi) * waveAmp * 0.4;
          const wave3 = Math.sin(progress * Math.PI * 2 * (waveFreq * 2.2) + t * waveSpeed * 0.6 + wi * 2) * waveAmp * 0.25;
          const totalWave = wave1 + wave2 + wave3;

          const px = bx + nx * totalWave;
          const py = by + ny * totalWave;

          if (s === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();

        const isPurple = wi % 2 === 0;
        const r = isPurple ? 152 : 0;
        const g = isPurple ? 16 : 211;
        const b = isPurple ? 250 : 243;
        const pulse = 0.7 + 0.3 * Math.sin(t * 0.018 + wi * 0.9);
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${baseOp * pulse})`;
        ctx.lineWidth = isDark ? 1.0 : 0.8;
        ctx.stroke();
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ margin: '-40px', width: 'calc(100% + 80px)', height: 'calc(100% + 80px)' }}
    />
  );
}

// Utility: get a point on a rounded rectangle perimeter at parameter t [0..1]
function getRoundedRectPoint(
  cx: number, cy: number, hw: number, hh: number, r: number, t: number
): { x: number; y: number } {
  // Perimeter: 4 straight sides + 4 quarter-circle corners
  const straightH = (hw - r) * 2;
  const straightV = (hh - r) * 2;
  const cornerArc = (Math.PI / 2) * r;
  const totalPerimeter = straightH * 2 + straightV * 2 + 4 * cornerArc;
  let d = t * totalPerimeter;

  // Segments: top-right corner, right side, bottom-right corner, bottom side,
  //           bottom-left corner, left side, top-left corner, top side
  const segments = [
    { type: 'line' as const, x1: cx + hw - r, y1: cy - hh, x2: cx - (hw - r), y2: cy - hh, len: straightH }, // top
    { type: 'arc' as const, acx: cx - (hw - r), acy: cy - (hh - r), startAngle: -Math.PI / 2, len: cornerArc }, // top-left corner
    { type: 'line' as const, x1: cx - hw, y1: cy - (hh - r), x2: cx - hw, y2: cy + (hh - r), len: straightV }, // left
    { type: 'arc' as const, acx: cx - (hw - r), acy: cy + (hh - r), startAngle: Math.PI, len: cornerArc }, // bottom-left corner
    { type: 'line' as const, x1: cx - (hw - r), y1: cy + hh, x2: cx + (hw - r), y2: cy + hh, len: straightH }, // bottom
    { type: 'arc' as const, acx: cx + (hw - r), acy: cy + (hh - r), startAngle: Math.PI / 2, len: cornerArc }, // bottom-right corner
    { type: 'line' as const, x1: cx + hw, y1: cy + (hh - r), x2: cx + hw, y2: cy - (hh - r), len: straightV }, // right
    { type: 'arc' as const, acx: cx + (hw - r), acy: cy - (hh - r), startAngle: 0, len: cornerArc }, // top-right corner
  ];

  for (const seg of segments) {
    if (d <= seg.len) {
      const localT = d / seg.len;
      if (seg.type === 'line') {
        return {
          x: seg.x1! + (seg.x2! - seg.x1!) * localT,
          y: seg.y1! + (seg.y2! - seg.y1!) * localT,
        };
      } else {
        const angle = seg.startAngle! - localT * (Math.PI / 2);
        return {
          x: seg.acx! + Math.cos(angle) * r,
          y: seg.acy! - Math.sin(angle) * r,
        };
      }
    }
    d -= seg.len;
  }

  return { x: cx + hw - r, y: cy - hh }; // fallback: start point
}

// Utility: get outward normal at a point on the rounded rectangle
function getRoundedRectNormal(
  cx: number, cy: number, hw: number, hh: number, r: number, t: number
): { nx: number; ny: number } {
  const straightH = (hw - r) * 2;
  const straightV = (hh - r) * 2;
  const cornerArc = (Math.PI / 2) * r;
  const totalPerimeter = straightH * 2 + straightV * 2 + 4 * cornerArc;
  let d = t * totalPerimeter;

  const segments = [
    { type: 'line' as const, nx: 0, ny: -1, len: straightH }, // top
    { type: 'arc' as const, acx: cx - (hw - r), acy: cy - (hh - r), startAngle: -Math.PI / 2, len: cornerArc }, // top-left
    { type: 'line' as const, nx: -1, ny: 0, len: straightV }, // left
    { type: 'arc' as const, acx: cx - (hw - r), acy: cy + (hh - r), startAngle: Math.PI, len: cornerArc }, // bottom-left
    { type: 'line' as const, nx: 0, ny: 1, len: straightH }, // bottom
    { type: 'arc' as const, acx: cx + (hw - r), acy: cy + (hh - r), startAngle: Math.PI / 2, len: cornerArc }, // bottom-right
    { type: 'line' as const, nx: 1, ny: 0, len: straightV }, // right
    { type: 'arc' as const, acx: cx + (hw - r), acy: cy - (hh - r), startAngle: 0, len: cornerArc }, // top-right
  ];

  for (const seg of segments) {
    if (d <= seg.len) {
      if (seg.type === 'line') {
        return { nx: seg.nx!, ny: seg.ny! };
      } else {
        const localT = d / seg.len;
        const angle = seg.startAngle! - localT * (Math.PI / 2);
        return { nx: Math.cos(angle), ny: -Math.sin(angle) };
      }
    }
    d -= seg.len;
  }

  return { nx: 0, ny: -1 };
}
