import { motion, AnimatePresence } from 'motion/react';
import { Phone, ArrowUp, MessageSquare, MessageCircle, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function FloatingUI() {
  const navigate = useNavigate();
  const [showPhoneMenu, setShowPhoneMenu] = useState(false);
  const [showKakaoMenu, setShowKakaoMenu] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Phone Number Selection Overlay */}
      <AnimatePresence>
        {showPhoneMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
            onClick={() => setShowPhoneMenu(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 mx-4 max-w-sm w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">유선 상담</h3>
                <button onClick={() => setShowPhoneMenu(false)} className="text-gray-400 hover:text-gray-600">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-gray-500 text-sm mb-6">연락하실 번호를 선택해주세요.</p>
              <div className="space-y-3">
                <a
                  href="tel:010-7661-5729"
                  className="flex items-center gap-3 w-full p-4 rounded-xl border border-gray-200 hover:border-[#176B36] hover:bg-[#176B36]/5 transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#176B36]" />
                  <div>
                    <span className="font-bold text-gray-900 block">화장품 제조</span>
                    <span className="text-sm text-gray-500">010-7661-5729</span>
                  </div>
                </a>
                <a
                  href="tel:010-9699-7744"
                  className="flex items-center gap-3 w-full p-4 rounded-xl border border-gray-200 hover:border-[#176B36] hover:bg-[#176B36]/5 transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#176B36]" />
                  <div>
                    <span className="font-bold text-gray-900 block">화장품 창업</span>
                    <span className="text-sm text-gray-500">010-9699-7744</span>
                  </div>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Kakao Chat Selection Overlay */}
      <AnimatePresence>
        {showKakaoMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
            onClick={() => setShowKakaoMenu(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 mx-4 max-w-sm w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">카카오 상담</h3>
                <button onClick={() => setShowKakaoMenu(false)} className="text-gray-400 hover:text-gray-600">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-gray-500 text-sm mb-6">상담 채널을 선택해주세요.</p>
              <div className="space-y-3">
                <a
                  href="https://open.kakao.com/o/scLWXdli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full p-4 rounded-xl border border-gray-200 hover:border-[#FEE500] hover:bg-[#FEE500]/10 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-[#3C1E1E]" />
                  <span className="font-bold text-gray-900">화장품 제조 상담</span>
                </a>
                <a
                  href="https://open.kakao.com/o/sQNHfeli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full p-4 rounded-xl border border-gray-200 hover:border-[#FEE500] hover:bg-[#FEE500]/10 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-[#3C1E1E]" />
                  <span className="font-bold text-gray-900">화장품 창업 상담</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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

        <motion.button
          onClick={() => setShowPhoneMenu(true)}
          whileHover={{ scale: 1.05, x: -5 }}
          className="bg-white border border-[#176B36] text-[#176B36] p-3 md:px-6 md:py-3 rounded-full shadow-lg font-bold flex items-center justify-center gap-2 hover:bg-[#176B36] hover:text-white transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="hidden md:inline">유선 상담</span>
        </motion.button>

        <motion.button
          onClick={() => setShowKakaoMenu(true)}
          whileHover={{ scale: 1.05, x: -5 }}
          className="bg-[#FEE500] border border-[#FEE500] text-[#3C1E1E] p-3 md:px-6 md:py-3 rounded-full shadow-lg font-bold flex items-center justify-center gap-2 hover:bg-[#FDD835] transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden md:inline">카카오 상담</span>
        </motion.button>

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
