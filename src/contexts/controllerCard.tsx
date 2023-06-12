import { createContext, useState } from "react";
import { CardInfo } from "../data/Card";
import api from "../services/api";

const CardContext = createContext<CardContextData>({} as CardContextData);

interface CardContextData {
  cards: CardInfo[];
  loadData(): void;
  removerCard(id: number): void;
  filtrarTags(tagEmpresa: string[], tagStatus: boolean | null): void;
  salvarTarefa(card: CardInfo): void;
}

export const CardProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [cards, setCards] = useState<CardInfo[]>([]);
  const [cpCards, setCpCards] = useState<CardInfo[]>([]);

  const loadData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const data = await api.loadCards();
    setCards(data);
    setCpCards(data);
  };

  const removerCard = async (id: number) => {
    const newCards = cards.filter((c) => c.id !== id);
    setCards(newCards);
  };

  const filtrarTags = (tagEmpresa: string[], tagStatus: boolean | null) => {
    if (tagEmpresa.length === 0 && tagStatus === null) {
      setCards(cpCards);
    } else if (tagEmpresa.length !== 0 && tagStatus !== null) {
      const filteredCards = [...cpCards].filter(
        (c) => tagEmpresa.includes(c.tag) && c.checked === tagStatus
      );
      setCards(filteredCards);
    } else if (tagEmpresa.length !== 0 && tagStatus === null) {
      const filteredCards = [...cpCards].filter((c) =>
        tagEmpresa.includes(c.tag)
      );
      setCards(filteredCards);
    } else {
      const filteredCards = [...cpCards].filter(
        (c) => c.checked === !tagStatus
      );
      setCards(filteredCards);
    }
  };
  const salvarTarefa = async (card: CardInfo) => {
    await api.saveCard(card);
    loadData();
  };

  return (
    <CardContext.Provider
      value={{ loadData, cards, removerCard, filtrarTags, salvarTarefa }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardContext;
