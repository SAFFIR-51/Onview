import { motion } from 'motion/react';
import { Globe, Plane, ShoppingBag, TrendingUp } from 'lucide-react';

export default function GlobalExport() {
  return (
    <section className="py-32 bg-[#111] text-white overflow-hidden relative">
      {/* Background Map Effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg viewBox="0 0 1000 500" className="w-full h-full fill-gray-700">
             <text x="50%" y="50%" textAnchor="middle" fontSize="100" fill="white" className="opacity-10 font-black tracking-widest">GLOBAL NETWORK</text>
             {/* Animated Dots */}
             <circle cx="820" cy="180" r="4" fill="#176B36" className="animate-ping" style={{ animationDuration: '3s' }} />
             <circle cx="820" cy="180" r="3" fill="white" />
             
             <circle cx="240" cy="150" r="4" fill="#176B36" className="animate-ping" style={{ animationDuration: '2.5s', animationDelay: '1s' }} />
             <circle cx="240" cy="150" r="3" fill="white" />
             
             <circle cx="500" cy="120" r="4" fill="#176B36" className="animate-ping" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
             <circle cx="500" cy="120" r="3" fill="white" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-[#111]"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <div>
            <span className="text-[#4ade80] font-bold tracking-wider text-sm uppercase mb-4 block">해외 시장 대응 제조 시스템</span>
            <h2 className="text-3xl md:text-7xl font-bold leading-[1.1] mb-6 md:mb-8 tracking-tight">
              국내를 넘어<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#176B36] to-[#4ade80]">글로벌까지</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#176B36] mb-8 rounded-full"></div>
          </div>
          <div className="text-right md:max-w-lg">
            <p className="text-lg md:text-3xl font-bold text-gray-200 mb-6 leading-snug">
              싱가포르, 캐나다, 일본, 미국, 모로코 등<br/>
              <span className="text-gray-500 text-base md:text-xl font-normal mt-2 block">
                오엔뷰는 해외 시장을 대상으로 한<br className="md:hidden" /> 제조 및 수출 협업을 진행하고 있습니다.<br/>
                각 국가별 유통 환경에 맞춘 제품 생산 및 대응이 가능합니다.
              </span>
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-xl md:text-3xl font-bold mb-4">국가별 해외수출 어려우신가요?</h3>
          <p className="text-gray-400 text-base md:text-lg">
            국내 시장뿐 아니라 해외 진출까지 고려한 경험과 노하우를 갖춘 오엔뷰가<br className="hidden md:block"/>
            브랜드의 미래 전략을 설계하는 데 든든한 지원군이 되겠습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "국내 채널 유통", desc: "백화점, 면세점, 올리브영 등\n국내 주요 채널 입점 솔루션", img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80" },
            { title: "해외 마케팅", desc: "현지 인플루언서, SNS 마케팅\n국가별 맞춤형 전략 수립", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80" },
            { title: "해외 무역·수출", desc: "수출 서류 대행, 통관 이슈 해결\n원스톱 무역 컨설팅", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80" },
            { title: "글로벌 채널 입점", desc: "아마존, 쇼피, 큐텐 등\n글로벌 대형 플랫폼 입점", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-[#1a1a1a] rounded-3xl overflow-hidden relative h-80 group border border-white/5"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700" 
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black via-black/50 to-transparent">
                <h4 className="text-2xl font-bold mb-3 group-hover:text-[#4ade80] transition-colors">{item.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
