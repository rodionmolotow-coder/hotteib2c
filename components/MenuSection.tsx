import React, { useState } from 'react';
import { CATEGORIES, MENU_ITEMS } from '../constants';
import { Category, Product } from '../types';

interface MenuSectionProps {
  addToCart: (product: Product) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-16 container mx-auto px-4 bg-stone-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-stone-800 mb-4 uppercase tracking-tight">Каталог меню</h2>
        <div className="h-1 w-20 bg-red-600 mx-auto rounded-full mb-6"></div>
        <p className="text-stone-500 text-lg max-w-xl mx-auto">
          Сеты для команд, индивидуальные ланчи и решения для мероприятий. 
          <br/>Все позиции доступны к заказу от юридического лица.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 sticky top-20 z-30 py-4 bg-stone-50/90 backdrop-blur-sm transition-all">
        <button
          onClick={() => setActiveCategory('All')}
          className={`px-6 py-3 rounded-lg text-sm font-bold transition-all uppercase tracking-wide ${
            activeCategory === 'All' 
              ? 'bg-red-600 text-white shadow-lg shadow-red-200' 
              : 'bg-white text-stone-600 shadow-sm hover:shadow-md border border-stone-200'
          }`}
        >
          Весь каталог
        </button>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-3 rounded-lg text-sm font-bold transition-all uppercase tracking-wide ${
              activeCategory === cat 
                ? 'bg-red-600 text-white shadow-lg shadow-red-200' 
                : 'bg-white text-stone-600 shadow-sm hover:shadow-md border border-stone-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredItems.map(item => (
          <div key={item.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden border border-stone-100">
            <div className="relative h-64 overflow-hidden bg-stone-100">
              <img 
                src={item.imageUrl} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {item.category === Category.OFFICE_SETS && (
                <div className="absolute top-4 left-4 bg-stone-900 text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-widest shadow-lg">
                  Top Choice
                </div>
              )}
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg text-stone-900 leading-tight">{item.name}</h3>
              </div>
              
              <div className="mb-4">
                 <span className="text-[10px] font-bold text-stone-500 bg-stone-100 px-2 py-1 rounded uppercase tracking-wide">
                  {item.pieces} шт • {item.calories} ккал
                </span>
              </div>
              
              <p className="text-stone-500 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">{item.description}</p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100">
                <span className="text-2xl font-black text-stone-900">{item.price} ₽</span>
                <button 
                  onClick={() => addToCart(item)}
                  className="bg-white border-2 border-stone-100 hover:border-red-600 hover:text-red-600 text-stone-900 px-4 py-2 rounded-lg font-bold transition-all flex items-center gap-2 text-sm uppercase tracking-wide"
                >
                  <span>В заказ</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};