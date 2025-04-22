"use client"; // Add this directive for client-side animations

import Link from 'next/link';
import { motion } from 'framer-motion'; // Import motion

const PresentationComponent = () => {
  // Animation variants for staggered fade-in effect on scroll
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger the animation of children
        delayChildren: 0.2, // Small delay before children start animating
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // Start slightly lower and faded out
    visible: {
      opacity: 1,
      y: 0, // Animate to original position and full opacity
      transition: {
        duration: 0.7,
        // ease: [0.6, 0.01, -0.05, 0.95], // This was invalid
        ease: "easeOut", // Use a valid ease function string
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center animated-gradient py-20 px-4 overflow-hidden">
      {/* Wrap the content container with motion.div */}
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Trigger animation when in view
        viewport={{ once: true, amount: 0.3 }} // Trigger once, when 30% is visible
      >
        {/* Apply item variants to each child */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-6"
          variants={itemVariants}
        >
          START YOUR JOURNEY OF<br />
          FAITH AT BIBLE COLLEGE!
        </motion.h2>

        <motion.p
          className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Discover the power of faith-based learning with Bible College. Our unique approach to Bible
          study combines the best of traditional scholarship with the latest technologies. Uncover the
          spiritual truths of Scripture with our interactive curriculum - from lectures and textbooks to
          online quizzes and discussion forums - and gain a deeper understanding of God&apos;s Word. {/* Changed God's to God&apos;s */}
          Whether you&apos;re a beginner or experienced student, Bible College will help you develop your {/* Changed you're to you&apos;re */}
          faith and enrich your life. Take your faith to the next level and join us today!
        </motion.p>

        <motion.div variants={itemVariants}> {/* Wrap Link for animation */}
          <Link
            href="/apply"
            className="inline-block px-8 py-3 text-white border-2 border-white rounded-full
                       hover:bg-white hover:text-[#3D4127] transition-colors duration-300"
          >
            Apply Now
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PresentationComponent;