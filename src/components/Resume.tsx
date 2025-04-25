// src/components/Resume.tsx
import React, { useEffect } from 'react';

const Resume: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section id="resume" className="py-20 bg-gray-100 text-center">
      <div>
        <p className="mb-12">Here you can view or download my resume.</p>

        <div className="resume-pdf-container my-4 max-w-4xl mx-auto">
          <iframe
            src="/MyPortfolio/Mark-LaRose-Resume.pdf#view=FitH"
            className="w-full h-[1000px] border-2 border-gray-300 rounded-md"
            title="Mark LaRose Resume"
          />
        </div>

        <div className="resume-download-links">
          <a
            href="/Mark-LaRose-Resume.pdf"
            download="Mark-LaRose-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 block mb-2 mt-12"
          >
            Download Resume as PDF
          </a>
        </div>

        <button
          className="mt-4 p-2 bg-gray-700 text-white rounded hover:bg-gray-500 hover:text-black"
          onClick={onBack}
        >
          Back to Portfolio
        </button>
      </div>
    </section>
  );
};

export default Resume;