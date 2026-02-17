import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { CartSidebar } from './components/CartSidebar';
import { AiConsultant } from './components/AiConsultant';
import { CartItem, Product } from './types';

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scrolling for header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter((item): item is CartItem => item !== null);
    });
  };

  const scrollToMenu = () => {
    const menuElement = document.getElementById('menu');
    menuElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Header 
        cart={cart} 
        setIsCartOpen={setIsCartOpen} 
        isScrolled={isScrolled}
      />
      
      <main className="flex-grow">
        <Hero scrollToMenu={scrollToMenu} />
        <MenuSection addToCart={addToCart} />
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
                 <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white font-black text-lg">Х</div>
                 <h4 className="text-white font-black text-xl tracking-tight">ХОТТЭЙ</h4>
            </div>
            <p className="text-sm leading-relaxed">
              Самая вкусная доставка роллов в Ижевске. <br/>
              Готовим с любовью, доставляем с улыбкой.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Клиентам</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="#" className="hover:text-red-500 transition-colors">Меню</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Акции и скидки</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Зоны доставки</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Отзывы</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Контакты</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li className="flex items-center gap-2">
                <span className="text-red-500">📞</span> +7 (3412) 55-00-55
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500">📍</span> г. Ижевск, ул. Пушкинская, 200
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500">⏰</span> Ежедневно 10:00 - 23:00
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Мы в соцсетях</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-all">
                VK
              </a>
              <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-all">
                TG
              </a>
            </div>
            <p className="mt-6 text-xs text-stone-600">
               Принимаем к оплате карты и наличные
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-16 pt-8 border-t border-stone-800 text-center text-xs text-stone-600">
          © 2024 Хоттэй Ижевск. Все права защищены. <br/>
          Сайт не является публичной офертой.
        </div>
      </footer>

      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart} 
        updateQuantity={updateQuantity}
      />

      <AiConsultant />
    </div>
  );
}

export default App;