import { useEffect, useRef, useCallback } from 'react';
import { useTheme } from './ThemeContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

interface Meteor {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  angle: number;
  life: number;
  maxLife: number;
}

export function ParticleBackground() {
  const { isDark } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const particlesRef = useRef<Particle[]>([]);
  const meteorsRef = useRef<Meteor[]>([]);
  const animationRef = useRef<number>(0);

  const createParticles = useCallback((width: number, height: number) => {
    const count = Math.min(Math.floor((width * height) / 12000), 120);
    const particles: Particle[] = [];
    const darkColors = [
      'rgba(152, 16, 250, ',  // purple
      'rgba(194, 122, 255, ', // light purple
      'rgba(0, 184, 219, ',   // cyan
      'rgba(0, 211, 243, ',   // light cyan
      'rgba(255, 255, 255, ', // white
    ];
    const lightColors = [
      'rgba(120, 0, 220, ',   // deep purple
      'rgba(152, 16, 250, ',  // purple
      'rgba(0, 140, 180, ',   // teal
      'rgba(0, 184, 219, ',   // cyan
      'rgba(80, 0, 180, ',    // dark purple
    ];
    const colors = isDark ? darkColors : lightColors;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * (isDark ? 1.5 : 1.8) + (isDark ? 0.5 : 0.6),
        opacity: Math.random() * (isDark ? 0.5 : 0.4) + (isDark ? 0.1 : 0.15),
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    return particles;
  }, [isDark]);

  const spawnMeteor = useCallback((width: number, height: number): Meteor => {
    const angle = Math.PI * 0.75 + (Math.random() - 0.5) * 0.3;
    return {
      x: Math.random() * width * 1.5,
      y: -50,
      length: Math.random() * (isDark ? 80 : 100) + (isDark ? 40 : 50),
      speed: Math.random() * 4 + 3,
      opacity: Math.random() * (isDark ? 0.6 : 0.7) + (isDark ? 0.2 : 0.3),
      angle,
      life: 0,
      maxLife: Math.random() * 60 + 60,
    };
  }, [isDark]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesRef.current = createParticles(canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouse);

    const animate = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Spawn meteors occasionally
      if (Math.random() < (isDark ? 0.02 : 0.025)) {
        meteorsRef.current.push(spawnMeteor(w, h));
      }

      // Draw & update meteors
      meteorsRef.current = meteorsRef.current.filter((m) => {
        m.life++;
        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;
        const fadeRatio = m.life > m.maxLife * 0.7 ? 1 - (m.life - m.maxLife * 0.7) / (m.maxLife * 0.3) : 1;
        const op = m.opacity * fadeRatio;
        if (op <= 0) return false;

        const grad = ctx.createLinearGradient(
          m.x,
          m.y,
          m.x - Math.cos(m.angle) * m.length,
          m.y - Math.sin(m.angle) * m.length
        );
        if (isDark) {
          grad.addColorStop(0, `rgba(200, 180, 255, ${op})`);
          grad.addColorStop(1, `rgba(200, 180, 255, 0)`);
        } else {
          grad.addColorStop(0, `rgba(120, 0, 220, ${op})`);
          grad.addColorStop(0.5, `rgba(0, 160, 200, ${op * 0.6})`);
          grad.addColorStop(1, `rgba(120, 0, 220, 0)`);
        }
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(
          m.x - Math.cos(m.angle) * m.length,
          m.y - Math.sin(m.angle) * m.length
        );
        ctx.strokeStyle = grad;
        ctx.lineWidth = isDark ? 1.2 : 1.4;
        ctx.stroke();

        // Head glow
        const hg = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, isDark ? 2 : 3);
        if (isDark) {
          hg.addColorStop(0, `rgba(220, 200, 255, ${op})`);
        } else {
          hg.addColorStop(0, `rgba(120, 0, 220, ${op * 0.9})`);
        }
        hg.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(m.x, m.y, isDark ? 1.5 : 3, 0, Math.PI * 2);
        ctx.fillStyle = hg;
        ctx.fill();

        return m.life < m.maxLife;
      });

      // Draw particles
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        // Mouse interaction
        const dx = p.x - mx;
        const dy = p.y - (my + window.scrollY);
        const dist = Math.sqrt(dx * dx + dy * dy);
        const mouseRadius = 150;

        if (dist < mouseRadius && dist > 0) {
          const force = (mouseRadius - dist) / mouseRadius * 0.8;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        // Damping
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.x += p.vx;
        p.y += p.vy;

        // Wrap
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        // Draw
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.opacity})`;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);
          if (cdist < 120) {
            const lineOp = (1 - cdist / 120) * (isDark ? 0.12 : 0.08);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isDark
              ? `rgba(152, 16, 250, ${lineOp})`
              : `rgba(120, 0, 220, ${lineOp})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Subtle nebula glow around mouse
      if (mx > 0 && my > 0) {
        const glow = ctx.createRadialGradient(mx, my, 0, mx, my, 200);
        if (isDark) {
          glow.addColorStop(0, 'rgba(152, 16, 250, 0.03)');
          glow.addColorStop(0.5, 'rgba(0, 184, 219, 0.02)');
        } else {
          glow.addColorStop(0, 'rgba(152, 16, 250, 0.04)');
          glow.addColorStop(0.5, 'rgba(0, 184, 219, 0.03)');
        }
        glow.addColorStop(1, 'transparent');
        ctx.fillStyle = glow;
        ctx.fillRect(mx - 200, my - 200, 400, 400);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, [createParticles, spawnMeteor, isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: isDark ? 0.7 : 0.55 }}
    />
  );
}