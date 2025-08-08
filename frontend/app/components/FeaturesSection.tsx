'use client';

import { motion } from 'framer-motion';
import { Brain, Target, Zap, Shield, BarChart3, BadgeCheck } from 'lucide-react';

const headingGradient = 'bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent';

const features = [
  {
    title: 'AI-Powered Analysis',
    desc: 'Advanced machine learning algorithms analyze every aspect of your resume with precision and accuracy.',
    Icon: Brain,
  },
  {
    title: 'Job Match Scoring',
    desc: 'Get compatibility scores for specific job descriptions and industry requirements.',
    Icon: Target,
  },
  {
    title: 'Instant Results',
    desc: 'Receive comprehensive analysis and actionable feedback in under 30 seconds.',
    Icon: Zap,
  },
  {
    title: 'Privacy Protected',
    desc: 'Your resume data is encrypted and never stored permanently on our servers.',
    Icon: Shield,
  },
  {
    title: 'Detailed Insights',
    desc: 'Get breakdown of skills, experience, formatting, and improvement opportunities.',
    Icon: BarChart3,
  },
  {
    title: 'Industry Standards',
    desc: 'Analysis based on current hiring trends and industry‑specific requirements.',
    Icon: BadgeCheck,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-6 sm:px-12 text-white bg-gradient-to-b from-[#0b0b0b] to-[#141414]">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3">
          Powerful <span className={headingGradient}>AI Features</span>
        </h2>
        <p className="text-gray-300">
          Our comprehensive suite of AI tools provides deep insights into your resume,
          helping you stand out in today\'s competitive job market.
        </p>
      </div>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-6xl mx-auto"
      >
        {features.map(({ title, desc, Icon }, i) => (
          <motion.div
            key={title}
            variants={item}
            whileHover={{ y: -6, boxShadow: '0 10px 30px rgba(0,0,0,0.25)' }}
            className="rounded-2xl bg-[#121212] border border-[#242424] p-6 md:p-7 h-full"
          >
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400">
              <Icon className="text-black" size={22} />
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturesSection;