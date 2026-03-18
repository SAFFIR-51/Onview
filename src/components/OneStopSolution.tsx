import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function OneStopSolution() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-[1.1] tracking-tight">
                기획부터 유통까지<br/>
                <span className="text-[#176B36]">ONE-LINE 시스템</span>
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                오엔뷰는 단순한 제품 생산을 넘어서<br/>
                복잡한 과정을 단순하게 만드는 시스템으로<br/>
                <span className="font-bold text-gray-900 border-b-2 border-[#176B36]">브랜드의 시작부터 유통까지</span> 전 과정을 통합 관리합니다.<br/>
                제품, 홍보, 용기, 디자인, 수출까지 전부 도와드립니다.
              </p>

              <div className="mb-8">
                <h3 className="text-sm font-bold mb-6 text-gray-400 uppercase tracking-widest">One Stop Solution Process</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["브랜딩", "마케팅", "정부 지원 사업", "제조", "기획", "유통", "연구 개발", "생산"].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.05, backgroundColor: '#176B36', color: '#ffffff' }}
                      className="bg-gray-50 p-4 rounded-xl text-center font-bold text-gray-600 border border-gray-100 shadow-sm transition-all cursor-default flex items-center justify-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 opacity-50" />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <img
                src="/images/onestop.png"
                alt="Meeting"
                className="w-full rounded-[2.5rem] shadow-2xl"
              />
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#176B36]/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#4ade80]/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>

        {/* Closing Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center max-w-3xl mx-auto"
        >
          <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed mb-6">
            <span className="text-[#176B36]">오엔뷰</span>는 브랜드의 성장 흐름에 맞춰<br/>
            함께 움직이는 <span className="text-[#176B36]">제조 파트너</span>입니다.
          </p>
          <p className="text-lg text-gray-500 leading-relaxed">
            초기 기획부터 R&D, 생산, 확장까지<br/>
            단계별 실행을 지원합니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
