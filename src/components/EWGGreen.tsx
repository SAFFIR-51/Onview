import { motion } from 'motion/react';
import { Leaf, Droplets, Sparkles } from 'lucide-react';

export default function EWGGreen() {
  return (
    <section className="relative py-40 bg-[#1a2e1a] text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Forest"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2e1a] via-transparent to-[#1a2e1a]"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-[#4ade80]/10 text-[#4ade80] px-4 py-2 rounded-full text-sm font-bold mb-6 border border-[#4ade80]/20">
            <Leaf className="w-4 h-4" /> Clean Beauty Standard
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            EWG GREEN 등급, 비건<br/>
            <span className="text-[#4ade80]">기준에 맞춰 처방 설계 가능</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto font-light leading-relaxed">
            "EWG 1~2 등급, 비건 성분으로 구성된<br className="md:hidden"/> <strong className="text-white font-bold">저자극 처방 원료 리스트 보유</strong>"
            <br/><br/>
            <span className="text-lg md:text-xl opacity-80">
              오엔뷰는 기능성 및 EWG Green 등급 원료를 사용하여<br/>
              안전하고 신뢰할 수 있는 제품을 만듭니다.<br/>
              EWG GREEN 등급, 비건 제품은 이제 선택이 아닌 필수 요건이 되고 있습니다.
            </span>
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20">
          <h3 className="text-7xl font-serif italic text-[#4ade80] font-bold mr-8 opacity-50">Why?</h3>
          <span className="text-2xl font-bold border-l-4 border-[#4ade80] pl-6 text-left">
            원료 외에도 제조공정 및<br/>
            기업 투명성, 포장재까지 심사를 통과해야 합니다.
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Leaf, title: "엄격한 원료 기준", sub: "EWG Green 등급 중심 원료 관리" },
            { icon: Droplets, title: "비건 처방 설계 가능", sub: "비건 기준에 맞춘 원료 및 처방 설계" },
            { icon: Sparkles, title: "클린 제조 환경", sub: "의약외품 수준의 위생 관리" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-md p-12 rounded-[2.5rem] flex flex-col items-center justify-center border border-white/10 hover:bg-white/10 transition-all group"
            >
              <div className="bg-[#4ade80]/10 p-6 rounded-full mb-8 group-hover:bg-[#4ade80] transition-colors duration-500">
                <item.icon className="w-12 h-12 text-[#4ade80] group-hover:text-[#1a2e1a] transition-colors duration-500" />
              </div>
              <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
              <p className="text-gray-400">{item.sub}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-[#4ade80] font-bold text-xl md:text-2xl tracking-tight"
        >
          EWG GREEN 등급, 비건 제품 이제 (주)오앤뷰에서 만들어보세요!
        </motion.div>
      </div>
    </section>
  );
}
