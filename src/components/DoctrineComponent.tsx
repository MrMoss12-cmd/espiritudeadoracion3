"use client"; // Add this directive for client-side animations

import React from 'react';
import { motion } from 'framer-motion'; // Import motion

const DoctrineComponent = () => {
  // Animation variants for the container to stagger children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // Adjust stagger duration as needed
      },
    },
  };

  // Animation variants for each item (section)
  const itemVariants = {
    hidden: { opacity: 0, x: -50 }, // Start faded out and slightly to the left
    visible: {
      opacity: 1,
      x: 0, // Animate to original position
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen bg-[#1B1B1B] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Wrap the main container with motion.div */}
        <motion.div
          className="space-y-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Trigger when the container is in view
          viewport={{ once: true, amount: 0.2 }} // Trigger once, when 20% is visible
        >
          {/* Disciple Section - Wrap with motion.div */}
          <motion.div
            className="flex flex-col md:flex-row items-center md:items-start gap-8"
            variants={itemVariants} // Apply item animation
          >
            <h2 className="text-4xl md:text-5xl font-bold md:w-1/3">Disciple</h2>
            <p className="md:w-2/3 text-lg leading-relaxed">
              Following Jesus is what we are all about! We want you to experience the joy in following Him and 
              grow in the knowledge of His ways. Through our education tracks and classroom theology 
              teachings, we are confident that you will leave more in love with Jesus and have a deeper 
              understanding of your faith.
            </p>
          </motion.div>

          {/* Develop Section - Wrap with motion.div */}
          <motion.div
            className="flex flex-col md:flex-row items-center md:items-start gap-8"
            variants={itemVariants} // Apply item animation
          >
            <h2 className="text-4xl md:text-5xl font-bold md:w-1/3">Develop</h2>
            <p className="md:w-2/3 text-lg leading-relaxed">
              Being a follower of Jesus in today's culture is challenging. Our heart is to give you space to develop 
              Godly character and practical life skills so that you may excel in ministry and the marketplace 
              while embracing Biblical principles. We hope that when you graduate MTC, you stand out in 
              excellence and are able to exhibit Christ in every context.
            </p>
          </motion.div>

          {/* Discover Section - Wrap with motion.div */}
          <motion.div
            className="flex flex-col md:flex-row items-center md:items-start gap-8"
            variants={itemVariants} // Apply item animation
          >
            <h2 className="text-4xl md:text-5xl font-bold md:w-1/3">Discover</h2>
            <p className="md:w-2/3 text-lg leading-relaxed">
              Knowing who you are and who God made you to become is a profound realization for every follower
              of Jesus. We believe you are uniquely gifted and have specific, God-given talents that you can use
              to make an impact in your world. Through hands-on experience and intentional mentorship, we are
              committed to seeing you identify your calling and the next step to fulfilling it. 
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DoctrineComponent;