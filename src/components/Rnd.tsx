import { motion } from 'motion/react';
import { ArrowRight, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Rnd() {
  return (
    <section id="rnd" className="relative py-40 px-4 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          className="w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Lab background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-6 text-[#4ade80] font-bold tracking-wider uppercase">
            <Microscope className="w-6 h-6" />
            <span>R&D Center</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-[1.1] tracking-tight">
            여러 브랜드의 개발을<br/>
            <span className="text-[#4ade80]">함께해온 오엔뷰</span>
          </h2>
          <p className="text-xl md:text-2xl font-light text-[#4ade80] mb-8">
            각 브랜드에 맞는 제형과 성분을 설계합니다.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-12 max-w-xl">
            제품의 경쟁력은 연구에서 완성됩니다.<br/>
            트렌드를 반영한 제형 개발과 브랜드에 맞춘 성분 설계를 통해<br/>
            차별화된 제품을 구현합니다.
          </p>
          
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#176B36' }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#176B36] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 shadow-lg hover:shadow-[#176B36]/50 transition-all border border-[#176B36]"
            >
              무료 상담 신청하기 <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>

        {/* Floating Cards Effect */}
        <div className="hidden lg:flex flex-col gap-6">
          {[
            { title: "다양한 처방 보유", desc: "기능성·더마 중심 레시피 확보" },
            { title: "브랜드 맞춤 제품 설계", desc: "콘셉트에 맞춘 제형 개발" },
            { title: "다수 브랜드 협업 경험", desc: "샘플부터 본 생산까지 대응" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 w-80 hover:bg-white/20 transition-colors"
            >
              <h3 className="text-xl font-bold text-[#4ade80] mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
