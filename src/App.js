import './App.css';
import Text from './Text';

import { motion, useScroll } from 'framer-motion';

function App() {

  const { scrollYProgress } = useScroll();

  return (
    <section className="container">
      <motion.div 
        className='progress-bar'
        style={{ scaleX: scrollYProgress }}
      />
      <Text />
    </section>
  );
}

export default App;
