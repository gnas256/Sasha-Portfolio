import { motion } from 'motion/react';

export function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#0a0a1f] via-[#1a0a2e] to-[#0f0f23]">
      <div className="relative">
        {/* Spinning gradient ring */}
        <motion.div
          className="w-20 h-20 rounded-full border-4 border-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600"
          style={{
            backgroundClip: 'padding-box',
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        
        {/* Center logo or icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </div>
      
      {/* Loading text */}
      <motion.p
        className="absolute mt-32 text-white/70 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Loading...
      </motion.p>
    </div>
  );
}
