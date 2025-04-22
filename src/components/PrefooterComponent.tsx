"use client"; // Add this directive for client-side animations

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Import motion

const PrefooterComponent = () => {
  // Animation variants for the content container (staggering children)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  // Animation variants for individual content items (slide up and fade in)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-[500px] w-full flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.ibb.co/XxFpbkkY/worship.jpg" // Add your dark congregation image
          alt="Congregation"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Content - Wrap with motion.div and apply container variants */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Trigger animation when in view
        viewport={{ once: true, amount: 0.3 }} // Trigger once, when 30% is visible
      >
        {/* Apply item variants to children */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-6"
          variants={itemVariants}
        >
          Invest in your future today
        </motion.h2>

        <motion.p
          className="text-white/90 text-lg mb-8 leading-relaxed"
          variants={itemVariants}
        >
          Join us at Bible College and embark on a transformative journey to deepen your
          faith, ignite your passion for ministry, and become a leader who makes a lasting
          impact on the world
        </motion.p>

        <motion.div variants={itemVariants}> {/* Wrap Link for animation */}
          <Link
            href="/apply"
            className="inline-block px-8 py-3 text-white border-2 border-white rounded-full
                       hover:bg-white hover:text-black transition-colors duration-300"
          >
            Apply Now
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PrefooterComponent;