import { motion } from 'motion/react';
import { Factory, Package, Zap, Lightbulb, ClipboardCheck } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function FactoryInfo() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* 상단 타이틀 */}
        <SectionHeader
          label="Manufacturing"
          icon={<Factory className="w-4 h-4" />}
          title={<><span className="text-[#176B36]">생산</span>부터 <span className="text-[#176B36]">물류</span>까지,<br/><span className="text-[#176B36]">통합된 제조시스템</span></>}
          desc={<>오엔뷰는 단계별 제조 공정을 체계적으로 구축하여<br/>브랜드가 안심하고 성장할 수 있는 환경을 제공합니다.</>}
          className="mb-16"
        />

        {/* 중단: 공정 카드 (좌) + 통합 제조 공정 시스템 (우) */}
        <div className="flex flex-col lg:flex-row gap-20 mb-16">
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { icon: Factory, label: "원료개발", sub: "기능성 및 EWG Green 등급 원료 사용" },
                { icon: Lightbulb, label: "연구·개발 (R&D)", sub: "제형 설계 및 트렌드 대응 기술" },
                { icon: ClipboardCheck, label: "품질검사", sub: "CGMP 기반 품질관리 및 안전성 확보" },
                { icon: Package, label: "충진&포장", sub: "위생적 자동화 시스템 보유" },
                { icon: Zap, label: "출고&3PL 물류", sub: "전국 택비 및 창고 시스템 연동" }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-2xl text-center border border-gray-100 hover:border-[#176B36]/30 transition-colors">
                  <item.icon className="w-8 h-8 mx-auto mb-3 text-[#176B36]" />
                  <div className="font-bold text-gray-900 text-sm mb-1">{item.label}</div>
                  <div className="text-xs text-gray-500">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              통합 제조 공정 시스템
              <span className="text-xs bg-[#176B36] text-white px-2 py-1 rounded-full">RUNNING</span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {["원료개발", "연구·개발(R&D)", "품질검사", "충진&포장", "출고&3PL"].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-bold text-gray-600">#{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* 하단: 이미지 (좌) + 이미지 (우) */}
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2 flex flex-col gap-4 h-[31rem]">
            <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl overflow-hidden flex-1 min-h-0">
              <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80" alt="본관 (1동) · 2동" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl overflow-hidden flex-1 min-h-0">
              <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80" alt="3동 · 4동" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
            </motion.div>
          </div>

          <div className="lg:w-1/2 space-y-4">
            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-[2rem] overflow-hidden shadow-2xl relative h-80 group"
            >
              <img src="/images/factory-1.png" alt="Machinery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-sm font-bold text-[#176B36] shadow-lg">
                + ONVIEW
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
               <motion.img whileHover={{ scale: 1.02 }} src="/images/factory-2.png" alt="Machine 1" className="w-full h-40 object-cover rounded-[1.5rem]" />
               <motion.img whileHover={{ scale: 1.02 }} src="/images/factory-3.png" alt="Machine 2" className="w-full h-40 object-cover rounded-[1.5rem]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
