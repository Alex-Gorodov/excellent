import { ChatMessage } from "../../types/chatMessage";
import { users } from "./users";

/* -------------------- Фразы -------------------- */

export const chatPhrases = {
  customer: {
    positive: [
      "Everything looks good",
      "Thanks!",
      "Order received",
      "Great service!",
      "That works for me",
      "Perfect, thank you",
      "Appreciate your help",
    ],
    negative: [
      "I think I'll cancel the order",
      "Can you change delivery time?",
      "Is this product in stock?",
      "I need this urgently",
      "When will it be delivered?",
      "Can we change the quantity?",
      "This is taking too long",
    ],
  },

  manager: {
    positive: [
      "Your order has been confirmed",
      "Shipment has been dispatched",
      "Everything is in stock",
      "Delivery is scheduled",
      "Thank you for your order",
      "We appreciate your business",
      "Issue resolved successfully",
    ],
    negative: [
      "Unfortunately the item is out of stock",
      "Delivery might be delayed",
      "We are checking the issue",
      "There was a system error",
      "We need additional confirmation",
      "The requested change is not available",
    ],
  },
};

type Role = "customer" | "manager";
type Mood = "positive" | "negative";

/* -------------------- helpers -------------------- */

const getRandomUser = () =>
  users[Math.floor(Math.random() * users.length)];

export function getRandomChatPhrase(role: Role, mood: Mood) {
  const phrases = chatPhrases[role][mood];
  return phrases[Math.floor(Math.random() * phrases.length)];
}


export function generateChatForOrder(orderId: string) {
  const count = Math.floor(Math.random() * 2) + 3;

  return Array.from({ length: count }, (_, i) => {
    const isCustomer = i % 2 === 0;
    const mood = Math.random() > 0.7 ? "negative" : "positive";

    return {
      id: `msg-${orderId}-${i}`,
      orderId,
      date: new Date(Date.now() - (count - i) * 600000),
      message: getRandomChatPhrase(
        isCustomer ? "customer" : "manager",
        mood
      ),
      author: isCustomer ? users[0] : users[1],
      // viewed: i !== 0,
      viewed: true,
    };
  });
}

export function generateChatsForOrders(orderIds: string[]) {
  return orderIds.reduce<Record<string, ChatMessage[]>>((acc, id) => {
    acc[id] = generateChatForOrder(id);
    return acc;
  }, {});
}
