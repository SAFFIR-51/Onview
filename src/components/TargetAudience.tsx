import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Building2, User2 } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { ReactNode } from 'react';

const Card = ({ title, subtitle, items, icon: Icon, isDark, href }: { title: string, subtitle: ReactNode, items: string[], icon: any, isDark?: boolean, href: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className={`p-10 rounded-[2.5rem] flex flex-col justify-between h-full transition-all duration-300 relative overflow-hidden group ${
      isDark ? 'bg-[#1a1a1a] text-white' : 'bg-white text-gray-900 shadow-xl border border-gray-100'
    }`}
  >
    {/* Background Icon */}
    <Icon className={`absolute -bottom-10 -right-10 w-64 h-64 opacity-5 pointer-events-none transition-transform duration-500 group-hover:scale-110 ${isDark ? 'text-white' : 'text-[#176B36]'}`} />

    <div>
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${
        isDark ? 'bg-white/10 text-white' : 'bg-[#176B36]/10 text-[#176B36]'
      }`}>
        <Icon className="w-8 h-8" />
      </div>
      
      <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
      <div className={`text-base md:text-xl font-bold mb-10 leading-snug min-h-[3.5rem] ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
        {subtitle}
      </div>
      
      <ul className="space-y-4 mb-12">
        {items.map((item, idx) => (
          <li key={idx} className={`flex items-start gap-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${isDark ? 'text-[#4ade80]' : 'text-[#176B36]'}`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
    
    <a href={href} target="_blank" rel="noopener noreferrer" className={`w-full py-5 rounded-full font-bold transition-all flex items-center justify-center gap-2 group/btn ${
      isDark
        ? 'bg-white text-black hover:bg-gray-200'
        : 'bg-[#176B36] text-white hover:bg-[#125229] shadow-lg hover:shadow-xl'
    }`}>
      상담 받아보기
      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
    </a>
  </motion.div>
);

export default function TargetAudience() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeader
          label="Target Audience"
          title="이런 분들과 함께합니다"
          desc={<>경험이 없어도 괜찮습니다.<br/>오엔뷰는 실행 가능한 방향을 함께 설계합니다.</>}
          className="mb-20"
        />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <Card
            title="화장품 창업 준비중인 대표님"
            subtitle={<>자신만의 <strong className="text-[#176B36]">브랜드로 화장품사업</strong>을<br />준비중인 대표님</>}
            items={[
              "자신의 브랜드로 화장품 사업을 시작하고 싶은 분",
              "소량 테스트 제품을 먼저 만들어보고 싶은 분",
              "제조부터 브랜딩·마케팅까지 통합 지원이 필요한 분"
            ]}
            icon={Building2}
            href="https://open.kakao.com/o/sQNHfeli"
          />
          <Card
            title="차별화된 제품을 원하는 대표님"
            subtitle={<>자신만의 <strong>차별화된 제품을 제조</strong>하고<br />싶으신 대표님</>}
            items={[
              "이미 제품을 판매 중이지만 제조 파트너를 찾는 브랜드",
              "자신과의 믿을 수 있는 파트너사가 필요하신 대표님",
              "제조부터(A) ~ 브랜딩, 기획, 마케팅(Z)까지 온·오프라인 원스톱을 원하시는 분"
            ]}
            icon={User2}
            isDark
            href="https://open.kakao.com/o/scLWXdli"
          />
        </div>
      </div>
    </section>
  );
}
