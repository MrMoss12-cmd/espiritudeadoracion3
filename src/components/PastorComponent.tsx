"use client"; // Add this directive for client-side animations

import Image from 'next/image';
import { motion } from 'framer-motion'; // Import motion

const PastorComponent = () => {
  // Variants for the left text column container (staggering children)
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  // Variants for individual text items (slide up and fade in)
  const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Variants for the right image column (slide from right and fade in)
  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }; // Ensure this closing brace is present and correct

  return ( // Ensure this parenthesis is present
    <section className=" py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Use motion for the grid container if you want overall entry animation, otherwise apply to columns */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content Column - Apply container variants */}
          <motion.div
            className="space-y-6"
            variants={textContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Apply item variants to children */}
            <motion.h2
              className="text-4xl font-bold text-gray-900"
              variants={textItemVariants}
            >
              Name of the founders
            </motion.h2>

            <motion.p
              className="text-gray-600 leading-relaxed"
              variants={textItemVariants}
            >
              We are thrilled to introduce a program that not only imparts the teachings of 
              God's Word to emerging leaders but also empowers them to harness and 
              express their unique gifts and talents, all while gaining invaluable experience 
              in ministry. It is an honor for us to be a place where these leaders receive 
              training, and we are humbled by the opportunity to contribute to the 
              preparation and commissioning of the next generation of leaders. As we look 
              to the future, we are filled with anticipation and confidence in how God will 
              continue to utilize our Bible College to raise up leaders who will make a 
              profound impact on our communities. We firmly believe that the most 
              remarkable chapters of our journey are yet to unfold!
            </motion.p>

            <motion.div className="pt-4" variants={textItemVariants}>
              <Image
                src="https://i.ibb.co/CKBYVP3B/sign.jpg"
                alt="Founder's signature"
                width={300}
                height={60}
                className="opacity-80 w-[200px] h-auto"
                style={{ maxWidth: '300px' }}
              />
            </motion.div>
          </motion.div>

          {/* Image Column - Apply image variants */}
          <motion.div
            className="relative h-[600px] rounded-3xl overflow-hidden"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="https://i.ibb.co/r2vhFgy3/pastors.jpg" // Add your founder's image
              alt="Founders"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PastorComponent;