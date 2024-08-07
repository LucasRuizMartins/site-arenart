import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import './styles.css';

interface RevealTextProps {
  children: ReactNode;
}

const RevealText: React.FC<RevealTextProps> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className={`reveal ${inView ? 'active' : ''}`}>
      {children}
    </div>
  );
};

export default RevealText;
