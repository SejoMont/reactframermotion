import { useState } from 'react';
import './App.css';
import { useTransform, useMotionValue, motion } from 'framer-motion';

const variants = {
  par: {
    backgroundColor: "#FF0000",
    color: "#000"
  },
  impar: {
    backgroundColor: "#008000",
    color: "#FFF"
  }
}

function App() {
  const [counter, setCounter] = useState(0);
  const x = useMotionValue(0)

  const backgroundColor = useTransform(x, [-100, 0, 100], ["#FF000","#81C2F5", "#008000"])


  return (
    <div className="App">
      <h1>Framer Motion</h1>
      <h2>Animaciones Sencillas</h2>
      <motion.div className='box'
        initial={{ x: -100, scale: 0.8 }}
        transition={{ duration: 3 }}
        animate={{ x: 100, scale: 0.5, rotate: 180 }}
      >
      </motion.div>
      <h2>Keyframes</h2>
      <motion.div className='box'
        animate={{
          borderRadius: ["20%", "50%", "70%"],
          rotate: [0, 180, 0],
          x: [200, 100, 0]
        }}
      >
      </motion.div>
      <h2>Variants</h2>
      <motion.div className='box'
        variants={variants}
        animate={counter % 2 === 0 ? "par" : "impar"}

      >
        {counter}
      </motion.div>
      <button className='btn btn-outline-info'
        onClick={() => setCounter(counter => counter + 1)}
      >Sumar</button>

      <h2>Drag</h2>
      <motion.div className='box'
        drag
        dragConstraints={{
          top: -50,
          left: 50,
          right: 50,
          bottom: 50
        }}
        dragMomentum= {true}
      >
      </motion.div>

      <h2>UseTransform y useMotionValue</h2>
      <motion.div className='box'
        style={{ backgroundColor, x}}
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0
        }}
      >
      </motion.div>
    </div>
  );
}

export default App;
