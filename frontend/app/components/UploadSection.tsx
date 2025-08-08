'use client';

import { Upload, FileText } from "lucide-react";

const UploadSection = () => {
  return (
    <section id="upload" className="py-20 px-6 sm:px-12 text-center text-white bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
        Ready to <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">Analyze</span> Your Resume?
      </h2>
      <p className="text-gray-300 max-w-xl mx-auto mb-10">
        Upload your resume in PDF, DOC, or DOCX format and get instant AI-powered analysis
      </p>

      {/* Upload Box */}
      <div className="border border-dashed border-orange-500 rounded-lg p-8 max-w-2xl mx-auto mb-6">
        <Upload size={36} className="mx-auto mb-4 text-orange-500" />
        <p className="font-semibold text-lg mb-2">Drop your resume here or click to browse</p>
        <p className="text-sm text-gray-400 mb-4">Supports PDF, DOC, and DOCX files up to 10MB</p>
        <button className="bg-gradient-to-r from-orange-500 to-yellow-400 text-black px-5 py-2 rounded-md font-medium hover:opacity-90 transition">
          Choose File
        </button>
      </div>

      {/* Supported Formats */}
      <div className="flex justify-center items-center gap-4 text-sm text-gray-400">
        <div className="flex items-center gap-1">
          <FileText size={16} className="text-orange-500" /> PDF
        </div>
        <div className="flex items-center gap-1">
          <FileText size={16} className="text-orange-500" /> DOC
        </div>
        <div className="flex items-center gap-1">
          <FileText size={16} className="text-orange-500" /> DOCX
        </div>
      </div>
    </section>
  );
};

export default UploadSection;
