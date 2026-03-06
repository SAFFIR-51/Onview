import { motion } from 'motion/react';
import { Phone, ArrowUp, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function FloatingUI() {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Side Buttons */}
      <div className="fixed right-5 bottom-10 z-40 flex flex-col gap-3">
        <motion.button 
          onClick={() => navigate('/contact')}
          whileHover={{ scale: 1.05, x: -5 }}
          className="bg-[#176B36] text-white p-3 md:px-6 md:py-3 rounded-full shadow-lg font-bold flex items-center justify-center gap-2 hover:bg-[#125229] transition-colors"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="hidden md:inline">상담 신청</span>
        </motion.button>

        <motion.a
          href="tel:010-7661-5729"
          whileHover={{ scale: 1.05, x: -5 }}
          className="bg-white border border-[#176B36] text-[#176B36] p-3 md:px-6 md:py-3 rounded-full shadow-lg font-bold flex items-center justify-center gap-2 hover:bg-[#176B36] hover:text-white transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="hidden md:inline">유선 상담</span>
        </motion.a>
        
        <motion.button 
          onClick={scrollToTop}
          whileHover={{ scale: 1.05, x: -5 }}
          className="bg-white border border-gray-200 text-gray-600 p-3 md:px-6 md:py-3 rounded-full shadow-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
        >
          <ArrowUp className="w-5 h-5" />
          <span className="hidden md:inline">TOP</span>
        </motion.button>
      </div>
    </>
  );
}
