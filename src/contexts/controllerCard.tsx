import { createContext, useState } from "react";
import { CardInfo } from "../data/Card";
import { Status, Tags } from "../data/enums";

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
    const mock = [
      new CardInfo(1, true, "Exemplo de texto", "8:00", "13/06", Tags.Q2BANK),
      new CardInfo(
        2,
        false,
        "Exemplo de texto 2",
        "9:00",
        "14/06",
        Tags.Q2INGRESSOS
      ),
      new CardInfo(
        4,
        false,
        "Exemplo de texto 3",
        "10:00",
        "15/06",
        Tags.Q2PAY
      ),
      new CardInfo(
        5,
        false,
        "Exemplo de texto 3",
        "10:00",
        "15/06",
        Tags.Q2BANK
      ),
      new CardInfo(
        6,
        false,
        "Exemplo de texto 3",
        "10:00",
        "15/06",
        Tags.Q2INGRESSOS
      ),
      new CardInfo(
        7,
        false,
        "Exemplo de texto 3",
        "10:00",
        "15/06",
        Tags.Q2PAY
      ),
      new CardInfo(
        8,
        false,
        "Exemplo de texto 3",
        "10:00",
        "15/06",
        Tags.Q2BANK
      ),
      new CardInfo(
        9,
        false,
        "Exemplo de texto 3",
        "10:00",
        "15/06",
        Tags.Q2INGRESSOS
      ),
      new CardInfo(
        10,
        false,
        "Exemplo de texto 3",
        "10:00",
        "15/06",
        Tags.Q2PAY
      ),
      new CardInfo(
        11,
        false,
        "Exemplo de texto 3",
        "10:00",
        "15/06",
        Tags.Q2BANK
      ),
      new CardInfo(
        12,
        false,
        "Exemplo de texto 3",
        "10:00",
        "15/06",
        Tags.Q2INGRESSOS
      ),
      new CardInfo(
        13,
        false,
        "Exemplo de texto 3",
        "10:00",
        "15/06",
        Tags.Q2PAY
      ),
      new CardInfo(
        14,
        false,
        "Exemplo de texto 3",
        "10:00",
        "15/06",
        Tags.Q2BANK
      ),
    ];
    setCards(mock);
    setCpCards(mock);
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
    setCards((prevCards) => [...prevCards, card]);
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
