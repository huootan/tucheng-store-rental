'use client';

import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Car, 
  TreePine, 
  BusFront, 
  ArrowRight
} from 'lucide-react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  // GitHub 專案名稱的前綴路徑
  const basePath = '/tucheng-store-rental';

  // 監聽滾動以改變導覽列樣式
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // SEO 結構化資料 (JSON-LD)，提供給 Google 爬蟲精準的物件資訊
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": "土城店面出租 | 新北重劃區大面寬黃金店面",
    "description": "土城店面出租首選！權狀80坪，室內47.7坪，大面寬約9米，近捷運中正國中站LG10與金城交流道。適合各大品牌進駐。",
    "datePosted": new Date().toISOString(),
    "offers": {
      "@type": "Offer",
      "price": "120000",
      "priceCurrency": "TWD",
      "url": "https://huootan.github.io/tucheng-store-rental/"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "土城區",
      "addressRegion": "新北市",
      "streetAddress": "青雲路 341 號 1F",
      "addressCountry": "TW"
    }
  };

  return (
    <>
      {/* 注入 SEO 結構化資料 */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} 
      />

      {/* 使用 semantic main 標籤，提升 SEO 權重 */}
      <main className="min-h-screen bg-white font-sans text-neutral-900 selection:bg-neutral-200">
        
        {/* 導覽列 - 極簡風格 */}
        <header 
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
            scrolled 
              ? 'bg-white/95 backdrop-blur-md border-neutral-200 py-4 shadow-sm' 
              : 'bg-transparent border-transparent py-6'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
            {/* 需求3修改：Cheng's Property 改為 土城質感店面誠摯出租 */}
            <div className={`text-base md:text-xl tracking-[0.1em] md:tracking-[0.2em] ${scrolled ? 'text-neutral-900' : 'text-white'}`}>
              <span className="font-bold">土城質感店面</span> 誠摯出租
            </div>
            <nav className="flex items-center gap-6" aria-label="主要導覽">
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
                className={`px-4 md:px-6 py-2 md:py-2.5 text-xs md:text-sm tracking-widest uppercase border transition-colors ${
                  scrolled 
                    ? 'bg-neutral-900 text-white border-neutral-900 hover:bg-neutral-800' 
                    : 'bg-white text-neutral-900 border-white hover:bg-neutral-100'
                }`}
              >
                立即撥打
              </a>
            </nav>
          </div>
        </header>

        {/* 隱藏的 H1，專為搜尋引擎設計的關鍵字佈局 */}
        <h1 className="sr-only">土城店面出租 | 新北市土城區重劃區 質感黃金店面出租 權狀80坪大面寬 屋主自租</h1>

        {/* 主視覺 Hero - 需求1修改：使用 p3.jpg */}
        <section className="relative h-screen min-h-[700px] flex items-center justify-center">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url('${basePath}/p3.jpg')`,
            }}
            aria-hidden="true"
          >
            {/* 暗色遮罩以凸顯文字 */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-10 text-center text-white px-6 w-full max-w-4xl mx-auto flex flex-col items-center mt-12">
            <p className="text-sm md:text-base tracking-[0.3em] uppercase mb-6 opacity-90 border-b border-white/40 pb-2">
              新北土城重劃區 · 稀有釋出
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-8 leading-tight">
              大面寬<br className="md:hidden" />黃金店面
            </h2>
            <a 
              href="#space" 
              className="group flex items-center gap-3 text-sm tracking-widest uppercase bg-transparent border border-white px-8 py-4 hover:bg-white hover:text-neutral-900 transition-all duration-300"
              aria-label="向下捲動探索空間詳細資訊"
            >
              探索空間 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>

        {/* 關於空間 The Space - 需求2修改：新增 p1.jpg */}
        <section id="space" className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            <article className="w-full lg:w-5/12 flex flex-col justify-center">
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
            </article>

            {/* 修改處：改為上下兩張圖片排列 */}
            <div className="w-full lg:w-7/12 flex flex-col gap-6">
              <div className="relative h-[300px] lg:h-[400px] bg-neutral-100 overflow-hidden">
                <img 
                  src={`${basePath}/p2.jpg`} 
                  alt="新北市土城區店面室內格局實景 - 寬敞方正" 
                  className="absolute inset-0 w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="bg-neutral-100 overflow-hidden">
                <img 
                  src={`${basePath}/p1.jpg`} 
                  alt="新北市土城區店面外部環境實景 - 大面寬店面" 
                  className="w-full h-auto grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

          </div>
        </section>

        {/* 空間藝廊 Gallery (展示 p3, p4, p5, p6, p7) */}
        <section className="pb-24 lg:pb-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative h-[300px] lg:h-[450px] overflow-hidden group bg-neutral-100">
                <img src={`${basePath}/p3.jpg`} alt="土城店面室內空間實景照 1 - 適合餐飲與零售進駐" className="absolute inset-0 w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              </div>
              <div className="relative h-[300px] lg:h-[450px] overflow-hidden group bg-neutral-100">
                <img src={`${basePath}/p4.jpg`} alt="土城店面室內空間實景照 2 - 採光良好大面寬" className="absolute inset-0 w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              </div>
              <div className="relative h-[300px] lg:h-[450px] overflow-hidden group bg-neutral-100">
                <img src={`${basePath}/p5.jpg`} alt="土城店面室內空間實景照 3 - 空間好規劃" className="absolute inset-0 w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              </div>
              <div className="relative h-[300px] lg:h-[450px] overflow-hidden group bg-neutral-100">
                <img src={`${basePath}/p6.jpg`} alt="土城店面室內空間實景照 4 - 開闊無壓迫感" className="absolute inset-0 w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              </div>
              {/* 新增的 p7.jpg */}
              <div className="relative h-[300px] lg:h-[450px] overflow-hidden group bg-neutral-100">
                <img src={`${basePath}/p7.jpg`} alt="土城店面室內空間實景照 5 - 空間細節展示" className="absolute inset-0 w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              </div>
            </div>
          </div>
        </section>

        {/* 四大優勢 Amenities */}
        <section className="py-24 lg:py-32 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            
            <div className="text-center mb-20">
              <h2 className="text-3xl lg:text-4xl font-light tracking-wide text-neutral-900">
                Advantages
              </h2>
              <div className="mt-4 w-12 h-[1px] bg-neutral-400 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
              <article className="flex flex-col items-center text-center group">
                <MapPin size={36} strokeWidth={1} className="text-neutral-400 mb-6 group-hover:text-neutral-900 transition-colors" aria-hidden="true" />
                <h3 className="text-lg tracking-widest mb-4 font-normal text-neutral-800">新舊生活圈交界</h3>
                <p className="text-neutral-500 font-light leading-relaxed text-sm">
                  同時匯聚舊有穩定客源與新興居住人口，客群廣泛且穩定。
                </p>
              </article>

              <article className="flex flex-col items-center text-center group">
                <Car size={36} strokeWidth={1} className="text-neutral-400 mb-6 group-hover:text-neutral-900 transition-colors" aria-hidden="true" />
                <h3 className="text-lg tracking-widest mb-4 font-normal text-neutral-800">停車超便利</h3>
                <p className="text-neutral-500 font-light leading-relaxed text-sm">
                  青山汽車停車場僅 30m，機車停車場僅 20m，顧客來訪免煩惱。
                </p>
              </article>

              <article className="flex flex-col items-center text-center group">
                <TreePine size={36} strokeWidth={1} className="text-neutral-400 mb-6 group-hover:text-neutral-900 transition-colors" aria-hidden="true" />
                <h3 className="text-lg tracking-widest mb-4 font-normal text-neutral-800">開門即公園</h3>
                <p className="text-neutral-500 font-light leading-relaxed text-sm">
                  正對青山廣場，假日休閒人潮眾多，提供絕佳的自然集客效應。
                </p>
              </article>

              <article className="flex flex-col items-center text-center group">
                <BusFront size={36} strokeWidth={1} className="text-neutral-400 mb-6 group-hover:text-neutral-900 transition-colors" aria-hidden="true" />
                <h3 className="text-lg tracking-widest mb-4 font-normal text-neutral-800">大眾運輸便利</h3>
                <p className="text-neutral-500 font-light leading-relaxed text-sm">
                  社區門口設有公車站牌，直達捷運海山站，員工與無車顧客皆宜。
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* 多元招商方案 Flexible Options */}
        <section className="py-24 lg:py-32 bg-white border-t border-neutral-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            
            <div className="text-center mb-20">
              <h2 className="text-3xl lg:text-4xl font-light tracking-wide text-neutral-900">
                Flexible Options | 多元招商方案
              </h2>
              <p className="mt-4 text-neutral-500 font-light tracking-widest text-sm max-w-2xl mx-auto leading-relaxed">
                無論是長期深耕還是短期測試，我們提供最彈性的空間解方。
              </p>
              <div className="mt-6 w-12 h-[1px] bg-neutral-400 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* 卡片一 */}
              <article className="group border border-neutral-100 p-8 lg:p-10 bg-neutral-50/50 hover:bg-white hover:border-neutral-900 hover:shadow-xl hover:shadow-neutral-100/50 transition-all duration-500 flex flex-col justify-between">
                <div>
                  <span className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-6 block">Option 01</span>
                  <h3 className="text-xl tracking-wide font-normal mb-4 text-neutral-900">旗艦連鎖 / 雲端廚房</h3>
                  <div className="w-8 h-[1px] bg-neutral-300 mb-6 group-hover:w-16 transition-all duration-500"></div>
                  <p className="text-neutral-500 font-light leading-relaxed text-sm">
                    具備三相電、天然氣、排煙排水系統；附專屬卸貨區，極利於物流與外送；前三個月免租期，保障營運穩定。
                  </p>
                </div>
              </article>

              {/* 卡片二 */}
              <article className="group border border-neutral-100 p-8 lg:p-10 bg-neutral-50/50 hover:bg-white hover:border-neutral-900 hover:shadow-xl hover:shadow-neutral-100/50 transition-all duration-500 flex flex-col justify-between">
                <div>
                  <span className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-6 block">Option 02</span>
                  <h3 className="text-xl tracking-wide font-normal mb-4 text-neutral-900">短期快閃 / 特賣會</h3>
                  <div className="w-8 h-[1px] bg-neutral-300 mb-6 group-hover:w-16 transition-all duration-500"></div>
                  <p className="text-neutral-500 font-light leading-relaxed text-sm">
                    接受 1 至 3 個月短期彈性租賃；正對青山廣場，自帶週末休閒人潮；9 米大面寬廣告效益極佳。
                  </p>
                </div>
              </article>

              {/* 卡片三 */}
              <article className="group border border-neutral-100 p-8 lg:p-10 bg-neutral-50/50 hover:bg-white hover:border-neutral-900 hover:shadow-xl hover:shadow-neutral-100/50 transition-all duration-500 flex flex-col justify-between">
                <div>
                  <span className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-6 block">Option 03</span>
                  <h3 className="text-xl tracking-wide font-normal mb-4 text-neutral-900">微型創業 / 分割招租</h3>
                  <div className="w-8 h-[1px] bg-neutral-300 mb-6 group-hover:w-16 transition-all duration-500"></div>
                  <p className="text-neutral-500 font-light leading-relaxed text-sm">
                    47.7 坪室內空間具備分割潛力；歡迎獨立咖啡廳、微型診所或個人工作室；總租金門檻降低，進駐重劃區更輕鬆。
                  </p>
                </div>
              </article>
            </div>

          </div>
        </section>

        {/* 交通樞紐 Transportation */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            <article className="w-full lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-light tracking-wide mb-8 text-neutral-900">
                Transportation
              </h2>
              <p className="text-neutral-500 leading-loose text-lg mb-8 font-light">
                無與倫比的交通樞紐潛力。<br/><br/>
                步行可達即將通車的萬大線中正國中站 (LG10)，且快速銜接國道3號金城交流道。無論是雙北通勤人潮，或是物流運輸，都能提供企業最高效的交通優勢。
              </p>
            </article>

            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <figure className="bg-neutral-50 border border-neutral-100 p-4 m-0">
                <figcaption className="text-xs tracking-widest uppercase text-neutral-400 mb-3">未來萬大線 LG10 站</figcaption>
                <img 
                  src={`${basePath}/中正國中站LG10.png`} 
                  alt="未來萬大線捷運中正國中站LG10周邊路線與交通動線分析" 
                  className="w-full h-auto object-contain"
                />
              </figure>
              <figure className="bg-neutral-50 border border-neutral-100 p-4 m-0">
                <figcaption className="text-xs tracking-widest uppercase text-neutral-400 mb-3">國道 3 號金城交流道</figcaption>
                <img 
                  src={`${basePath}/國3金城交流道.png`} 
                  alt="國道3號金城交流道周邊路線，提供極佳的物流運輸優勢" 
                  className="w-full h-auto object-contain"
                />
              </figure>
            </div>

          </div>
        </section>

        {/* 地圖位置 Map */}
        <section className="py-24 lg:py-32 bg-neutral-50 border-t border-neutral-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-light tracking-wide text-neutral-900">
                Location
              </h2>
              <div className="mt-4 w-12 h-[1px] bg-neutral-400 mx-auto"></div>
            </div>
            
            <div className="w-full h-[400px] lg:h-[500px] bg-neutral-200 shadow-sm border border-neutral-200">
              <iframe 
                src="https://www.google.com/maps?q=新北市土城區青雲路341號&output=embed&language=zh-TW" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - 新北市土城區青雲路341號"
              ></iframe>
            </div>
          </div>
        </section>

        {/* 聯絡區塊 Contact */}
        <section id="contact" className="py-32 bg-neutral-900 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-light tracking-wide mb-6">
              Contact
            </h2>
            <p className="text-neutral-400 tracking-[0.2em] mb-12 uppercase text-sm">
              【 誠信出租 · 仲介勿擾 】
            </p>

            <address className="p-12 lg:p-16 border border-neutral-800 flex flex-col items-center bg-neutral-950/50 not-italic">
              <h3 className="text-xl font-light mb-2">屋主 鄭先生</h3>
              <p className="text-neutral-500 font-light mb-10 text-sm">Owner & Manager</p>

              <a 
                href="tel:0955599119" 
                className="text-4xl lg:text-5xl font-light tracking-widest mb-12 hover:text-neutral-400 transition-colors"
                aria-label="撥打電話給屋主鄭先生，電話號碼 0955-599-119"
              >
                0955-599-119
              </a>

              <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
                <a 
                  href="https://line.me/ti/p/aM-a4jS34u" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 border border-white bg-white text-neutral-900 py-4 tracking-widest text-sm hover:bg-neutral-200 transition-colors text-center uppercase"
                  aria-label="點擊開啟 Line 加入屋主鄭先生好友"
                >
                  加入 Line 聯繫
                </a>
                <a 
                  href="tel:0955599119" 
                  className="flex-1 border border-neutral-700 bg-transparent text-white py-4 tracking-widest text-sm hover:bg-neutral-800 transition-colors text-center uppercase"
                  aria-label="使用手機立即撥打電話"
                >
                  立即撥打
                </a>
              </div>
            </address>
          </div>
        </section>

      </main>
      
      {/* 頁尾 Footer */}
      <footer className="bg-neutral-950 text-neutral-500 py-12 text-center text-xs tracking-widest uppercase border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <p>© {new Date().getFullYear()} 土城質感店面誠摯出租. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </>
  );
}