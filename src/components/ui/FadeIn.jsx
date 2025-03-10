'use client';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeIn = ({ children, delay = 0.2, className = '' }) => {
    const { ref, inView } = useInView({
      triggerOnce: true, // Trigger animation once when the component comes into view
      threshold: 0.1,    // 10% of the element must be in view before animation triggers
    });
  
    return (
      <motion.div
        ref={ref}
        className={className} // Apply the passed className prop here
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1, delay }}
      >
        {children}
      </motion.div>
    );
  };
  
  export default FadeIn;
