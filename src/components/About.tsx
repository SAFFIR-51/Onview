import { motion } from 'motion/react';
import { Stethoscope, FlaskConical, Settings, MessageSquare } from 'lucide-react';

export default function About() {
  const capabilities = [
    { icon: Stethoscope, title: "피부과 화장품 전문", desc: "기능성 더마 제품\n설계 및 개발" },
    { icon: FlaskConical, title: "소량 샘플 제조", desc: "빠른 시장 테스트용\n샘플 대응 가능" },
    { icon: Settings, title: "OEM / ODM", desc: "브랜드 방향성에 맞춘\n전방위 제품 기획" },
    { icon: MessageSquare, title: "맞춤형 컨설팅", desc: "패키지 디자인부터\n유통 전략까지 지원" },
  ];

  return (
    <section id="about" className="pt-32 pb-0 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between border-b border-gray-100 pb-16 mb-24 gap-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm font-bold tracking-[0.2em] uppercase shrink-0 pt-2"
          >
            About Onview
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:w-3/4 text-xl md:text-3xl font-medium leading-relaxed text-gray-900"
          >
            <p className="mb-8">
              <span className="text-[#176B36] font-bold">당신의 아이디어를 제품으로 완성합니다.</span><br />
              브랜드의 시작부터 유통까지, <br className="md:hidden" />오엔뷰가 함께합니다.
            </p>
            <p className="text-gray-500 font-normal text-lg md:text-xl">
              오엔뷰는 화장품 제조 분야에서 다양한 고객의 니즈를 반영해<br className="hidden md:block" />
              기획부터 소량 생산 제작, 대량 생산, 디자인, 유통까지 원스톱으로 제공하는<br />
              <strong className="text-gray-900 font-bold mt-2 inline-block border-b-2 border-[#176B36]">전문 OEM·ODM 화장품 제조사</strong>입니다.
            </p>
          </motion.div>
        </div>

        {/* 4 Capabilities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {capabilities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-gray-50 p-4 md:p-8 rounded-3xl text-center border border-gray-100 hover:border-[#176B36]/30 hover:shadow-lg transition-all group"
            >
              <div className="bg-white w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-5 shadow-sm group-hover:bg-[#176B36] transition-colors duration-300">
                <item.icon className="w-6 h-6 md:w-8 md:h-8 text-[#176B36] group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-lg">{item.title}</h4>
              <p className="text-gray-500 text-xs md:text-sm whitespace-pre-line leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* 1) 생산 구조 연결 섹션 - 수정3.png 배경 */}
      <div className="relative py-36 xl:py-48 2xl:py-56 overflow-hidden">
        <picture>
          <source media="(max-width: 768px)" srcSet="/images/about-production-mobile.png" />
          <img
            src="/images/about-production.png"
            alt="생산 구조"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent md:hidden" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-6 max-w-7xl"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 text-gray-900 leading-tight">
            브랜드의 아이디어를<br />
            생산 구조로 <span className="text-blue-600">연결</span>합니다.
          </h3>
          <p className="text-base md:text-lg text-gray-900 leading-relaxed">
            오엔뷰는 제품 기획 단계에서부터<br />
            개발, 제조, 패키징까지 이어지는<br />
            생산 흐름을 함께 설계합니다.<br />
            브랜드가 안정적으로 제품을 출시할 수 있도록<br />
            연결된 제조 기반을 제공합니다
          </p>
        </motion.div>
      </div>

      {/* 2) 월 생산량 섹션 - 수정5.png 배경, 우측 정렬 */}
      <div className="relative py-36 xl:py-48 2xl:py-56 overflow-hidden">
        <picture>
          <source media="(max-width: 768px)" srcSet="/images/about-capacity-mobile.png" />
          <img
            src="/images/about-capacity.png"
            alt="생산 시설"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </picture>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-6 max-w-7xl text-right"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4">
            <span className="text-white">월 생산량 </span>
            <span className="text-[#4ade80]">200만개</span>
          </h3>
          <p className="text-2xl md:text-3xl lg:text-4xl text-white font-black mb-6">
            브랜드 성장을 뒷받침하는 생산 경쟁력
          </p>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            개발 속도, 생산 안정성, 후공정 대응력을 함께 갖춘<br />
            통합 운영 구조로 브랜드의 실행력을 높입니다
          </p>
        </motion.div>
      </div>

      {/* 3) 협업 인프라 섹션 - 수정4.png 배경 */}
      <div className="relative py-36 xl:py-48 2xl:py-56 overflow-hidden">
        <picture>
          <source media="(max-width: 768px)" srcSet="/images/about-collab-mobile.png" />
          <img
            src="/images/about-collab.png"
            alt="협업 인프라"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent md:hidden" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-6 max-w-7xl"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 text-gray-900 leading-tight">
            브랜드와 생산을 잇는<br />
            유연한 <span className="text-[#176B36]">협업 인프라</span>
          </h3>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            오엔뷰는 다양한 생산 환경과 협업 구조를 바탕으로<br />
            브랜드에 필요한 실행 기반을 폭넓게 연결합니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
