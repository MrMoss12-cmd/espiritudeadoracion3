"use client"; // Add this directive at the top

import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  // Animation variants for staggered fade-in effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger the animation of children
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Start slightly lower and faded out
    visible: {
      opacity: 1,
      y: 0, // Animate to original position and full opacity
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://i.ibb.co/hxbrPk89/church.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content - Wrap with motion.div and apply container variants */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible" // Trigger animation on mount
      >
        {/* Apply item variants to each child */}
        <motion.h1
          className="text-6xl font-bold mb-4 tracking-tight"
          variants={itemVariants}
        >
          FIND YOUR FUTURE
        </motion.h1>
        <motion.p
          className="text-xl mb-8"
          variants={itemVariants}
        >
          Not just learning, but experiencing
        </motion.p>
        <motion.div variants={itemVariants}> {/* Wrap Link for animation */}
          <Link
            href="/apply"
            className="bg-red-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-red-700 transition-colors"
          >
            Ver en Vivo
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;