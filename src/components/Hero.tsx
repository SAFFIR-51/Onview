import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const banners = [
  {
    id: 1,
    subtitle: "MANUFACTURING FIRST",
    title: "화장품의 시작은\n제조입니다.",
    desc: "오엔뷰는 기획부터 개발, 생산, 유통까지\n브랜드의 기반을 설계합니다.",
    image: "/images/hero-1.png",
    theme: "dark"
  },
  {
    id: 2,
    subtitle: "COLLABORATIVE PRODUCTION NETWORK",
    title: "다양한 프로젝트와\n연결된 협력 생산",
    desc: "ONVIEW는 협력 생산 파트너와 연계되어\n다양한 제조 및 후공정 프로젝트를 수행하고 있습니다",
    image: "/images/hero-collab.png",
    theme: "dark"
  },
  {
    id: 3,
    subtitle: "IDEA TO PRODUCT",
    title: "오엔뷰는 아이디어를\n제품으로 만듭니다.",
    desc: "기획부터 R&D, 생산, 이퓨어 등 유통 연계까지\n한 번에 진행합니다.",
    image: "/images/hero-2.png",
    theme: "light"
  },
  {
    id: 4,
    subtitle: "GLOBAL STANDARD MANUFACTURING",
    title: "국내를 넘어,\n글로벌 기준으로 만듭니다.",
    desc: "싱가포르·캐나다·일본·미국 등\n글로벌 제조 프로젝트를 수행하고 있습니다.",
    image: "/images/hero-3.png",
    theme: "dark"
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={banners[current].image} 
            alt="Banner" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-10 flex items-center">
        <div className="container mx-auto px-6 max-w-7xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl text-white"
            >
              <div className="inline-block bg-[#176B36] px-4 py-2 rounded-full text-sm font-bold mb-6 tracking-wider uppercase">
                {banners[current].subtitle}
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.3] tracking-tight mb-8 whitespace-pre">
                {banners[current].title}
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed whitespace-pre-line mb-12">
                {banners[current].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-12 left-0 right-0 z-20">
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <div className="flex gap-4">
            {banners.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-1 transition-all duration-300 rounded-full ${
                  current === idx ? 'w-16 bg-[#176B36]' : 'w-8 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
