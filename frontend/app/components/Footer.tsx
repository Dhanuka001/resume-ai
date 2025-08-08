'use client';

import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0b0b0b] text-gray-300 border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & Social */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-md bg-gradient-to-r from-orange-500 to-yellow-400 flex items-center justify-center">
              <span className="text-black font-bold text-lg">⚡</span>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              ResumeAI
            </span>
          </div>
          <p className="text-sm mb-4">
            Transform your resume with AI-powered analysis and land your dream job faster.
          </p>
          <div className="flex gap-3">
            <a href="#" className="p-2 rounded-full bg-[#1a1a1a] hover:bg-white/10 transition">
              <Facebook size={16} />
            </a>
            <a href="#" className="p-2 rounded-full bg-[#1a1a1a] hover:bg-white/10 transition">
              <Twitter size={16} />
            </a>
            <a href="#" className="p-2 rounded-full bg-[#1a1a1a] hover:bg-white/10 transition">
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h4 className="font-semibold text-white mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Features</a></li>
            <li><a href="#" className="hover:text-white transition">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition">API</a></li>
            <li><a href="#" className="hover:text-white transition">Integrations</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">Press</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Mail size={16}/> hello@resumeai.com</li>
            <li className="flex items-center gap-2"><Phone size={16}/> 0771234567</li>
            <li className="flex items-center gap-2"><MapPin size={16}/> Colombo ,SL</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1a1a1a] py-4 px-6 text-sm flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
        <p>© 2025 ResumeAI. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <a href="#" className="hover:text-white transition">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
