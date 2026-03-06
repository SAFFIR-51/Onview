import { motion } from 'motion/react';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { useState, useEffect, useRef, FormEvent } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

function KakaoMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadMap = () => {
      if (!mapRef.current) return;
      const { kakao } = window;
      kakao.maps.load(() => {
        const geocoder = new kakao.maps.services.Geocoder();
        geocoder.addressSearch('인천 부평구 청천동 308-53', (result: any, status: any) => {
          if (status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            const map = new kakao.maps.Map(mapRef.current, {
              center: coords,
              level: 3,
            });
            const marker = new kakao.maps.Marker({ map, position: coords });
            const infowindow = new kakao.maps.InfoWindow({
              content: '<div style="padding:5px;font-size:12px;font-weight:bold;">오엔뷰</div>',
            });
            infowindow.open(map, marker);
          }
        });
      });
    };

    if (window.kakao && window.kakao.maps) {
      loadMap();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=e8e4da770df0013c892ffb8ac20d0342&autoload=false&libraries=services';
    script.onload = loadMap;
    document.head.appendChild(script);
  }, []);

  return <div ref={mapRef} className="w-full h-full" />;
}

export default function Contact() {
  const [activeTab, setActiveTab] = useState<'inquiry' | 'location'>('inquiry');
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const privacy = form.querySelector<HTMLInputElement>('#privacy');
    if (!privacy?.checked) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }
    setFormStatus('loading');
    try {
      const formData = new FormData(form);
      formData.append('access_key', 'ae797f18-a4e1-4f50-86ad-ac8b0fba6f29');
      formData.append('subject', '오엔뷰 홈페이지 문의');
      formData.append('from_name', '오엔뷰 홈페이지');
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <div className="pt-32 pb-32 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-[#176B36] font-bold tracking-widest text-sm uppercase mb-4 block">Contact Us</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-gray-900 tracking-tighter">CONTACT</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            성공적인 비즈니스의 시작,<br/>
            (주)오앤뷰가 함께하겠습니다.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-gray-100 p-1.5 rounded-full inline-flex shadow-inner">
            <button
              onClick={() => setActiveTab('inquiry')}
              className={`px-10 py-3 rounded-full text-lg font-bold transition-all duration-300 ${
                activeTab === 'inquiry'
                  ? 'bg-[#176B36] text-white shadow-lg'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200'
              }`}
            >
              문의하기
            </button>
            <button
              onClick={() => setActiveTab('location')}
              className={`px-10 py-3 rounded-full text-lg font-bold transition-all duration-300 ${
                activeTab === 'location'
                  ? 'bg-[#176B36] text-white shadow-lg'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200'
              }`}
            >
              찾아오시는 길
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          {activeTab === 'inquiry' ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-50 p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-100"
            >
              <h3 className="text-3xl font-bold mb-8 text-center">Online Inquiry</h3>
              {formStatus === 'success' ? (
                <div className="text-center py-16">
                  <CheckCircle2 className="w-16 h-16 text-[#176B36] mx-auto mb-6" />
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">문의가 접수되었습니다</h4>
                  <p className="text-gray-500 mb-8">빠른 시일 내에 담당자가 연락드리겠습니다.</p>
                  <button onClick={() => setFormStatus('idle')} className="px-8 py-3 bg-[#176B36] text-white rounded-xl font-bold hover:bg-[#125229] transition-colors">
                    추가 문의하기
                  </button>
                </div>
              ) : (
              <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">회사명 / 담당자명 <span className="text-red-500">*</span></label>
                    <input type="text" name="company_name" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#176B36] focus:ring-1 focus:ring-[#176B36] outline-none transition-all bg-white" placeholder="입력해주세요" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">연락처 <span className="text-red-500">*</span></label>
                    <input type="text" name="phone" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#176B36] focus:ring-1 focus:ring-[#176B36] outline-none transition-all bg-white" placeholder="010-0000-0000" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">이메일 <span className="text-red-500">*</span></label>
                    <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#176B36] focus:ring-1 focus:ring-[#176B36] outline-none transition-all bg-white" placeholder="example@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">문의 유형 <span className="text-red-500">*</span></label>
                    <select name="inquiry_type" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#176B36] focus:ring-1 focus:ring-[#176B36] outline-none transition-all appearance-none bg-white cursor-pointer">
                      <option value="">선택해주세요</option>
                      <option>OEM/ODM 제조 문의</option>
                      <option>제품 기획/개발 문의</option>
                      <option>용기/패키지 문의</option>
                      <option>수출/인허가 문의</option>
                      <option>기타 문의</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">문의 내용 <span className="text-red-500">*</span></label>
                  <textarea name="message" rows={6} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#176B36] focus:ring-1 focus:ring-[#176B36] outline-none transition-all resize-none bg-white" placeholder="문의하실 내용을 상세히 적어주시면 빠르고 정확한 상담이 가능합니다."></textarea>
                </div>

                <div className="flex items-start gap-3 pt-4 justify-center">
                  <input type="checkbox" id="privacy" className="mt-1 w-4 h-4 text-[#176B36] rounded border-gray-300 focus:ring-[#176B36]" />
                  <label htmlFor="privacy" className="text-sm text-gray-500 cursor-pointer select-none">
                    <span className="font-bold text-gray-700">[필수]</span> 개인정보 수집 및 이용에 동의합니다.
                  </label>
                </div>

                <div className="text-center pt-4">
                  <button type="submit" disabled={formStatus === 'loading'} className="w-full md:w-auto px-12 bg-[#176B36] text-white font-bold text-lg py-4 rounded-xl hover:bg-[#125229] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                    {formStatus === 'loading' ? '전송 중...' : '문의하기'}
                  </button>
                  {formStatus === 'error' && (
                    <p className="text-red-500 text-sm mt-2">전송에 실패했습니다. 다시 시도해주세요.</p>
                  )}
                </div>
              </form>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              <div className="bg-gray-50 rounded-[3rem] border border-gray-100 overflow-hidden shadow-xl">
                {/* Kakao Map */}
                <div className="w-full h-[450px]">
                  <KakaoMap />
                </div>

                {/* 주소 정보 오버레이 */}
                <div className="p-8 md:p-10 bg-white border-t border-gray-100">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-[#176B36] rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#176B36] uppercase tracking-wider mb-1">Address</p>
                      <p className="text-xl font-bold text-gray-900">
                        인천 부평구 청천동 308-53 1층
                      </p>
                      <p className="text-sm text-gray-400 mt-1">주식회사 오엔뷰 본사</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
