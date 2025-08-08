'use client';

import { UploadCloud, FileSearch, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const gradientTextClass =
  "bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen relative bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white py-36 px-6 sm:px-12 text-center overflow-hidden">
      {/* Gradient Moon Background */}
      <div className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-orange-500 to-yellow-300 opacity-10 blur-3xl z-0" />

      {/* Tagline Badge */}
      <div className="mb-8 inline-flex items-center gap-3 bg-gray-900 text-sm text-gray-300 px-4 py-1 rounded-full border border-gray-700 relative z-10">
         <Sparkles className="text-sm text-yellow-500"/>  Powered by Advanced AI Technology
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6 relative z-10">
        Analyze Your Resume <br />
        with <motion.span
          className="bg-clip-text text-transparent"
          animate={{
            backgroundImage: [
              "linear-gradient(to right, #f97316, #facc15)",
              "linear-gradient(to right, #facc15, #f97316)"
            ]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}
        >
          AI Precision
        </motion.span>
      </h1>

      {/* Subheading */}
      <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 relative z-10">
        Get instant, comprehensive feedback on your resume with our cutting-edge AI analyzer.
        Boost your chances of landing your dream job with actionable insights and recommendations.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 px-20 relative z-10">
        {/* Upload Resume Button */}
        <button
        onClick={() => {
          document.getElementById('upload')?.scrollIntoView({behavior:'smooth'});
        }}
          className="bg-gradient-to-r from-orange-400 to-yellow-300 text-black px-6 py-3 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
          <UploadCloud size={20} /> Upload Resume Now
        </button>

        {/* View Sample Button */}
        <button
          onClick={() => {
            document.getElementById('how-it-works')?.scrollIntoView({behavior:'smooth'})
          }}
          className="border border-gray-500 text-white px-6 py-3 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-white hover:text-black hover:border-white hover:scale-105"
        >
          <FileSearch size={20} /> View Sample Analysis
        </button>
      </div>


      {/* Stats */}
      <div className="flex justify-center gap-4 sm:gap-30 text-center text-white relative z-10">
        <div>
          <p className={`text-4xl font-bold ${gradientTextClass}`}>50K+</p>
          <p className="text-sm text-gray-300 font-semibold">Resumes Analyzed</p>
        </div>
        <div>
          <p className={`text-4xl font-bold ${gradientTextClass}`}>95%</p>
          <p className="text-sm text-gray-300 font-semibold">Accuracy Rate</p>
        </div>
        <div>
          <p className={`text-4xl font-bold ${gradientTextClass}`}>30%</p>
          <p className="text-sm text-gray-300 font-semibold">Higher Interview Rate</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
