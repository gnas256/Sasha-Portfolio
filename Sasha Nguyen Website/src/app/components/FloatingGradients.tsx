import { useTheme } from './ThemeContext';
import { motion } from 'motion/react';

interface FloatingGradientsProps {
  variant?: 'purple-cyan' | 'cyan-purple' | 'mixed' | 'warm';
}

export function FloatingGradients({ variant = 'purple-cyan' }: FloatingGradientsProps) {
  const { isDark } = useTheme();

  // Stronger opacity multiplier for light mode
  const opMul = isDark ? 1 : 1.8;

  const configs = {
    'purple-cyan': [
      { color: `rgba(152, 16, 250, ${0.07 * opMul})`, x: '15%', y: '20%', size: 350, duration: 18, delay: 0 },
      { color: `rgba(0, 184, 219, ${0.05 * opMul})`, x: '75%', y: '60%', size: 300, duration: 22, delay: 2 },
      { color: `rgba(194, 122, 255, ${0.04 * opMul})`, x: '50%', y: '80%', size: 250, duration: 20, delay: 4 },
    ],
    'cyan-purple': [
      { color: `rgba(0, 211, 243, ${0.06 * opMul})`, x: '80%', y: '15%', size: 320, duration: 20, delay: 0 },
      { color: `rgba(152, 16, 250, ${0.05 * opMul})`, x: '20%', y: '70%', size: 280, duration: 24, delay: 3 },
      { color: `rgba(0, 184, 219, ${0.04 * opMul})`, x: '60%', y: '40%', size: 260, duration: 18, delay: 1 },
    ],
    'mixed': [
      { color: `rgba(152, 16, 250, ${0.06 * opMul})`, x: '10%', y: '30%', size: 300, duration: 22, delay: 0 },
      { color: `rgba(0, 211, 243, ${0.05 * opMul})`, x: '85%', y: '20%', size: 340, duration: 19, delay: 2 },
      { color: `rgba(194, 122, 255, ${0.04 * opMul})`, x: '40%', y: '75%', size: 270, duration: 25, delay: 4 },
      { color: `rgba(0, 184, 219, ${0.03 * opMul})`, x: '65%', y: '50%', size: 220, duration: 17, delay: 1 },
    ],
    'warm': [
      { color: `rgba(194, 122, 255, ${0.07 * opMul})`, x: '25%', y: '25%', size: 320, duration: 20, delay: 0 },
      { color: `rgba(152, 16, 250, ${0.05 * opMul})`, x: '70%', y: '65%', size: 280, duration: 23, delay: 3 },
      { color: `rgba(100, 60, 255, ${0.04 * opMul})`, x: '50%', y: '45%', size: 240, duration: 18, delay: 1 },
    ],
  };

  const orbs = configs[variant];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: 'blur(60px)',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            x: [0, 40, -30, 20, 0],
            y: [0, -30, 20, -40, 0],
            scale: [1, 1.15, 0.9, 1.1, 1],
            opacity: [0.8, 1, 0.7, 1, 0.8],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  );
}