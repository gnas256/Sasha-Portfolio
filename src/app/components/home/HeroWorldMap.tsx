import { useEffect, useRef } from 'react';

interface HeroWorldMapProps {
  isDark?: boolean;
  densityScale?: number; // 0-1, fraction of particles to render (default 1)
}

// World map dots stored as [longitude 0-1, latitude 0-1]
// Generates dots at different densities for mobile vs desktop
function generateDots(step: number): [number, number][] {
  const dots: [number, number][] = [];
  for (let x = 0.01; x < 1.0; x += step) {
    for (let y = 0.05; y < 0.95; y += step) {
      const jx = (Math.random() - 0.5) * step * 0.4;
      const jy = (Math.random() - 0.5) * step * 0.4;
      const px = x + jx;
      const py = y + jy;
      if (px < 0 || px > 1 || py < 0 || py > 1) continue;
      dots.push([px, py]);
    }
  }
  return dots;
}

// Mobile: sparser (step 0.025) | Desktop: 3x denser (step ~0.008)
const MOBILE_DOTS = generateDots(0.025);
const DESKTOP_DOTS = generateDots(0.008);

interface GlobeParticle {
  lon: number;
  lat: number;
  size: number;
  baseOpacity: number;
  phase: number;
}

function createParticlesFromDots(dots: [number, number][]): GlobeParticle[] {
  return dots.map(([nx, ny]) => ({
    lon: (nx - 0.5) * Math.PI * 2,
    lat: -(ny - 0.5) * Math.PI,
    size: 0.5 + Math.random() * 0.6,
    baseOpacity: 0.25 + Math.random() * 0.35,
    phase: Math.random() * Math.PI * 2,
  }));
}

const MOBILE_PARTICLES = createParticlesFromDots(MOBILE_DOTS);
const DESKTOP_PARTICLES = createParticlesFromDots(DESKTOP_DOTS);

// Background stars
interface Star {
  x: number; y: number; size: number; brightness: number; phase: number; speed: number;
}

function createStars(count: number): Star[] {
  return Array.from({ length: count }, () => ({
    x: Math.random(),
    y: Math.random(),
    size: 0.4 + Math.random() * 2.0,
    brightness: 0.25 + Math.random() * 0.75,
    phase: Math.random() * Math.PI * 2,
    speed: 0.3 + Math.random() * 1.5,
  }));
}

// Shooting stars
interface ShootingStar {
  x: number; y: number; angle: number; speed: number; life: number; maxLife: number;
  length: number; active: boolean;
}

function createShootingStar(): ShootingStar {
  const angle = Math.PI * 0.15 + Math.random() * Math.PI * 0.3;
  return {
    x: Math.random() * 0.8 + 0.1,
    y: Math.random() * 0.3,
    angle,
    speed: 2 + Math.random() * 3,
    life: 0,
    maxLife: 40 + Math.random() * 60,
    length: 30 + Math.random() * 60,
    active: true,
  };
}

// Nebula clouds
interface Nebula {
  x: number; y: number; rx: number; ry: number; rotation: number;
  r: number; g: number; b: number; opacity: number; phase: number;
}

function createNebulae(forDark: boolean): Nebula[] {
  const darkColors = [
    { r: 152, g: 16, b: 250 },
    { r: 0, g: 184, b: 219 },
    { r: 80, g: 0, b: 200 },
    { r: 0, g: 120, b: 200 },
    { r: 194, g: 122, b: 255 },
  ];
  const lightColors = [
    { r: 152, g: 16, b: 250 },
    { r: 0, g: 184, b: 219 },
    { r: 120, g: 40, b: 220 },
    { r: 0, g: 160, b: 210 },
    { r: 180, g: 100, b: 255 },
  ];
  const colors = forDark ? darkColors : lightColors;
  return Array.from({ length: 8 }, () => {
    const c = colors[Math.floor(Math.random() * colors.length)];
    return {
      x: Math.random(), y: Math.random(),
      rx: 0.05 + Math.random() * 0.12, ry: 0.03 + Math.random() * 0.08,
      rotation: Math.random() * Math.PI * 2,
      ...c,
      opacity: forDark ? (0.04 + Math.random() * 0.06) : (0.06 + Math.random() * 0.08),
      phase: Math.random() * Math.PI * 2,
    };
  });
}

// Liquid blob deformation helper — returns radius multiplier at a given angle
function liquidDeform(angle: number, t: number): number {
  return (
    Math.sin(angle * 3 + t * 0.012) * 0.025 +
    Math.sin(angle * 5 - t * 0.018) * 0.015 +
    Math.sin(angle * 7 + t * 0.008) * 0.01 +
    Math.sin(angle * 2 - t * 0.015) * 0.02
  );
}

const BLOB_SEGMENTS = 120;

export function HeroWorldMap({ isDark = true, densityScale = 1 }: HeroWorldMapProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animRef = useRef<number>(0);
  const isMobileRef = useRef(window.innerWidth < 768);
  const particlesRef = useRef<GlobeParticle[]>(isMobileRef.current ? MOBILE_PARTICLES : DESKTOP_PARTICLES);
  const starsRef = useRef<Star[]>(createStars(200));
  const nebulaeRef = useRef<Nebula[]>(createNebulae(isDark));
  const shootingStarsRef = useRef<ShootingStar[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Recreate nebulae for current theme
    const nebulae = createNebulae(isDark);

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
      // Swap particle set based on viewport width
      const mobile = window.innerWidth < 768;
      if (mobile !== isMobileRef.current) {
        isMobileRef.current = mobile;
        particlesRef.current = mobile ? MOBILE_PARTICLES : DESKTOP_PARTICLES;
      }
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        mouseRef.current = { x, y };
      } else {
        mouseRef.current = { x: -9999, y: -9999 };
      }
    };
    window.addEventListener('mousemove', handleMouse);

    let rotation = 0;
    let frame = 0;
    const particles = particlesRef.current;
    const stars = starsRef.current;
    const shootingStars = shootingStarsRef.current;

    // Sound wave atmosphere config
    const WAVE_COUNT = 8;
    const WAVE_SEGMENTS = 180;

    const animate = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      frame++;

      const cx = w * 0.5;
      const cy = h * 0.52 + 10;
      // Round globe
      const radius = Math.min(w, h) * 0.24;
      const radiusX = radius;
      const radiusY = radius;
      const tilt = 0.15;

      rotation += 0.0018;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const mouseRadius = 100;
      const t = frame;

      // ===== UNIVERSE BACKGROUND (dark mode only) =====
      if (isDark) {

      // Nebula clouds
      for (const neb of nebulae) {
        const breathe = 1 + Math.sin(t * 0.005 + neb.phase) * 0.15;
        const nx = neb.x * w;
        const ny = neb.y * h;
        const nrx = neb.rx * w * breathe;
        const nry = neb.ry * h * breathe;

        ctx.save();
        ctx.translate(nx, ny);
        ctx.rotate(neb.rotation + t * 0.0003);
        const nebGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, Math.max(nrx, nry));
        const op = neb.opacity;
        nebGrad.addColorStop(0, `rgba(${neb.r}, ${neb.g}, ${neb.b}, ${op})`);
        nebGrad.addColorStop(0.5, `rgba(${neb.r}, ${neb.g}, ${neb.b}, ${op * 0.4})`);
        nebGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = nebGrad;
        ctx.beginPath();
        ctx.ellipse(0, 0, nrx, nry, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Background stars (both modes)
      for (const star of stars) {
        const sx = star.x * w;
        const sy = star.y * h;
        const dxg = sx - cx;
        const dyg = sy - cy;
        if ((dxg * dxg) / (radiusX * radiusX) + (dyg * dyg) / (radiusY * radiusY) < 0.85) continue;

        const twinkle = 0.5 + 0.5 * Math.sin(t * 0.03 * star.speed + star.phase);
        const op = star.brightness * twinkle * (isDark ? 1 : 0.45);
        if (op < 0.02) continue;

        if (isDark) {
          ctx.fillStyle = `rgba(200, 210, 255, ${op})`;
        } else {
          // Light mode: purple/cyan tinted dots
          const isP = star.phase > Math.PI;
          ctx.fillStyle = isP
            ? `rgba(152, 16, 250, ${op * 0.6})`
            : `rgba(0, 184, 219, ${op * 0.5})`;
        }
        ctx.beginPath();
        ctx.arc(sx, sy, star.size * (isDark ? 1 : 0.7), 0, Math.PI * 2);
        ctx.fill();

        // Star glow for brighter ones
        if (star.brightness > 0.5 && star.size > 1) {
          const sg = ctx.createRadialGradient(sx, sy, 0, sx, sy, star.size * 4);
          if (isDark) {
            sg.addColorStop(0, `rgba(180, 200, 255, ${op * 0.3})`);
          } else {
            sg.addColorStop(0, `rgba(152, 16, 250, ${op * 0.15})`);
          }
          sg.addColorStop(1, 'transparent');
          ctx.fillStyle = sg;
          ctx.beginPath();
          ctx.arc(sx, sy, star.size * 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      } // end isDark universe background (nebulae + stars only)

      // ===== SHOOTING STARS (both modes) =====
      if (Math.random() < (isDark ? 0.008 : 0.015)) {
        shootingStars.push(createShootingStar());
      }
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.life++;
        if (ss.life > ss.maxLife) {
          shootingStars.splice(i, 1);
          continue;
        }
        const progress = ss.life / ss.maxLife;
        const fadeIn = Math.min(progress * 5, 1);
        const fadeOut = 1 - Math.pow(progress, 2);
        const ssOp = fadeIn * fadeOut * (isDark ? 0.7 : 0.8);

        const px = ss.x * w + ss.life * ss.speed * Math.cos(ss.angle);
        const py = ss.y * h + ss.life * ss.speed * Math.sin(ss.angle);
        const tx = px - ss.length * Math.cos(ss.angle);
        const ty = py - ss.length * Math.sin(ss.angle);

        const grad = ctx.createLinearGradient(tx, ty, px, py);
        if (isDark) {
          grad.addColorStop(0, 'transparent');
          grad.addColorStop(0.5, `rgba(200, 220, 255, ${ssOp * 0.6})`);
          grad.addColorStop(1, `rgba(255, 255, 255, ${ssOp})`);
        } else {
          grad.addColorStop(0, 'transparent');
          grad.addColorStop(0.5, `rgba(120, 0, 220, ${ssOp * 0.85})`);
          grad.addColorStop(1, `rgba(0, 140, 190, ${ssOp})`);
        }
        ctx.strokeStyle = grad;
        ctx.lineWidth = isDark ? 1.4 : 1.6;
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(px, py);
        ctx.stroke();

        // Head glow
        const hg = ctx.createRadialGradient(px, py, 0, px, py, isDark ? 5 : 5);
        if (isDark) {
          hg.addColorStop(0, `rgba(255, 255, 255, ${ssOp})`);
        } else {
          hg.addColorStop(0, `rgba(120, 0, 220, ${ssOp * 0.9})`);
        }
        hg.addColorStop(1, 'transparent');
        ctx.fillStyle = hg;
        ctx.beginPath();
        ctx.arc(px, py, isDark ? 5 : 5, 0, Math.PI * 2);
        ctx.fill();
      }

      // ===== GLOBE (liquid blob shape) =====

      const project = (lon: number, lat: number): { sx: number; sy: number; z: number } | null => {
        const rotLon = lon + rotation;
        const cosLat = Math.cos(lat);
        const x3d = cosLat * Math.sin(rotLon);
        const y3d = Math.sin(lat);
        const z3d = cosLat * Math.cos(rotLon);
        const y3dTilted = y3d * Math.cos(tilt) - z3d * Math.sin(tilt);
        const z3dTilted = y3d * Math.sin(tilt) + z3d * Math.cos(tilt);
        if (z3dTilted < -0.05) return null;
        return { sx: cx + x3d * radiusX, sy: cy - y3dTilted * radiusY, z: z3dTilted };
      };

      // Draw liquid blob globe background
      const drawLiquidBlob = (rX: number, rY: number) => {
        ctx.beginPath();
        for (let s = 0; s <= BLOB_SEGMENTS; s++) {
          const angle = (s / BLOB_SEGMENTS) * Math.PI * 2;
          const deform = 1 + liquidDeform(angle, t);
          const bx = cx + Math.cos(angle) * rX * deform;
          const by = cy + Math.sin(angle) * rY * deform;
          if (s === 0) ctx.moveTo(bx, by);
          else ctx.lineTo(bx, by);
        }
        ctx.closePath();
      };

      // Globe fill with liquid deformation
      const globeBg = ctx.createRadialGradient(cx, cy, 0, cx, cy, radiusX);
      if (isDark) {
        globeBg.addColorStop(0, 'rgba(25, 12, 50, 0.7)');
        globeBg.addColorStop(0.5, 'rgba(15, 8, 35, 0.6)');
        globeBg.addColorStop(0.85, 'rgba(10, 5, 28, 0.5)');
        globeBg.addColorStop(1, 'rgba(5, 2, 15, 0.2)');
      } else {
        globeBg.addColorStop(0, 'rgba(120, 40, 200, 0.12)');
        globeBg.addColorStop(0.4, 'rgba(100, 30, 180, 0.10)');
        globeBg.addColorStop(0.7, 'rgba(80, 20, 160, 0.07)');
        globeBg.addColorStop(1, 'rgba(60, 10, 140, 0.03)');
      }
      ctx.fillStyle = globeBg;
      drawLiquidBlob(radiusX, radiusY);
      ctx.fill();

      // ===== SOUND WAVE ATMOSPHERE =====
      for (let w_i = 0; w_i < WAVE_COUNT; w_i++) {
        const waveOffset = radiusX * (1.05 + w_i * 0.07);
        const waveOffsetY = radiusY * (1.05 + w_i * 0.07);
        const waveFreq = 2.5 + w_i * 1.2;
        const waveSpeed = 0.02 + w_i * 0.006;
        const waveAmp = 4 + w_i * 3.5 + Math.sin(t * 0.008 + w_i) * 3;
        const baseOp = (isDark ? 0.18 : 0.14) * (1 - w_i * 0.09);

        ctx.beginPath();
        for (let s = 0; s <= WAVE_SEGMENTS; s++) {
          const angle = (s / WAVE_SEGMENTS) * Math.PI * 2;
          const wave1 = Math.sin(angle * waveFreq + t * waveSpeed) * waveAmp;
          const wave2 = Math.sin(angle * (waveFreq + 2) - t * waveSpeed * 1.3 + w_i) * waveAmp * 0.5;
          const wave3 = Math.sin(angle * (waveFreq * 2.5) + t * waveSpeed * 0.7 + w_i * 2) * waveAmp * 0.3;
          const totalWave = wave1 + wave2 + wave3;

          // Apply liquid deform to waves too
          const deform = 1 + liquidDeform(angle, t) * 0.5;
          const rx = (waveOffset + totalWave) * deform;
          const ry = (waveOffsetY + totalWave) * deform;
          const px = cx + Math.cos(angle) * rx;
          const py = cy + Math.sin(angle) * ry;

          if (s === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();

        const isPurple = w_i % 2 === 0;
        const r = isPurple ? 152 : 0;
        const g = isPurple ? 16 : 211;
        const b = isPurple ? 250 : 243;
        const pulse = 0.7 + 0.3 * Math.sin(t * 0.02 + w_i * 0.8);
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${baseOp * pulse})`;
        ctx.lineWidth = isDark ? 1.2 : 1.0;
        ctx.stroke();

        // Glow fill for inner waves
        if (w_i < 3) {
          const waveFill = ctx.createRadialGradient(cx, cy, radiusX * 0.95, cx, cy, waveOffset + waveAmp * 2);
          waveFill.addColorStop(0, 'transparent');
          waveFill.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${baseOp * (isDark ? 0.15 : 0.06) * pulse})`);
          waveFill.addColorStop(1, 'transparent');
          ctx.fillStyle = waveFill;
          ctx.fill();
        }
      }

      // Atmospheric rim glow
      const rimGlow = ctx.createRadialGradient(cx, cy, radiusX * 0.8, cx, cy, radiusX * 1.4);
      if (isDark) {
        rimGlow.addColorStop(0, 'transparent');
        rimGlow.addColorStop(0.3, 'rgba(152, 16, 250, 0.06)');
        rimGlow.addColorStop(0.6, 'rgba(0, 184, 219, 0.05)');
        rimGlow.addColorStop(1, 'transparent');
      } else {
        rimGlow.addColorStop(0, 'transparent');
        rimGlow.addColorStop(0.3, 'rgba(152, 16, 250, 0.10)');
        rimGlow.addColorStop(0.6, 'rgba(0, 184, 219, 0.08)');
        rimGlow.addColorStop(1, 'transparent');
      }
      ctx.fillStyle = rimGlow;
      ctx.beginPath();
      ctx.ellipse(cx, cy, radiusX * 1.4, radiusY * 1.4, 0, 0, Math.PI * 2);
      ctx.fill();

      // Outer liquid rings
      ctx.lineWidth = isDark ? 1 : 1.2;
      drawLiquidBlob(radiusX + 2, radiusY + 2);
      ctx.strokeStyle = isDark ? 'rgba(152, 16, 250, 0.1)' : 'rgba(152, 16, 250, 0.18)';
      ctx.stroke();

      ctx.lineWidth = isDark ? 0.5 : 0.7;
      drawLiquidBlob(radiusX + 15, radiusY + 15);
      ctx.strokeStyle = isDark ? 'rgba(0, 211, 243, 0.04)' : 'rgba(0, 211, 243, 0.10)';
      ctx.stroke();

      // ===== GLOBE PARTICLES =====
      const lightMul = isDark ? 1 : 1.6;
      const visible: { sx: number; sy: number; z: number; idx: number; opacity: number }[] = [];
      const pt = rotation * 500;
      const currentParticles = particlesRef.current;
      // Compute skip step for density scaling (e.g. 0.5 → render every 2nd particle)
      const skipStep = densityScale < 1 ? Math.max(1, Math.round(1 / densityScale)) : 1;

      for (let i = 0; i < currentParticles.length; i += skipStep) {
        const p = currentParticles[i];
        const proj = project(p.lon, p.lat);
        if (!proj) continue;

        const edgeFade = Math.pow(Math.max(0, proj.z), 0.4);
        const twinkle = Math.sin(pt * 0.04 + p.phase) * 0.06;
        const opacity = Math.max(0, (p.baseOpacity * edgeFade + twinkle) * lightMul);
        if (opacity < 0.01) continue;

        const dx = proj.sx - mx;
        const dy = proj.sy - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let drawX = proj.sx;
        let drawY = proj.sy;
        let extraGlow = 0;

        if (dist < mouseRadius && dist > 0) {
          const force = (mouseRadius - dist) / mouseRadius;
          drawX += (dx / dist) * force * 18;
          drawY += (dy / dist) * force * 18;
          extraGlow = force;
        }

        if (extraGlow > 0.1) {
          const grd = ctx.createRadialGradient(drawX, drawY, 0, drawX, drawY, p.size * 5);
          grd.addColorStop(0, `rgba(152, 16, 250, ${extraGlow * (isDark ? 0.3 : 0.4)})`);
          grd.addColorStop(0.5, `rgba(0, 211, 243, ${extraGlow * (isDark ? 0.15 : 0.25)})`);
          grd.addColorStop(1, 'transparent');
          ctx.fillStyle = grd;
          ctx.fillRect(drawX - p.size * 5, drawY - p.size * 5, p.size * 10, p.size * 10);
        }

        // Purple-to-cyan gradient based on position
        const colorT = (drawX - (cx - radiusX)) / (radiusX * 2);
        const r = Math.floor(152 + (0 - 152) * colorT);
        const g = Math.floor(16 + (211 - 16) * colorT);
        const b = Math.floor(250 + (243 - 250) * colorT);

        const drawSize = p.size * (0.7 + edgeFade * 0.5);
        ctx.beginPath();
        ctx.arc(drawX, drawY, drawSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${Math.min(1, opacity)})`;
        ctx.fill();

        visible.push({ sx: drawX, sy: drawY, z: proj.z, idx: i, opacity });
      }

      // Connection lines near mouse (both modes)
      if (mx > 0 && my > 0) {
        const lineAlpha = isDark ? 0.15 : 0.20;
        for (let i = 0; i < visible.length; i++) {
          const a = visible[i];
          const da = Math.hypot(a.sx - mx, a.sy - my);
          if (da > mouseRadius * 1.3) continue;
          for (let j = i + 1; j < visible.length; j++) {
            const b = visible[j];
            const db = Math.hypot(b.sx - mx, b.sy - my);
            if (db > mouseRadius * 1.3) continue;
            const pdist = Math.hypot(a.sx - b.sx, a.sy - b.sy);
            if (pdist < 35) {
              const lineOp = (1 - pdist / 35) * lineAlpha * Math.min(a.opacity, b.opacity) * 2;
              ctx.beginPath();
              ctx.moveTo(a.sx, a.sy);
              ctx.lineTo(b.sx, b.sy);
              ctx.strokeStyle = isDark
                ? `rgba(0, 211, 243, ${lineOp})`
                : `rgba(152, 16, 250, ${lineOp})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }

        // Cursor glow
        const cursorGlow = ctx.createRadialGradient(mx, my, 0, mx, my, mouseRadius);
        if (isDark) {
          cursorGlow.addColorStop(0, 'rgba(152, 16, 250, 0.06)');
          cursorGlow.addColorStop(0.4, 'rgba(0, 184, 219, 0.03)');
        } else {
          cursorGlow.addColorStop(0, 'rgba(152, 16, 250, 0.08)');
          cursorGlow.addColorStop(0.4, 'rgba(0, 184, 219, 0.05)');
        }
        cursorGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = cursorGlow;
        ctx.beginPath();
        ctx.arc(mx, my, mouseRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Center ambient glow (both modes)
      const ambientGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, radiusX * 0.6);
      if (isDark) {
        ambientGlow.addColorStop(0, 'rgba(152, 16, 250, 0.03)');
        ambientGlow.addColorStop(0.5, 'rgba(0, 184, 219, 0.015)');
      } else {
        ambientGlow.addColorStop(0, 'rgba(152, 16, 250, 0.06)');
        ambientGlow.addColorStop(0.5, 'rgba(0, 184, 219, 0.04)');
      }
      ambientGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = ambientGlow;
      ctx.beginPath();
      ctx.ellipse(cx, cy, radiusX * 0.6, radiusY * 0.6, 0, 0, Math.PI * 2);
      ctx.fill();

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, [isDark, densityScale]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
      style={{
        opacity: 0.95,
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
      }}
    />
  );
}