export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-400 py-16 border-t border-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-12">
          {/* Company Info */}
          <div>
            <img src="/images/오엔뷰로고2.png" alt="ONVIEW" className="h-8 w-auto mb-6" />
            <div className="space-y-2 text-sm font-light leading-relaxed">
              <p className="flex items-center gap-3">
                <span className="font-bold text-gray-500 w-28">회사명</span>
                <span className="text-gray-300">주식회사 오엔뷰</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="font-bold text-gray-500 w-28">대표자</span>
                <span className="text-gray-300">박진욱</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="font-bold text-gray-500 w-28">사업자등록번호</span>
                <span className="text-gray-300">612-86-03482</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="font-bold text-gray-500 w-28">주소</span>
                <span className="text-gray-300">인천 부평구 청천동 308-53 1층</span>
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-left md:text-right space-y-2 text-sm font-light">
            <p className="flex items-center md:justify-end gap-3">
              <span className="font-bold text-gray-500 md:order-2">Tel 1</span>
              <a href="tel:010-7661-5729" className="text-gray-300 hover:text-white transition-colors md:order-1">010-7661-5729</a>
            </p>
            <p className="flex items-center md:justify-end gap-3">
              <span className="font-bold text-gray-500 md:order-2">Tel 2</span>
              <a href="tel:010-9699-7744" className="text-gray-300 hover:text-white transition-colors md:order-1">010-9699-7744</a>
            </p>
            <p className="flex items-center md:justify-end gap-3">
              <span className="font-bold text-gray-500 md:order-2">Email</span>
              <a href="mailto:onview7@gmail.com" className="text-gray-300 hover:text-white transition-colors md:order-1">onview7@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>Copyright © ONVIEW All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
