
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'none';
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 700,
  threshold = 0.1,
  once = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!once || !hasAnimated.current)) {
            hasAnimated.current = true;
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
          } else if (!entry.isIntersecting && !once && hasAnimated.current) {
            element.style.opacity = '0';
            element.style.transform = direction === 'up' 
              ? 'translateY(20px)' 
              : direction === 'down' 
                ? 'translateY(-20px)' 
                : 'translateY(0)';
            hasAnimated.current = false;
          }
        });
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [direction, once, threshold]);

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: 0,
        transform: direction === 'up' 
          ? 'translateY(20px)' 
          : direction === 'down' 
            ? 'translateY(-20px)' 
            : 'translateY(0)',
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
