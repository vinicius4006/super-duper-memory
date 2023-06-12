import axios from "axios";
import { CardInfo } from "../data/Card";
import * as FileSystem from "expo-file-system";

const filePath = `${FileSystem.documentDirectory}cards.json`;

const loadCards = async () => {
  try {
    const fileExists = await FileSystem.getInfoAsync(filePath);

    if (!fileExists.exists) {
      const initialData = JSON.stringify({ cards: [] });
      await FileSystem.writeAsStringAsync(filePath, initialData);
    }
    const fileData = await FileSystem.readAsStringAsync(filePath);

    const jsonData: { cards: CardInfo[] } = JSON.parse(fileData);
    return jsonData.cards;
  } catch (error) {
    console.error("Erro ao carregar o arquivo:", error);
    return [];
  }
};
const saveCard = async (card: CardInfo) => {
  try {
    const fileData = await FileSystem.readAsStringAsync(filePath);
    const jsonData: { cards: CardInfo[] } = JSON.parse(fileData);
    card.id = jsonData.cards.length + 1;
    jsonData.cards.push(card);

    const updatedJsonData = JSON.stringify(jsonData);

    await FileSystem.writeAsStringAsync(filePath, updatedJsonData);
  } catch (error) {
    console.error("Erro ao salvar o arquivo:", error);
  }
};

const updatedCard = async (card: CardInfo) => {};

export default { loadCards, saveCard };
