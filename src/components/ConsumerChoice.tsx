import { motion } from 'motion/react';
import { ShieldCheck, AlertTriangle, Check, X, Factory, Award, Settings, FlaskConical, Users, Rocket } from 'lucide-react';

const reasons = [
  { num: "01", title: "소량생산이 가능한 제조 설비 완비", icon: Factory, desc: "시장 반응을 확인할 수 있는 소량 생산 환경을 지원합니다." },
  { num: "02", title: "최고급 제조 설비", icon: Award, desc: "CGMP 기반 품질관리 및 안전성이 확보된 최고급 설비를 보유하고 있습니다." },
  { num: "03", title: "고객사의 니즈에 맞춘 제조 솔루션 제공", icon: Settings, desc: "브랜드 콘셉트에 맞춘 성분 설계와 맞춤형 제조가 가능합니다." },
  { num: "04", title: "끊임없는 연구와 개발", icon: FlaskConical, desc: "트렌드를 반영한 제형 개발과 지속적인 원료 및 레시피 연구를 진행합니다." },
  { num: "05", title: "다수의 고객사 성공 사례 보유", icon: Users, desc: "다양한 브랜드와 협업 경험을 통해 축적된 데이터와 노하우를 보유하고 있습니다." },
  { num: "06", title: "제조부터(A) ~ 브랜딩, 마케팅(Z)까지 원스톱해결", icon: Rocket, desc: "기획부터 생산·유통까지 전 과정을 통합 관리할 수 있습니다." },
];

export default function ConsumerChoice() {
  return (
    <section className="py-32 bg-white text-center overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* 이유있는 선택 Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
            왜 많은 브랜드가<br/>
            <span className="text-[#176B36]">오엔뷰를 선택할까요?</span>
          </h2>
        </motion.div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-gray-50 p-8 rounded-3xl text-left border border-gray-100 hover:border-[#176B36]/30 hover:shadow-xl transition-all group"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-[#176B36] text-white flex items-center justify-center font-black text-sm shrink-0">
                  {reason.num}
                </div>
                <reason.icon className="w-6 h-6 text-[#176B36] opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-[#176B36] transition-colors leading-snug">
                {reason.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Safety Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            소비자는 무엇을 기준으로<br/>
            <span className="text-gray-400">브랜드를 선택할까요?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            소비자가 브랜드를 선택하는<br className="md:hidden" /> 중요한 기준은 <span className="font-bold text-[#176B36] border-b-2 border-[#176B36]">품질과 안정성</span>입니다.<br/>
            원료 선정부터 제조 관리까지<br className="md:hidden" /> 명확한 기준이 필요합니다.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="flex-1 relative group rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-[#176B36]"
          >
            <div className="absolute top-6 left-6 bg-[#176B36] text-white px-6 py-2 rounded-full text-sm font-bold z-10 flex items-center gap-2 shadow-lg">
              <ShieldCheck className="w-5 h-5" /> 오엔뷰 제조사
            </div>
            <div className="relative h-96">
              <img 
                src="/images/사진9.png"
                alt="Clean Factory" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#176B36]/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-8 text-white text-left">
                <div className="text-2xl font-bold mb-2 flex items-center gap-2">
                  <Check className="w-6 h-6 bg-white text-[#176B36] rounded-full p-1" />
                  신뢰할 수 있는 품질
                </div>
                <p className="opacity-90">체계적인 제조 관리 시스템 운영</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="flex-1 relative group rounded-[2.5rem] overflow-hidden grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500 border border-gray-200"
          >
            <div className="absolute top-6 left-6 bg-red-500 text-white px-6 py-2 rounded-full text-sm font-bold z-10 flex items-center gap-2 shadow-lg">
              <AlertTriangle className="w-5 h-5" /> 일반 제조사
            </div>
            <div className="relative h-96">
              <img 
                src="/images/사진10.png"
                alt="Dirty Factory" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-8 text-white text-left">
                <div className="text-2xl font-bold mb-2 flex items-center gap-2">
                  <X className="w-6 h-6 bg-red-500 text-white rounded-full p-1" />
                  불안정한 품질 관리
                </div>
                <p className="opacity-90">검증되지 않은 제조 환경</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100 inline-flex flex-col md:flex-row items-center gap-10 max-w-4xl mx-auto shadow-lg"
        >
          <img src="/images/오엔뷰로고.png" alt="오엔뷰" className="w-48 h-auto object-contain" />
          <div className="text-left flex-1 border-l border-gray-200 pl-10">
            <h3 className="font-bold text-2xl text-gray-900 mb-2 flex items-center gap-2">
              (주)오엔뷰는
              <span className="bg-[#176B36] text-white text-xs px-2 py-1 rounded">Verified</span>
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              엄격한 품질 관리 기준을<br className="md:hidden" /> 바탕으로 운영됩니다.<br/>
              <strong className="text-gray-900 border-b border-gray-900">안정성과 제조 관리 체계를<br className="md:hidden" /> 최우선으로 합니다.</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
