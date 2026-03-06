import { motion } from 'motion/react';
import { Building2, PackageCheck, Truck } from 'lucide-react';
import { ReactNode } from 'react';

const ServiceCard = ({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: ReactNode, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ y: -10 }}
    className="bg-white p-8 rounded-[2rem] flex-1 text-left shadow-xl border border-gray-100 hover:border-[#176B36]/30 transition-all duration-300 group"
  >
    <div className="bg-[#f0fdf4] w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-sm text-[#176B36] group-hover:bg-[#176B36] group-hover:text-white transition-colors duration-300">
      <Icon className="w-10 h-10" />
    </div>
    <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#176B36] transition-colors">{title}</h4>
    <p className="text-gray-500 leading-relaxed text-lg">
      {desc}
    </p>
  </motion.div>
);

export default function AllInOneCare() {
  return (
    <section className="py-32 bg-[#f8f9fa] text-center overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-[#176B36] font-bold tracking-wider text-sm uppercase mb-4 block">Total Care Service</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight tracking-tight">
            제조부터 출고까지,<br className="md:hidden" /> 한 번에 관리하는<br />
            <span className="text-[#176B36]">올인원 케어 서비스</span>
          </h2>
          <p className="text-gray-500 text-xl max-w-3xl mx-auto leading-relaxed">
            기획부터 제조, 출고까지 전 과정을 통합 관리합니다.<br/>
            불필요한 시간과 비용을 줄일 수 있습니다.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={Building2}
            title="완제품 안전 보관"
            desc={<>전용 공간에서 안전하게 보관합니다.</>}
            delay={0}
          />
          <ServiceCard
            icon={PackageCheck}
            title="맞춤형 출고 관리"
            desc={<>필요 수량만 유연하게 출고합니다.</>}
            delay={0.2}
          />
          <ServiceCard
            icon={Truck}
            title="전문 포장 및 배송"
            desc={<>포장부터 배송까지 안전하게<br />지원합니다.</>}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}
