import React, { useEffect, useContext, useState } from "react";
import { View, Text, TextInput } from "react-native";

import AppBar from "../../components/AppBar";

import { styles } from "./styles";

import CardContext from "../../contexts/controllerCard";
import { CardInfo } from "../../data/Card";
import { Button, Input } from "react-native-elements";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Tags } from "../../data/enums";
import { useNavigation } from "@react-navigation/native";

const CriarTarefa: React.FC = () => {
  const [card, setCard] = useState<CardInfo>(
    new CardInfo(0, false, "", "", "", "")
  );
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const navigation = useNavigation();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    setCard((prevCard) => {
      const newCard = { ...prevCard };
      newCard.diaTarefa = date.toLocaleDateString();
      return newCard;
    });

    hideDatePicker();
  };

  const { loadData, salvarTarefa } = useContext(CardContext);

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
            value={card?.horaTarefa}
            keyboardType="numeric"
            autoCapitalize="none"
            returnKeyType="done"
            onChangeText={(text) => {
              let formattedText = text.replace(/\D/g, "");
              formattedText = formattedText.replace(
                /^(\d{2})(\d{1,2})$/,
                "$1:$2"
              );

              setCard((prevCard) => {
                const newCard = { ...prevCard };
                newCard.horaTarefa = formattedText;
                return newCard;
              });
            }}
            style={styles.input}
          />
          <View style={{ padding: 10 }} />
          <Text style={styles.label}>Data limite</Text>
          <Button title="Escolher data" onPress={showDatePicker} />
          <DateTimePickerModal
            minimumDate={new Date()}
            isVisible={isDatePickerVisible}
            style={{ backgroundColor: "#000" }}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <Text style={{ padding: 10 }}>Data escolhida: {card.diaTarefa}</Text>
          <View style={{ padding: 10 }} />
          <Text style={{ padding: 10 }}>Selecione uma empresa: </Text>

          <View style={styles.sidebyside}>
            {Object.values(Tags).map((tag, idx) => (
              <Button
                style={{ marginLeft: 10, borderRadius: 15 }}
                key={idx}
                title={tag}
                titleStyle={{ fontSize: 12 }}
                type={card.tag == tag ? "solid" : "outline"}
                onPress={() => {
                  setCard((prevCard) => {
                    const newCard = { ...prevCard };
                    newCard.tag = tag;
                    return newCard;
                  });
                }}
              />
            ))}
          </View>
        </View>
        <Button
          title="Salvar tarefa"
          buttonStyle={styles.button}
          onPress={() => {
     
            if (
              card.text.length !== 0 &&
              card.horaTarefa.length !== 0 &&
              card.diaTarefa.length !== 0 &&
              card.tag.length !== 0
            ) {
              salvarTarefa(card);
              setTimeout(() => {
                navigation.goBack();
              }, 1000);
            } 
          }}
        />
      </View>
    </>
  );
};

export default CriarTarefa;
