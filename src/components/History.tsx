import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const historyData = [
  {
    year: "2020",
    desc: [
      "클린케어 소독티슈 제품 개발 및 제조",
      "파우더 비타 콜라겐 앰플 제품 개발",
      "알로페론 성분 함유된 치약 개발",
      "클린케어플러스 손소독제 개발 및 제조"
    ]
  },
  {
    year: "2023",
    desc: [
      "면역 펩타이드를 이용한 순하고 착한",
      "자연유래 성분 어린이용 핸드워시 개발"
    ]
  }
];

export default function History() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % historyData.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + historyData.length) % historyData.length);
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section>
      {/* Timeline Slider Section */}
      <div className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
            <div className="relative min-h-[250px] flex items-center justify-center">
                {/* Navigation Buttons */}
                <button 
                    onClick={prevSlide}
                    className="absolute left-0 z-20 p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors hidden md:block"
                >
                    <ChevronLeft className="w-8 h-8" />
                </button>
                
                <button 
                    onClick={nextSlide}
                    className="absolute right-0 z-20 p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors hidden md:block"
                >
                    <ChevronRight className="w-8 h-8" />
                </button>

                <div className="w-full max-w-3xl mx-auto overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
                        >
                            {/* Year Circle */}
                            <div className="shrink-0">
                                <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-[#176B36] text-white flex items-center justify-center text-3xl md:text-4xl font-bold shadow-lg">
                                    {historyData[currentIndex].year}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="text-center md:text-left">
                                <ul className="space-y-4">
                                    {historyData[currentIndex].desc.map((item, i) => (
                                        <li key={i} className="text-xl text-gray-700 leading-relaxed font-medium">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-8">
                {historyData.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-3 h-3 rounded-full transition-all ${
                            idx === currentIndex ? 'bg-[#176B36] w-8' : 'bg-gray-300'
                        }`}
                    />
                ))}
            </div>
        </div>
      </div>

      {/* Image Banner */}
      <div className="relative h-[500px] overflow-hidden">
        <img
          src="/images/사진4.png"
          alt="Partnership"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-end container mx-auto px-4 max-w-6xl text-right text-white">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-light mb-4">제조를 넘어,</h2>
            <h2 className="text-4xl md:text-6xl font-bold">브랜드의 성장을 함께합니다.</h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
