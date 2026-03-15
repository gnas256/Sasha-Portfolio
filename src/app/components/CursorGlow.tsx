import { useEffect, useState } from 'react';

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const hideGlow = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseleave', hideGlow);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseleave', hideGlow);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 w-96 h-96 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
      style={{
        left: position.x,
        top: position.y,
        background: 'radial-gradient(circle, rgba(0, 135, 193, 0.15) 0%, transparent 70%)',
        opacity: isVisible ? 1 : 0,
      }}
    />
  );
}
