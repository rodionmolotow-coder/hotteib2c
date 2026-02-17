import React from 'react';
import { CartItem } from '../types';

interface HeaderProps {
  cart: CartItem[];
  setIsCartOpen: (isOpen: boolean) => void;
  isScrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ cart, setIsCartOpen, isScrolled }) => {
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled ? 'bg-white shadow-md py-3 border-stone-100' : 'bg-stone-900/80 backdrop-blur-md py-4 border-white/10'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className={`w-10 h-10 rounded-sm flex items-center justify-center font-black text-xl shadow-lg transition-colors ${isScrolled ? 'bg-red-600 text-white' : 'bg-white text-red-600'}`}>
            B2B
          </div>
          <div className="flex flex-col">
             <span className={`font-black text-xl tracking-tight leading-none ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
                ХОТТЭЙ
            </span>
            <span className={`text-[10px] font-bold uppercase tracking-widest ${isScrolled ? 'text-stone-500' : 'text-stone-400'}`}>
                Business Delivery
            </span>
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className={`hidden md:flex gap-8 font-bold text-xs uppercase tracking-widest ${isScrolled ? 'text-stone-600' : 'text-stone-300'}`}>
          <a href="#" className="hover:text-red-500 transition-colors">Меню</a>
          <a href="#" className="hover:text-red-500 transition-colors">Кейтеринг</a>
          <a href="#" className="hover:text-red-500 transition-colors">Корпоративным клиентам</a>
          <a href="#" className="hover:text-red-500 transition-colors">Договор</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button 
            className={`hidden md:block px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wide transition-all border ${
              isScrolled 
                ? 'border-stone-200 text-stone-800 hover:border-red-600 hover:text-red-600' 
                : 'border-white/20 text-white hover:bg-white hover:text-stone-900'
            }`}
          >
            Личный кабинет
          </button>
          
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 group"
            aria-label="Открыть корзину"
          >
            <div className={`p-2 rounded-lg transition-colors ${isScrolled ? 'hover:bg-stone-100 text-stone-800' : 'hover:bg-white/10 text-white'}`}>
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className="w-6 h-6"
                >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
            </div>
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border border-white shadow-sm">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};