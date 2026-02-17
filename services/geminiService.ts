import { GoogleGenAI } from "@google/genai";
import { MENU_ITEMS } from "../constants";

// Safely initialize the AI client
const apiKey = process.env.API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  try {
    ai = new GoogleGenAI({ apiKey });
  } catch (error) {
    console.error("Gemini AI initialization failed:", error);
  }
}

const SYSTEM_INSTRUCTION = `
Вы — персональный менеджер по работе с корпоративными клиентами службы доставки "Хоттэй" (B2B).
Ваша задача — помогать офис-менеджерам, секретарям и руководителям организовывать питание для сотрудников и партнеров.

Доступное меню (JSON):
${JSON.stringify(MENU_ITEMS.map(i => ({ name: i.name, id: i.id, desc: i.description, category: i.category, price: i.price })))}

Правила:
1. Стиль общения: Деловой, но дружелюбный и профессиональный. Обращайтесь на "Вы".
2. Акцентируйте внимание на удобстве для бизнеса: "удобно есть руками", "не пачкает документы", "премиальный вид для гостей", "сытно для сотрудников".
3. Для совещаний предлагайте "Сет Переговоры" или премиум роллы.
4. Для корпоративов предлагайте большие сеты и кейтеринг.
5. Для ежедневного питания предлагайте бизнес-ланчи.
6. Если спрашивают про документы, отвечайте, что предоставляете полный пакет закрывающих документов и работаете с НДС.
`;

export const getGeminiRecommendation = async (userPrompt: string): Promise<string> => {
  if (!ai) {
    console.warn("Gemini API Key is missing or invalid.");
    return "Система ИИ временно недоступна (требуется настройка API ключа). Пожалуйста, выберите блюда из меню самостоятельно.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "Извините, я уточняю информацию у шеф-повара. Повторите, пожалуйста, ваш запрос.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "В данный момент линия перегружена. Пожалуйста, оставьте заявку по телефону или выберите готовые сеты из меню.";
  }
};