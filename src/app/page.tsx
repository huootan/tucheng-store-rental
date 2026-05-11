import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Car, 
  TreePine, 
  BusFront, 
  ArrowRight,
  Info
} from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  // 監聽滾動以改變導覽列樣式 (Wix 經典行為：滾動後出現實體底色)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 selection:bg-neutral-200">
      
      {/* 導覽列 - 極簡風格 */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md border-neutral-200 py-4 shadow-sm' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div className={`text-xl tracking-[0.2em] uppercase ${scrolled ? 'text-neutral-900' : 'text-white'}`}>
            <span className="font-bold">Cheng's</span> Property
          </div>
          <div className="flex items-center gap-6">
            <a 
              href="#contact" 
              className={`hidden md:block text-sm tracking-widest uppercase transition-colors ${
                scrolled ? 'text-neutral-500 hover:text-neutral-900' : 'text-neutral-300 hover:text-white'
              }`}
            >
              聯絡我們
            </a>
            <a 
              href="tel:0955599119" 
              className={`px-6 py-2.5 text-sm tracking-widest uppercase border transition-colors ${
                scrolled 
                  ? 'bg-neutral-900 text-white border-neutral-900 hover:bg-neutral-800' 
                  : 'bg-white text-neutral-900 border-white hover:bg-neutral-100'
              }`}
            >
              立即撥打
            </a>
          </div>
        </div>
      </header>

      {/* 主視覺 Hero - 滿版大圖與極簡文字 */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')",
          }}
        >
          {/* 暗色遮罩以凸顯文字 */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white px-6 w-full max-w-4xl mx-auto flex flex-col items-center mt-12">
          <p className="text-sm md:text-base tracking-[0.3em] uppercase mb-6 opacity-90 border-b border-white/40 pb-2">
            新北土城重劃區 · 稀有釋出
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-8 leading-tight">
            大面寬<br className="md:hidden" />黃金店面
          </h1>
          <a 
            href="#space" 
            className="group flex items-center gap-3 text-sm tracking-widest uppercase bg-transparent border border-white px-8 py-4 hover:bg-white hover:text-neutral-900 transition-all duration-300"
          >
            探索空間 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* 關於空間 The Space - 經典 Wix 左右圖文分割排列 */}
      <section id="space" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-light tracking-wide mb-8 text-neutral-900">
              The Space
            </h2>
            <p className="text-neutral-500 leading-loose text-lg mb-8 font-light">
              緊鄰發展成熟的清水地區與深具潛力的重劃區交界。<br/><br/>
              開門即見青山廣場，擁有極佳的視野與綠意環境，為您的品牌自帶自然集客力。正適合餐飲、診所、零售等需要寬敞營業空間的各大企業進駐。
            </p>
            
            <div className="pt-8 border-t border-neutral-200">
              <h3 className="text-sm tracking-[0.2em] uppercase text-neutral-400 mb-6">空間概覽</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-end border-b border-neutral-100 pb-3">
                  <span className="text-neutral-600 font-light tracking-widest">位置</span>
                  <span className="text-neutral-900 text-right">青雲路 341 號 1F</span>
                </li>
                <li className="flex justify-between items-end border-b border-neutral-100 pb-3">
                  <span className="text-neutral-600 font-light tracking-widest">總坪數</span>
                  <span className="text-neutral-900 text-right">80 坪 <span className="text-neutral-400 text-sm">(權狀)</span></span>
                </li>
                <li className="flex justify-between items-end border-b border-neutral-100 pb-3">
                  <span className="text-neutral-600 font-light tracking-widest">室內坪數</span>
                  <span className="text-neutral-900 text-right">47.7 坪</span>
                </li>
                <li className="flex justify-between items-end border-b border-neutral-100 pb-3">
                  <span className="text-neutral-600 font-light tracking-widest">面寬</span>
                  <span className="text-neutral-900 text-right">約 9 米大面寬</span>
                </li>
                <li className="flex justify-between items-end pb-3">
                  <span className="text-neutral-600 font-light tracking-widest">月租金</span>
                  <span className="text-neutral-900 text-right font-medium">NT$ 120,000</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-7/12 h-[500px] lg:h-[700px] bg-neutral-100 relative">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" 
              alt="店面室內示意圖" 
              className="absolute inset-0 w-full h-full object-cover grayscale-[20%]"
            />
          </div>

        </div>
      </section>

      {/* 四大優勢 Amenities - 網格搭配極簡線條 Icon */}
      <section className="py-24 lg:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-light tracking-wide text-neutral-900">
              Advantages
            </h2>
            <div className="mt-4 w-12 h-[1px] bg-neutral-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
            <div className="flex flex-col items-center text-center group">
              <MapPin size={36} strokeWidth={1} className="text-neutral-400 mb-6 group-hover:text-neutral-900 transition-colors" />
              <h3 className="text-lg tracking-widest mb-4 font-normal text-neutral-800">新舊生活圈交界</h3>
              <p className="text-neutral-500 font-light leading-relaxed text-sm">
                同時匯聚舊有穩定客源與新興居住人口，客群廣泛且穩定。
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <Car size={36} strokeWidth={1} className="text-neutral-400 mb-6 group-hover:text-neutral-900 transition-colors" />
              <h3 className="text-lg tracking-widest mb-4 font-normal text-neutral-800">停車超便利</h3>
              <p className="text-neutral-500 font-light leading-relaxed text-sm">
                青山汽車停車場僅 30m，機車停車場僅 20m，顧客來訪免煩惱。
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <TreePine size={36} strokeWidth={1} className="text-neutral-400 mb-6 group-hover:text-neutral-900 transition-colors" />
              <h3 className="text-lg tracking-widest mb-4 font-normal text-neutral-800">開門即公園</h3>
              <p className="text-neutral-500 font-light leading-relaxed text-sm">
                正對青山廣場，假日休閒人潮眾多，提供絕佳的自然集客效應。
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <BusFront size={36} strokeWidth={1} className="text-neutral-400 mb-6 group-hover:text-neutral-900 transition-colors" />
              <h3 className="text-lg tracking-widest mb-4 font-normal text-neutral-800">大眾運輸便利</h3>
              <p className="text-neutral-500 font-light leading-relaxed text-sm">
                社區門口設有公車站牌，直達捷運海山站，員工與無車顧客皆宜。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 聯絡區塊 Contact - 滿版簡潔聯絡資訊 */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-light tracking-wide text-neutral-900 mb-6">
            Contact
          </h2>
          <p className="text-neutral-500 tracking-[0.2em] mb-12 uppercase text-sm">
            【 誠信出租 · 仲介勿擾 】
          </p>

          <div className="bg-neutral-50 p-12 lg:p-16 border border-neutral-100 flex flex-col items-center">
            <h3 className="text-xl font-light text-neutral-800 mb-2">屋主 鄭先生</h3>
            <p className="text-neutral-400 font-light mb-10 text-sm">Owner & Manager</p>

            <a 
              href="tel:0955599119" 
              className="text-4xl lg:text-5xl font-light tracking-widest text-neutral-900 mb-12 hover:opacity-70 transition-opacity"
            >
              0955-599-119
            </a>

            <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
              <a 
                href="https://line.me/ti/p/aM-a4jS34u" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 border border-neutral-900 bg-neutral-900 text-white py-4 tracking-widest text-sm hover:bg-neutral-800 transition-colors text-center uppercase"
              >
                加入 Line 聯繫
              </a>
              <a 
                href="tel:0955599119" 
                className="flex-1 border border-neutral-200 bg-white text-neutral-900 py-4 tracking-widest text-sm hover:bg-neutral-50 transition-colors text-center uppercase"
              >
                立即撥打
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 頁尾 Footer */}
      <footer className="bg-neutral-900 text-neutral-400 py-12 text-center text-xs tracking-widest uppercase">
        <div className="max-w-7xl mx-auto px-6">
          <p>© {new Date().getFullYear()} CHENG'S PROPERTY. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;