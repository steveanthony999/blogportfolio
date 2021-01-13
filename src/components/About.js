import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { ease: 'easeInOut' },
  },
};

const About = () => {
  return (
    <motion.div variants={containerVariants} initial='hidden' animate='visible' exit='exit'>
      <Navbar textColor='#000' />
      About
      <Footer />
    </motion.div>
  );
};

export default About;
