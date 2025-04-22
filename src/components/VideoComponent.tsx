"use client"; // Add this directive for client-side animations

import Image from 'next/image';
import { motion } from 'framer-motion'; // Import motion

const VideoComponent = () => {
  // Animation variants for the video frame
  const frameVariants = {
    hidden: { opacity: 0, scale: 0.95 }, // Start slightly smaller and faded out
    visible: {
      opacity: 1,
      scale: 1, // Animate to full size and opacity
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Frame Container - Convert to motion.div and apply variants */}
        <motion.div
          className="relative w-full h-[600px] rounded-2xl overflow-hidden border-8 border-white/10 shadow-2xl"
          variants={frameVariants}
          initial="hidden"
          whileInView="visible" // Trigger animation when in view
          viewport={{ once: true, amount: 0.3 }} // Trigger once, when 30% is visible
        >
          <Image
            src="https://i.ibb.co/Ng8B4RBG/rooftop.jpg"
            alt="Worship gathering"
            fill
            className="object-cover"
            priority
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* You could also animate the button if desired */}
            <button
              className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center
                         hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
              aria-label="Play video"
            >
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoComponent;