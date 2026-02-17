import React from 'react';

interface HeroProps {
  scrollToMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ scrollToMenu }) => {
  return (
    <section className="relative h-[650px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" 
          alt="Корпоративное питание суши" 
          className="w-full h-full object-cover"
        />
        {/* Professional, darker gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/80 to-red-900/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-left text-white mt-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 py-1 px-4 border border-red-500/50 rounded-full bg-red-600/20 backdrop-blur-sm text-sm font-bold mb-6 uppercase tracking-widest text-red-100">
              <span>💼</span> B2B Сервис
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
              ВКУСНЫЕ РЕШЕНИЯ <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">ДЛЯ ВАШЕГО БИЗНЕСА</span>
            </h1>
            
            <p className="text-lg md:text-xl text-stone-300 mb-10 max-w-xl font-light leading-relaxed">
              Организуем корпоративное питание, кофе-брейки и кейтеринг для мероприятий. 
              Специальные условия для юридических лиц и офисов Ижевска.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToMenu}
                className="px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-red-900/20 flex items-center justify-center gap-2"
              >
                <span>Выбрать меню</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              
              <button className="px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white font-bold rounded-xl transition-all backdrop-blur-sm">
                Стать корпоративным клиентом
              </button>
            </div>
          </div>

          {/* Promo Block */}
          <div className="hidden lg:block w-80">
            <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden group hover:border-red-500/30 transition-colors">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-red-600/20 rounded-full blur-3xl group-hover:bg-red-600/40 transition-all"></div>
              
              <h3 className="text-xl font-bold mb-2">Акция для новых партнеров</h3>
              <p className="text-stone-300 text-sm mb-4">
                Заключите договор на обслуживание и получите скидку <span className="text-white font-bold">20%</span> на первый месяц.
              </p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold">
                  %
                </div>
                <div>
                  <div className="text-xs text-stone-400 uppercase">Промокод</div>
                  <div className="font-mono font-bold tracking-wider">B2B_START</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};