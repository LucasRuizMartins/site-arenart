
import { useInView } from 'react-intersection-observer';
import './styles.css';

const RevealText = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  return (
    <div ref={ref} className={`reveal ${inView ? 'active' : ''}`}>
      {children}
    </div>
  );
};

export default RevealText;
