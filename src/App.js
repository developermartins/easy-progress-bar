import './App.css';
import Text from './Text';

import { motion, useScroll, useSpring } from 'framer-motion';

function App() {

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section className="container">
      <motion.div 
        className='progress-bar'
        style={{ scaleX }}
      />
      <Text />
    </section>
  );
}

export default App;
