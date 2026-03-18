import { motion } from 'motion/react';
import SectionHeader from './SectionHeader';

const partnerLogos = [
  "네이솜", "노벨리아", "더마솔루션랩", "더버블크루", "덴티스",
  "디어버드", "레시엔", "루미제이", "마렐", "마반트",
  "메종주아르", "비베라", "셀인키", "아베넬", "에쎼레브",
  "영하다", "웨타", "청아다향", "코매료", "코어듀",
  "클리노드", "피유셀", "히녹스",
];

export default function Clients() {
  return (
    <section className="py-32 bg-white text-center overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionHeader
          label="Partner Brands"
          title={<>오엔뷰는 다양한<br/>뷰티 브랜드와 함께합니다</>}
          desc={<>오엔뷰는 다수의 코스메틱 브랜드와 협력 중이며,<br/>실제 시장에서 통하는 제품 기획 노하우를 축적해왔습니다.</>}
          className="mb-8"
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">
            수년간 축적해온 코스메틱 <span className="text-[#176B36]">개발 경험</span>을 바탕으로<br/>
            <span className="text-[#176B36]">오엔뷰는 브랜드의 든든한 제조 파트너</span>가 되어<br/>
            <span className="text-[#176B36] font-black">창업과 성장을 지원</span>합니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-block bg-[#176B36] text-white px-8 py-3 rounded-full font-bold text-lg mb-10">
            오엔뷰 협력 및 창업중인 브랜드
          </div>
        </motion.div>

        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Marquee Container */}
          <div className="flex overflow-hidden gap-8 py-4">
            <motion.div
              className="flex gap-6 shrink-0"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }}
            >
              {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((name, i) => (
                <div key={i} className="w-32 h-32 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 hover:border-[#176B36]/30 hover:bg-white hover:shadow-lg transition-all cursor-pointer shrink-0 p-3">
                  <img src={`/images/전체로고/${name}.png`} alt={name} className="w-full h-full object-contain" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
