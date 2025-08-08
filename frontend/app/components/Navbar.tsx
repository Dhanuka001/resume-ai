'use client';

import { FileUser} from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <FileUser className="w-6 h-6 text-yellow-500 " />
          <span className="font-bold text-xl text-white bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text">ResumeAI</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-lg text-gray-300">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#how-it-works" className="hover:text-white transition">How It Works</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
        </nav>

        {/* Get Started Button */}
        <button className="hidden font-semibold md:block bg-gradient-to-r from-orange-500 to-yellow-400 text-black px-4 py-2 rounded-md text-md hover:opacity-90 transition">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Navbar;