import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, X } from 'lucide-react';

const portfolioItems = [
  { id: 1, brand: "이너로그", product: "innerlog", description: "몸을 돌보는 일상을 통해 자신의 상태와 감정을 자연스럽게 돌아보게 하는 페미닌 이너 케어 브랜드", image: "/images/사진/1_inner log.png" },
  { id: 2, brand: "비베라", product: "vivera", description: "슈퍼푸드 유래 성분으로 피부에 자연의 영양과 활력을 채우는 라이프스타일 스킨케어 브랜드", image: "/images/사진/2_vivera.png" },
  { id: 3, brand: "더마솔루션", product: "Derma Solution Lab", description: "엄선된 단일 원액 성분의 효능을 과학적으로 전달해 피부 본연의 균형을 돕는 스킨 솔루션 브랜드", image: "/images/사진/3_Derma Solution Lab.png" },
  { id: 4, brand: "히녹스", product: "Hinox", description: "편백나무 오일의 향과 효능을 통해 피부와 마음에 편안한 휴식을 제안하는 자연주의 라이프스타일 브랜드", image: "/images/사진/4_Hinox.png" },
  { id: 5, brand: "메종주아르", product: "Maison Juaire", description: "정제된 제형과 섬세한 텍스처로 감각적인 여성의 취향과 태도를 담아내는 스킨케어 아뜰리에 브랜드", image: "/images/사진/5_Maison Juaire.png" },
  { id: 6, brand: "피유셀", product: "fyucell", description: "여성의 몸 깊은 곳에서 시작되는 세포 단위의 균형과 리듬을 깨우는 프리미엄 페미닌 케어 브랜드", image: "/images/사진/6_fyucell.png" },
  { id: 7, brand: "네이솜", product: "naysom", description: "자연에서 온 순수한 성분으로 피부에 부드러운 편안함과 쉼을 전하는 스킨케어 브랜드", image: "/images/사진/7_Naysom.png" },
  { id: 8, brand: "마렐", product: "Marelle", description: "바다에서 온 미네랄과 해양 성분으로 피부에 맑고 고요한 휴식 같은 루틴을 제안하는 스킨케어 브랜드", image: "/images/사진/8_Marelle.png" },
  { id: 9, brand: "아베넬", product: "Avenel", description: "피부 관리의 출발점을 효과가 아닌 균형에 두고, 안정적인 피부 컨디션을 제안하는 클리니컬 스킨케어 브랜드", image: "/images/사진/9_Avenel.png" },
  { id: 10, brand: "노벨리아", product: "NOVELIA", description: "PDRN을 중심으로 피부의 새로운 시작과 정제된 아름다움을 제안하는 프리미엄 스킨케어 브랜드", image: "/images/사진/10_Novelia.png" },
  { id: 11, brand: "덴티스", product: "Dentis", description: "매일의 생활 속에서 자연스럽게 이어지는 균형 잡힌 치아 관리 습관을 제안하는 데일리 덴탈 케어 브랜드", image: "/images/사진/11_Dentis.png" },
  { id: 12, brand: "디어버드", product: "Dear Bird", description: "아이와 엄마가 함께 안심하고 사용할 수 있도록 피부의 안정과 회복을 생각해 만든 더마 내추럴 스킨케어 브랜드", image: "/images/사진/12_dear bird.png" },
  { id: 13, brand: "코어듀", product: "coredew", description: "몸의 중심에서 시작되는 섬세한 수분과 균형을 통해 여성의 건강한 이너 케어를 제안하는 브랜드", image: "/images/사진/13_Coredew.png" },
  { id: 14, brand: "코매료", product: "Comaeryo", description: "오감을 깨우는 뷰티 리추얼을 통해 감각과 자신을 다시 발견하게 하는 감성 스킨케어 브랜드", image: "/images/사진/14_Comaeryo.png" },
  { id: 15, brand: "클리노드", product: "Cleanode", description: "일상의 반복되는 깨끗함의 순간을 통해 삶의 리듬을 정돈하는 클린 라이프스타일 브랜드", image: "/images/사진/15_Cleanode.png" },
  { id: 16, brand: "셀인키", product: "Cellinkey", description: "레드 다이아 성분을 기반으로 세포의 연결과 피부 본연의 힘을 깨워 깊은 회복을 제안하는 프리미엄 스킨케어 브랜드", image: "/images/사진/16_Cellinkey.png" },
  { id: 17, brand: "오비아", product: "OBIA", description: "피부 고민을 망각하게 할 만큼 자연과 과학의 균형으로 피부 본연의 회복을 돕는 스킨케어 브랜드", image: "/images/사진/17_Obia.png" },
  { id: 18, brand: "앤디스", product: "and this", description: "뷰티 루틴의 마지막 터치를 상징하며, 일상 속 아름다움의 흐름을 완성하는 미니멀 감성의 뷰티 브랜드", image: "/images/사진/18_and this.png" },
  { id: 19, brand: "청아다향", product: "청아다향", description: "보성 녹차의 자연 효능을 바탕으로 맑은 피부 균형을 제안하는 전통 감성의 스킨케어 브랜드", image: "/images/사진/19_청아다향.png" },
  { id: 20, brand: "웨타", product: "Wetta", description: "세정 성분이 가장 효과적으로 작동하도록 설계된 새로운 기준의 세정 브랜드", image: "/images/사진/20_Wetta.png" },
  { id: 21, brand: "레시엔", product: "Recien", description: "자연에서 얻은 성분과 과학적 설계를 바탕으로 두피와 모발의 건강한 균형을 제안하는 헤어 케어 브랜드", image: "/images/사진/21_Recien.png" },
  { id: 22, brand: "마반트", product: "Mavent", description: "자신만의 기준으로 스스로를 단단히 관리하는 남성을 위한 절제된 프리미엄 스킨케어 브랜드", image: "/images/사진/22_Mavent.png" },
  { id: 23, brand: "더 버블 크루", product: "The Bubble Crew", description: "아이들이 목욕과 위생 습관을 즐거운 놀이처럼 받아들일 수 있도록 돕는 캐릭터 기반의 키즈 라이프스타일 브랜드", image: "/images/사진/23_The bubble crew.png" },
  { id: 24, brand: "루미제이", product: "LUMIJ", description: "피부의 광채와 스스로를 돌보는 여정을 통해 진정한 아름다움을 발견하도록 돕는 스킨케어 브랜드", image: "/images/사진/24_LUMIJ.png" },
  { id: 25, brand: "엘루마", product: "Eluma", description: "자연의 빛처럼 부드럽고 생기 있는 피부 본연의 아름다움을 제안하는 감성적 라이프스타일 스킨케어 브랜드", image: "/images/사진/25_Eluma.png" },
  { id: 26, brand: "영하다", product: "0-hada", description: "율무 기반의 자연 유래 성분으로 피부의 활력과 맑음을 되찾아 지속 가능한 젊음을 제안하는 앰플 중심 스킨케어 브랜드", image: "/images/사진/26_0-hada.png" },
  { id: 27, brand: "에쎄레브", product: "Essereve", description: "존재 그 자체로 빛나는 여성의 내면의 아름다움을 섬세한 감성으로 전하는 스킨케어 브랜드", image: "/images/사진/27_Essereve.png" },
];

type PortfolioItem = typeof portfolioItems[number];

export default function Portfolio() {
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 12, portfolioItems.length));
  };

  return (
    <div className="pt-32 pb-32 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-24"
        >
          <span className="text-[#176B36] font-bold tracking-widest text-sm uppercase mb-4 block">Our Works</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-gray-900 tracking-tighter">PORTFOLIO</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            (주)오앤뷰와 함께 성공적인 브랜드를 런칭한<br/>
            수많은 파트너사들의 성공 사례를 확인해보세요.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {portfolioItems.slice(0, visibleCount).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 4) * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative overflow-hidden rounded-[2rem] aspect-square mb-6 bg-gray-100 shadow-sm border border-gray-100">
                <img
                  src={item.image}
                  alt={item.brand}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-bold text-gray-900 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                    View Project
                  </div>
                </div>
              </div>
              <div className="text-left px-2">
                <p className="text-[#176B36] font-bold text-xs uppercase tracking-widest mb-2">{item.brand}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#176B36] transition-colors line-clamp-1">{item.product}</h3>
                <p className="text-gray-500 text-sm line-clamp-2 font-medium">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {visibleCount < portfolioItems.length && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-24 text-center"
          >
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 px-10 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-[#176B36] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <Plus className="w-5 h-5" />
              더 보기 ({visibleCount}/{portfolioItems.length})
            </button>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-white rounded-[2rem] overflow-hidden max-w-md w-full shadow-2xl max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-5 right-5 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>

              {/* Image */}
              <div className="relative w-full aspect-[4/3] bg-gray-100 shrink-0">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.brand}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="p-8 md:p-10">
                <p className="text-[#176B36] font-bold text-sm uppercase tracking-widest mb-3">{selectedItem.brand}</p>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5">{selectedItem.product}</h2>
                <div className="w-12 h-1 bg-[#176B36] rounded-full mb-5" />
                <p className="text-gray-600 text-lg leading-relaxed">{selectedItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
