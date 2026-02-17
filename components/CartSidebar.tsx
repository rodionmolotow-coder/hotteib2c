import React from 'react';
import { CartItem } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  updateQuantity: (id: string, delta: number) => void;
}

export const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, cart, updateQuantity }) => {
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryCost = subtotal > 1500 ? 0 : 200;
  const total = subtotal + deliveryCost;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-stone-900/60 z-50 transition-opacity duration-300 backdrop-blur-sm ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform duration-300 flex flex-col ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6 border-b border-stone-100 flex items-center justify-between bg-white">
          <h2 className="text-2xl font-black text-stone-800">Ваш заказ 😋</h2>
          <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full transition-colors text-stone-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-stone-400">
              <div className="w-24 h-24 bg-stone-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-4xl">🥡</span>
              </div>
              <p className="text-lg font-medium">Тут пока пусто</p>
              <p className="text-sm text-stone-400 mb-6">Добавьте роллы из меню</p>
              <button onClick={onClose} className="text-red-600 font-bold hover:bg-red-50 px-6 py-2 rounded-full transition-colors">Перейти в меню</button>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex gap-4 p-3 bg-stone-50 rounded-2xl">
                <img src={item.imageUrl} alt={item.name} className="w-20 h-20 rounded-xl object-cover" />
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <h3 className="font-bold text-stone-800 leading-tight">{item.name}</h3>
                    <p className="text-sm text-stone-500 font-medium">{item.price} ₽</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-7 h-7 flex items-center justify-center bg-white border border-stone-200 rounded-lg hover:border-red-400 hover:text-red-500 transition-colors shadow-sm font-bold text-stone-600"
                    >
                      -
                    </button>
                    <span className="w-6 text-center font-bold text-stone-800">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-7 h-7 flex items-center justify-center bg-white border border-stone-200 rounded-lg hover:border-red-400 hover:text-red-500 transition-colors shadow-sm font-bold text-stone-600"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="font-bold text-lg text-stone-800 self-end">
                  {item.price * item.quantity} ₽
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 bg-white border-t border-stone-100 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-stone-600">
                <span>Сумма заказа</span>
                <span className="font-medium">{subtotal} ₽</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Доставка</span>
                <span className={`font-medium ${deliveryCost === 0 ? 'text-green-600' : ''}`}>
                    {deliveryCost === 0 ? 'Бесплатно' : `${deliveryCost} ₽`}
                </span>
              </div>
              {deliveryCost > 0 && (
                  <div className="text-xs text-stone-400 text-right">
                      До бесплатной доставки еще {1500 - subtotal} ₽
                  </div>
              )}
              <div className="flex justify-between text-2xl font-black text-stone-900 pt-4 border-t border-dashed border-stone-200">
                <span>Итого</span>
                <span>{total} ₽</span>
              </div>
            </div>
            
            <button className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-red-200 transform hover:scale-[1.02] flex justify-center items-center gap-2">
              <span>Оформить заказ</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </>
  );
};