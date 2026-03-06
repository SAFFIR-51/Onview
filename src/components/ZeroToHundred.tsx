import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ZeroToHundred() {
  return (
    <section className="pt-24 pb-32 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-[#176B36] font-bold tracking-wider text-sm uppercase mb-4 block">Full Service</span>
            <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] text-gray-900 mb-8">
              유연하게 시작하고<br />
              <span className="text-[#176B36]">체계적으로 확장</span>합니다
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              브랜드 론칭 과정은 예상보다 복잡합니다.<br/>
              아이디어는 명확해도 실행 단계에서 어려움을 겪는 경우가 많습니다.<br/>
              <strong className="text-gray-900">오엔뷰는 전 과정을 체계적으로 지원</strong>합니다.
            </p>

            <ul className="space-y-4 mb-10">
              {["소량 생산으로 시장 반응 확인 후 확장 가능", "OEM·ODM 맞춤 제조 시스템으로 체계적 관리", "복잡한 인허가 절차부터 트렌디한 제형 제안까지"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg text-gray-700 font-medium">
                  <CheckCircle2 className="w-6 h-6 text-[#176B36]" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="bg-[#176B36] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-[#125229] transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300">
              무료 상담 신청하기 <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden border border-gray-100">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <span className="text-9xl font-black text-[#176B36]">100</span>
              </div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-6xl font-black text-gray-200">0</span>
                  <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="text-6xl font-black text-[#176B36]"
                  >
                    100%
                  </motion.span>
                </div>
                
                {/* Progress Bar Container */}
                <div className="h-6 bg-gray-100 rounded-full overflow-hidden mb-8 shadow-inner">
                  <motion.div 
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="h-full bg-gradient-to-r from-gray-300 via-[#4ade80] to-[#176B36]"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-gray-300 rounded-full mb-2"></div>
                    <span className="text-sm text-gray-500 font-medium">기획</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-[#4ade80] rounded-full mb-2"></div>
                    <span className="text-sm text-gray-500 font-medium">개발</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-[#176B36] rounded-full mb-2"></div>
                    <span className="text-sm text-gray-900 font-bold">완성</span>
                  </div>
                </div>

                <div className="mt-10 p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                  <p className="text-xl font-bold text-gray-800">
                    "저희가 함께 <span className="text-[#176B36]">100까지 채워드립니다.</span>"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
