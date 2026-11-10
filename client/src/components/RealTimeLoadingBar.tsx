import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RealTimeLoadingBarProps {
  isLoading: boolean;
}

export const RealTimeLoadingBar: React.FC<RealTimeLoadingBarProps> = ({ isLoading }) => {
  const [progress, setProgress] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    let timer1: ReturnType<typeof setTimeout>;
    let timer2: ReturnType<typeof setTimeout>;
    let timer3: ReturnType<typeof setTimeout>;

    if (isLoading) {
      setIsVisible(true);
      setProgress(25);

      timer1 = setTimeout(() => {
        setProgress(65);
      }, 250);

      timer2 = setTimeout(() => {
        setProgress(88);
      }, 800);
    } else if (isVisible) {
      // Complete instantly when real async operation finishes
      setProgress(100);

      timer3 = setTimeout(() => {
        setIsVisible(false);
        setProgress(0);
      }, 250);
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [isLoading, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent pointer-events-none overflow-hidden">
      <motion.div
        className="h-full bg-[#C84B31] relative"
        initial={{ width: '0%' }}
        animate={{ width: `${progress}%` }}
        transition={{
          ease: progress === 100 ? 'easeOut' : 'easeInOut',
          duration: progress === 100 ? 0.15 : 0.4,
        }}
        style={{
          boxShadow: '0 0 10px rgba(200, 75, 49, 0.7), 0 0 4px rgba(200, 75, 49, 0.9)',
        }}
      >
        {/* Real-time pulse ping indicator at leading tip */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#FAF9F5] rounded-full blur-[1px] opacity-80" />
      </motion.div>
    </div>
  );
};
