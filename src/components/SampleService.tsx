import { motion } from 'motion/react';

const sampleImages = [
  "/images/사진5.png",
  "/images/사진6.png",
  "/images/사진7.png",
  "/images/사진8.png",
];

export default function SampleService() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3 shrink-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 leading-tight">
              생산 전 충분한<br/>
              <span className="text-[#176B36]">샘플 테스트</span>를 진행합니다
            </h2>
            <div className="text-xl text-gray-600 mb-4 leading-relaxed">
              <p>초기 대량 생산은<br/>브랜드에 부담이 될 수 있습니다.</p>
              <p className="mt-2"><span className="text-[#176B36] font-bold">빠른 시장 테스트용 샘플 제작이 가능</span>해</p>
              <p>시장 반응을 확인한 뒤<br/>생산을 진행할 수 있습니다.</p>
            </div>
            <p className="text-sm text-gray-400 mt-6">
              *유연한 생산 시스템은 비용 관리뿐 아니라 브랜드 운영 안정성에도 긍정적인 영향을 줍니다.
            </p>
          </div>

          <div className="lg:w-2/3 w-full overflow-hidden relative">
             {/* Gradient Masks for fading edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <motion.div 
              className="flex gap-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                repeat: Infinity, 
                ease: "linear", 
                duration: 20 
              }}
              style={{ width: "max-content" }}
            >
              {[...sampleImages, ...sampleImages].map((src, index) => (
                <div key={index} className="shrink-0 w-72 h-72 bg-gray-50 rounded-[2rem] p-8 flex items-center justify-center">
                  <img 
                    src={src} 
                    alt="Sample Product" 
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
