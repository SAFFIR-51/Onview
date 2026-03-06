import { motion } from 'motion/react';
import { Play, Clock, Tag } from 'lucide-react';
import { useState } from 'react';

const categories = ["전체", "창업", "마케팅", "제조", "트렌드", "인증", "수출"];

const classes = [
  {
    id: 1,
    title: "화장품 창업 A to Z: 기획부터 출시까지",
    description: "화장품 브랜드 창업을 준비하는 분들을 위한 실무 가이드입니다. 기획, 제조, 출시 과정에서 반드시 알아야 할 핵심 내용을 정리했습니다.",
    thumbnail: "/images/클래스 썸네일 사진/1.png",
    youtubeUrl: "https://www.youtube.com",
    duration: "15:30",
    category: "창업"
  },
  {
    id: 2,
    title: "성공하는 브랜드의 마케팅 전략",
    description: "제품만으로는 판매가 이루어지지 않습니다. 브랜딩과 마케팅 전략을 통해 소비자에게 선택받는 방법을 설명합니다.",
    thumbnail: "/images/클래스 썸네일 사진/2.png",
    youtubeUrl: "https://www.youtube.com",
    duration: "22:45",
    category: "마케팅"
  },
  {
    id: 3,
    title: "OEM/ODM 제조사 선정 기준",
    description: "제조 파트너 선택은 브랜드 성공에 중요한 요소입니다. 제조사 선정 시 반드시 확인해야 할 기준을 정리했습니다.",
    thumbnail: "/images/클래스 썸네일 사진/3.png",
    youtubeUrl: "https://www.youtube.com",
    duration: "18:20",
    category: "제조"
  },
  {
    id: 4,
    title: "2026 뷰티 트렌드 분석",
    description: "빠르게 변화하는 뷰티 시장에서 주목해야 할 트렌드를 분석합니다. 시장 흐름을 이해하고 제품 기획에 활용할 수 있습니다.",
    thumbnail: "/images/클래스 썸네일 사진/4.png",
    youtubeUrl: "https://www.youtube.com",
    duration: "25:10",
    category: "트렌드"
  },
  {
    id: 5,
    title: "비건 & 클린뷰티 인증의 모든 것",
    description: "비건 및 클린뷰티 인증 절차와 준비 방법을 설명합니다. 인증 과정, 비용, 준비 사항을 정리했습니다.",
    thumbnail: "/images/클래스 썸네일 사진/5.png",
    youtubeUrl: "https://www.youtube.com",
    duration: "20:00",
    category: "인증"
  },
  {
    id: 6,
    title: "해외 수출을 위한 인허가 가이드",
    description: "글로벌 시장 진출을 위한 국가별 인허가 절차와 준비 과정을 설명합니다. 수출 준비 시 필요한 핵심 정보를 정리했습니다.",
    thumbnail: "/images/클래스 썸네일 사진/6.png",
    youtubeUrl: "https://www.youtube.com",
    duration: "30:15",
    category: "수출"
  }
];

export default function Class() {
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const filteredClasses = selectedCategory === "전체"
    ? classes
    : classes.filter(c => c.category === selectedCategory);

  return (
    <div className="pt-32 pb-32 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="text-[#176B36] font-bold tracking-widest text-sm uppercase mb-4 block">Academy</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-gray-900 tracking-tighter">CLASS</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed mb-12">
            화장품 창업부터 마케팅, 트렌드까지.<br/>
            (주)오앤뷰가 전하는 생생한 실무 노하우를 영상으로 만나보세요.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-1.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#176B36] text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {filteredClasses.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group block cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-video mb-6 shadow-lg">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-bold text-gray-900 shadow-lg">
                    오픈 예정
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {item.duration}
                </div>
              </div>

              <div className="px-2">
                <div className="flex items-center gap-2 text-sm font-bold text-[#176B36] mb-3">
                  <Tag className="w-4 h-4" />
                  <span>{item.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#176B36] transition-colors leading-tight line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
