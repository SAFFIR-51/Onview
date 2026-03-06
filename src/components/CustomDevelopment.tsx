import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CustomDevelopment() {
  return (
    <section className="relative py-48 overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          className="w-full h-full"
        >
          <img 
            src="/images/사진11.png"
            alt="Manufacturing" 
            className="w-full h-full object-cover brightness-[0.3]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="text-[#4ade80] font-bold tracking-widest uppercase mb-6 block text-sm">Custom Solution</span>
          <h2 className="text-4xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
            화장품 창업<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-[#22c55e]">전략적으로 시작하세요.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed font-light">
            초기 부담을 줄이는 생산 전략부터<br/>
            소량 생산부터 대량 생산까지, 스타트업부터 대기업까지<br/>
            고객사의 상황에 최적화된 솔루션을 제안해드립니다.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 bg-[#4ade80] text-black px-8 py-4 rounded-full font-bold text-lg"
              >
                뷰티창업 컨설팅 지원
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-colors"
              >
                브랜딩/마케팅 지원
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
