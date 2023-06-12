import React, { useEffect, useContext, useState } from "react";
import { View, Text, TextInput } from "react-native";

import AppBar from "../../components/AppBar";

import { styles } from "./styles";

import CardContext from "../../contexts/controllerCard";
import { CardInfo } from "../../data/Card";
import { Button } from "react-native-elements";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const CriarTarefa: React.FC = () => {
  const [card, setCard] = useState<CardInfo>(
    new CardInfo(0, false, "", "", "", "")
  );
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  const { loadData, cards } = useContext(CardContext);

  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <AppBar />
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Tarefas de Hoje</Text>
          <Text style={styles.subtitle}>
            Descreva brevemente a sua tarefa e adicione um prazo.
          </Text>
        </View>
        <View style={{ marginTop: 15 }}>
          <Text style={styles.label}>Dê um título para a sua tarefa</Text>
          <TextInput
            placeholder="Descrição tarefas"
            value={card?.text}
            onChangeText={(text) => {
              setCard((prevCard) => {
                const newCard = { ...prevCard };
                newCard.text = text;
                return newCard;
              });
            }}
            style={styles.input}
          />
          <View style={{ padding: 10 }} />
          <Text style={styles.label}>Horário limite</Text>
          <TextInput
            placeholder="12:00"
            value={card?.text}
            keyboardType="numeric"
            onChangeText={(text) => {
              setCard((prevCard) => {
                const newCard = { ...prevCard };
                newCard.text = text;
                return newCard;
              });
            }}
            style={styles.input}
          />
          <View style={{ padding: 10 }} />
          <Text style={styles.label}>Data limite</Text>
          <Button title="Show Date Picker" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            style={{backgroundColor:"#000"}}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
        <Button
          title="Salvar tarefa"
          buttonStyle={styles.button}
          onPress={() => {}}
        />
      </View>
    </>
  );
};

export default CriarTarefa;
