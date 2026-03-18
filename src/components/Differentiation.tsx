import { motion } from 'motion/react';
import React from 'react';
import { ClipboardCheck, FlaskConical, Factory, Lightbulb, Package } from 'lucide-react';
import SectionHeader from './SectionHeader';

const Step: React.FC<{ title: string, icon: any, index: number, total: number }> = ({ title, icon: Icon, index, total }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="relative z-10 flex flex-col items-center group"
  >
    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white text-[#176B36] flex flex-col items-center justify-center gap-3 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 group-hover:scale-110 group-hover:border-[#176B36] group-hover:shadow-[0_20px_40px_-10px_rgba(23,107,54,0.3)] transition-all duration-300 relative z-10">
      <Icon className="w-10 h-10 md:w-12 md:h-12 stroke-[1.5]" />
      <span className="font-bold text-lg">{title}</span>
    </div>

    {/* Dot Indicator */}
    <div className="w-4 h-4 bg-gray-200 rounded-full mt-8 group-hover:bg-[#176B36] transition-colors duration-300 ring-4 ring-white"></div>
  </motion.div>
);

export default function Differentiation() {
  const steps = [
    { title: "컨셉 기획", icon: Lightbulb },
    { title: "성분 설계", icon: FlaskConical },
    { title: "샘플 테스트", icon: ClipboardCheck },
    { title: "본생산", icon: Factory },
    { title: "패키징&출고", icon: Package },
  ];

  return (
    <section className="py-32 bg-gray-50 text-center overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionHeader
          label="OEM · ODM Process"
          title={<>소량 생산 & OEM·ODM<br/>맞춤 제조 시스템</>}
          desc={<>오엔뷰는 소량 생산과 OEM·ODM 방식으로<br/>브랜드에 맞는 제조를 지원합니다.</>}
          className="mb-16"
        />

        {/* OEM vs ODM 비교 */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl border border-gray-100 shadow-lg text-left hover:border-[#176B36]/30 transition-all"
          >
            <div className="inline-block bg-[#176B36] text-white px-5 py-2 rounded-full font-bold text-lg mb-6">OEM</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">기존 처방 기반<br/>위탁 생산</h3>
            <p className="text-gray-500 leading-relaxed">
              고객이 보유한 레시피나 기획안을 기반으로 안정적으로 생산합니다. 기존 제품을 빠르게 출시하고 싶은 브랜드에 적합합니다.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl border border-gray-100 shadow-lg text-left hover:border-[#176B36]/30 transition-all"
          >
            <div className="inline-block bg-[#1a1a1a] text-white px-5 py-2 rounded-full font-bold text-lg mb-6">ODM</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">제품 기획부터 개발까지<br/>맞춤 설계</h3>
            <p className="text-gray-500 leading-relaxed">
              제형 설계, 성분 구성, 디자인 기획까지 오엔뷰가 함께합니다. 브랜드 콘셉트에 맞춘 제품 개발이 가능합니다.
            </p>
          </motion.div>
        </div>

        <div className="relative flex flex-wrap justify-center gap-8 md:gap-16 pt-10">
          {/* Connecting Arc */}
          <svg className="absolute top-[9rem] left-0 w-full h-20 hidden md:block pointer-events-none overflow-visible" preserveAspectRatio="none">
            <path
              d="M 100,20 Q 500,100 900,20"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="2"
              strokeDasharray="8 8"
              className="w-full"
            />
          </svg>

          {steps.map((step, index) => (
            <Step
              key={index}
              title={step.title}
              icon={step.icon}
              index={index}
              total={steps.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
