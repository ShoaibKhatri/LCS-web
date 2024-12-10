import React from "react";
import { motion } from "framer-motion";

const LoadingAnimation: React.FC = () => {
  const bounceTransition = {
    duration: 0.5, // Duration of the bounce
    repeat: Infinity, // Infinite repetition
    repeatType: "reverse" as const, // Correct type for repeatType
    ease: "easeInOut" as const, // Correct type for ease
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex space-x-3">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-5 h-5 rounded-full bg-blue-500"
            animate={{
              y: ["0%", "-100%", "0%"], // Bounce up and down
            }}
            transition={{
              ...bounceTransition,
              delay: index * 0.2, // Delay to stagger the bounce animation
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingAnimation;
