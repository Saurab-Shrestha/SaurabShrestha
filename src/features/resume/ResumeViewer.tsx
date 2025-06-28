import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Download,
  Eye,
  FileText,
} from 'lucide-react';
import resumePDF from '../../assets/Saurab-Shrestha-CV.pdf';

const ResumeViewer = () => {
  const [showPDF, setShowPDF] = useState(false);
  const pdfRef = useRef<HTMLIFrameElement>(null);

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Saurab_Shrestha_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="w-full min-h-screen py-16 px-6 md:px-16 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            My <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Resume</span>
          </h1>
          <motion.p
            className="text-xl md:text-2xl font-semibold text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional experience, skills, and achievements in an interactive format.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.button
            onClick={() => setShowPDF(prev => !prev)}
            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-bold text-lg shadow-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 tracking-wide"
            style={{ letterSpacing: '0.08em' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-expanded={showPDF}
            aria-controls="resume-pdf-viewer"
          >
            {showPDF ? <FileText size={20} /> : <Eye size={20} />}
            {showPDF ? 'View Interactive' : 'View PDF'}
          </motion.button>

          <motion.button
            onClick={downloadPDF}
            className="flex items-center gap-3 px-8 py-4 border-2 border-orange-500 text-orange-600 bg-white rounded-full font-bold text-lg hover:bg-orange-50 transition-all duration-200 tracking-wide"
            style={{ letterSpacing: '0.08em' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            Download PDF
          </motion.button>
        </motion.div>

        <AnimatePresence mode="wait">
          {showPDF && (
            <motion.div
              key="pdf"
              id="resume-pdf-viewer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12 overflow-hidden rounded-3xl shadow-lg bg-white"
            >
              <div className="h-96 md:h-[600px] w-full">
                <iframe
                  ref={pdfRef}
                  src={resumePDF}
                  className="w-full h-full border-0"
                  title="Saurab Shrestha Resume PDF"
                  loading="lazy"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ResumeViewer;
