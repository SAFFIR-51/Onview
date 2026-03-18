import { motion } from 'motion/react';
import { Plus, PackageCheck, Warehouse } from 'lucide-react';

export default function FlexibleInventory() {
  return (
    <section className="py-32 bg-white text-center overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-medium mb-12 text-gray-900 leading-tight tracking-tight">
            초기 생산 리스크를 줄이는<br/>
            유연한 출고 시스템을 제공합니다.
          </h2>

          <div className="flex flex-col items-center gap-3 mb-12 opacity-20">
            <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
          </div>

          <h3 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-[#176B36]">재고 부담 없이 시작하세요.</span>
          </h3>
        </motion.div>

        <div className="mt-20 relative">
          <div className="inline-block bg-gray-100 px-6 py-2 md:px-8 md:py-3 rounded-full text-sm md:text-xl font-bold text-gray-600 mb-12 shadow-inner">
            Total 10,000개 생산 시
          </div>
          
          {/* Arrow Down */}
          <div className="absolute left-1/2 -translate-x-1/2 top-16 w-px h-12 bg-gray-300"></div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0 relative z-10">
            <motion.div 
              initial={{ scale: 0.9, x: 50 }}
              whileInView={{ scale: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="w-72 h-72 rounded-[3rem] bg-[#176B36] text-white flex flex-col items-center justify-center shadow-2xl z-10 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Warehouse className="w-12 h-12 mb-4 opacity-80" />
              <span className="text-xl md:text-3xl font-light opacity-90 mb-1">5,000개</span>
              <span className="text-3xl md:text-5xl font-black tracking-tight">무료보관</span>
              <div className="mt-4 px-4 py-1 bg-white/20 rounded-full text-sm font-bold backdrop-blur-sm">
                재고 부담 ZERO
              </div>
            </motion.div>

            <div className="px-8 text-gray-300 relative z-0">
              <Plus className="w-12 h-12" />
            </div>

            <motion.div 
              initial={{ scale: 0.9, x: -50 }}
              whileInView={{ scale: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="w-72 h-72 rounded-[3rem] bg-[#1a1a1a] text-white flex flex-col items-center justify-center shadow-2xl z-10 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <PackageCheck className="w-12 h-12 mb-4 opacity-80" />
              <span className="text-xl md:text-3xl font-light opacity-90 mb-1">5,000개</span>
              <span className="text-3xl md:text-5xl font-black tracking-tight">우선출고</span>
              <div className="mt-4 px-4 py-1 bg-white/10 rounded-full text-sm font-bold backdrop-blur-sm">
                필요한 만큼만
              </div>
            </motion.div>
          </div>
          
          {/* Background Decor */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] border border-gray-100 rounded-[50%] -z-0 hidden md:block"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gray-50 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
}
