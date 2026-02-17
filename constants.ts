import { Product, Category } from './types';

export const MENU_ITEMS: Product[] = [
  // Office Sets
  {
    id: 'off1',
    name: 'Сет "Переговоры"',
    description: 'Строгий и изысканный набор. Филадельфия, Канада, Маки с огурцом. Идеально для встречи с партнерами (3-4 персоны).',
    price: 1890,
    category: Category.OFFICE_SETS,
    imageUrl: 'https://images.unsplash.com/photo-1617196019815-205e0e5bbf7f?q=80&w=800&auto=format&fit=crop',
    pieces: 32,
    calories: 1100
  },
  {
    id: 'off2',
    name: 'Сет "Корпоратив XL"',
    description: 'Масштабное решение для всего отдела. Ассорти из 8 видов роллов. Выгодное предложение для пятничного вечера.',
    price: 4990,
    category: Category.OFFICE_SETS,
    imageUrl: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=800&auto=format&fit=crop',
    pieces: 96,
    calories: 3200
  },
  
  // Catering
  {
    id: 'cat1',
    name: 'Фуршетный набор "Канапе"',
    description: 'Элегантные суши-канапе для удобного потребления стоя. Лосось, тунец, креветка.',
    price: 2500,
    category: Category.CATERING,
    imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800&auto=format&fit=crop',
    pieces: 24,
    calories: 800
  },
  {
    id: 'cat2',
    name: 'Плато "Морской бриз"',
    description: 'Премиальная нарезка сашими и гунканов для VIP-мероприятий.',
    price: 3800,
    category: Category.CATERING,
    imageUrl: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?q=80&w=800&auto=format&fit=crop',
    pieces: 16,
    calories: 600
  },

  // Business Lunch
  {
    id: 'bl1',
    name: 'Ланч "Сотрудник месяца"',
    description: 'Сбалансированный обед: Мисо суп, Ролл Калифорния (4 шт), Суши с лососем (2 шт).',
    price: 450,
    category: Category.BUSINESS_LUNCH,
    imageUrl: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=800&auto=format&fit=crop',
    pieces: 6,
    calories: 450
  },
  {
    id: 'bl2',
    name: 'Ланч "Энергия"',
    description: 'Питательный обед для продуктивной работы. Запеченный ролл с курицей, салат Чука.',
    price: 390,
    category: Category.BUSINESS_LUNCH,
    imageUrl: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=800&auto=format&fit=crop',
    pieces: 8,
    calories: 520
  },

  // Premium for meetings
  {
    id: 'pm1',
    name: 'Черный Трюфель & Краб',
    description: 'Эксклюзивный ролл для особых гостей. Натуральный краб, трюфельное масло, черная икра.',
    price: 950,
    category: Category.PREMIUM,
    imageUrl: 'https://images.unsplash.com/photo-1563612116625-3012372fccce?q=80&w=800&auto=format&fit=crop',
    pieces: 8,
    calories: 380
  },
  
  // Drinks
  {
    id: 'd1',
    name: 'Набор воды (6 шт)',
    description: 'Минеральная вода премиум-класса для переговорной (стекло 0.5л).',
    price: 900,
    category: Category.DRINKS,
    imageUrl: 'https://images.unsplash.com/photo-1523362628408-2559157428e0?q=80&w=800&auto=format&fit=crop',
    pieces: 6,
    calories: 0
  }
];

export const CATEGORIES = Object.values(Category);