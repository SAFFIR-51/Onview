import { motion } from 'motion/react';
import { Timer, Rocket, CheckCircle2 } from 'lucide-react';

export default function SpeedToMarket() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-20">
        <div className="lg:w-1/2 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#176B36] font-bold tracking-wider text-sm uppercase mb-4 block flex items-center gap-2">
              <Rocket className="w-4 h-4" /> Speed to Market
            </span>
            <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] text-gray-900 mb-8 tracking-tight">
              트렌드에 맞춰<br />
              <span className="text-[#176B36]">빠르게 출시</span>합니다.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              시장 흐름을 이해하는 능력 역시 중요한 요소입니다.<br/>
              다양한 브랜드와 협업 경험을 통해 축적된 데이터로<br/>
              트렌드 분석과 방향성 제안까지 함께 제공합니다.
            </p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-6 bg-[#176B36] text-white px-8 py-6 rounded-[2rem] shadow-2xl hover:shadow-[#176B36]/30 transition-shadow"
            >
              <Timer className="w-10 h-10 opacity-80" />
              <div className="text-left">
                <span className="text-3xl md:text-5xl font-black tracking-tighter">50일</span>
                <span className="block text-sm text-white/70 mt-1">기획 → 생산 → 출고</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2 w-full"
        >
          <div className="bg-gray-50 p-12 rounded-[3rem] shadow-xl relative overflow-hidden border border-gray-100">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#176B36]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="flex flex-col items-center text-center relative z-10">
              <div className="relative w-72 h-72 mb-10">
                {/* SVG Donut Chart */}
                <svg viewBox="0 0 36 36" className="w-full h-full rotate-[-90deg] drop-shadow-xl">
                  <path
                    className="text-white"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 0.15 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                    className="text-[#176B36]"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-7xl font-black text-[#176B36] tracking-tighter">16</span>
                  <span className="text-xl font-bold text-gray-400 uppercase tracking-widest mt-2">days</span>
                </div>
                
                {/* Floating Badge */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 1.2, type: "spring" }}
                  className="absolute -top-4 -right-4 bg-[#176B36] text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-xs shadow-lg border-4 border-white z-20"
                >
                  FAST!
                </motion.div>
              </div>

              <div className="w-full space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#176B36]"></div>
                    <span className="font-bold text-gray-900">기획/디자인</span>
                  </div>
                  <span className="font-bold text-[#176B36]">2주 소요</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/50 rounded-2xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    <span className="font-medium text-gray-500">생산/출시</span>
                  </div>
                  <span className="font-medium text-gray-400">4주 소요</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
