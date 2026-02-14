import { ChatMessage } from "../../types/chatMessage";

interface ChatMessageProps {
  message: ChatMessage;
}

export function OrderChatMessage({ message }: ChatMessageProps) {
  return (
    <div className={`order-chat-message ${!message.viewed ? 'order-chat-message--new' : ''}`}>
      <img
        className="order-chat-message__avatar"
        src={message.author.avatar}
        alt={message.author.name}
        width={55}
        height={55}
      />

      <div className="order-chat-message__body">
        <div className="order-chat-message__header">
          <p className="order-chat-message__author">
            {message.author.name}
          </p>
          <p className="order-chat-message__time">
            {message.date.toLocaleTimeString().slice(0,-3)}
          </p>
        </div>

        <p className="order-chat-message__text">
          {message.message}
        </p>
      </div>
    </div>
  );
}
