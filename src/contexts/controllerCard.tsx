import { createContext, useState } from "react";
import { CardInfo } from "../data/Card";

const CardContext = createContext<CardContextData>({} as CardContextData);

interface CardContextData {
  cards: CardInfo[];
  loadData(): void;
  removerCard(id: number): void;
}

export const CardProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [cards, setCards] = useState<CardInfo[]>([]);

  const loadData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setCards([
      new CardInfo(1, true, "Exemplo de texto", "8:00", "13/06", "básico"),
      new CardInfo(2, false, "Exemplo de texto 2", "9:00", "14/06", "urgente"),
      new CardInfo(4, false, "Exemplo de texto 3", "10:00", "15/06", "mercado"),
      new CardInfo(5, false, "Exemplo de texto 3", "10:00", "15/06", "mercado"),
      new CardInfo(6, false, "Exemplo de texto 3", "10:00", "15/06", "mercado"),
      new CardInfo(7, false, "Exemplo de texto 3", "10:00", "15/06", "mercado"),
      new CardInfo(8, false, "Exemplo de texto 3", "10:00", "15/06", "mercado"),
      new CardInfo(9, false, "Exemplo de texto 3", "10:00", "15/06", "mercado"),
      new CardInfo(10, false, "Exemplo de texto 3", "10:00", "15/06", "mercado"),
      new CardInfo(11, false, "Exemplo de texto 3", "10:00", "15/06", "mercado"),
      new CardInfo(12, false, "Exemplo de texto 3", "10:00", "15/06", "mercado"),
      new CardInfo(13, false, "Exemplo de texto 3", "10:00", "15/06", "mercado"),
      new CardInfo(14, false, "Exemplo de texto 3", "10:00", "15/06", "mercado"),
    ]);
  };

  const removerCard = async (id: number) => {
    const newCards = cards.filter((c) => c.id !== id);
    setCards(newCards);
  };

  return (
    <CardContext.Provider value={{ loadData, cards, removerCard }}>
      {children}
    </CardContext.Provider>
  );
};

export default CardContext;
