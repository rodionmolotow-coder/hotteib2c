export enum Category {
  OFFICE_SETS = 'Сеты для офиса',
  CATERING = 'Кейтеринг',
  BUSINESS_LUNCH = 'Бизнес-ланчи',
  PREMIUM = 'Премиум для встреч',
  DRINKS = 'Напитки'
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  imageUrl: string;
  calories?: number;
  pieces: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface AiMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}