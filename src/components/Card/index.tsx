import React, { useContext, useState } from "react";
import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { CheckBox } from "react-native-elements";
import CardContext from "../../contexts/controllerCard";
import { CardInfo } from "../../data/Card";

const { width, height } = Dimensions.get("window");
const cardWidth = width * 0.8;
const cardHeight = height * 0.15;

const Card = ({ card }: { card: CardInfo }) => {
  const [cardInfo, setCardInfo] = useState<CardInfo>(card);
  const { removerCard } = useContext(CardContext);


  return (
    <View
      style={[styles.cardContainer, { width: cardWidth, height: cardHeight }]}
    >
      <View
        style={[
          styles.sideBar,
          { backgroundColor: cardInfo.checked ? "#6ecf42" : "#0494fc" },
        ]}
      />
      <View style={styles.contentContainer}>
        <View style={styles.row}>
          <CheckBox
            checked={cardInfo.checked}
            checkedColor="green"
            onPress={() => {
              setCardInfo((prevCardInfo) => ({
                ...prevCardInfo,
                checked: !prevCardInfo.checked,
              }));
            }}
          />

          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>{cardInfo.text}</Text>
          </View>
         
          <TouchableOpacity onPress={() => {
            removerCard(card.id);
          }}>
          <Image
            source={require("../../../assets/trash-bin.png")}
            style={styles.image}
          />
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <Text>{cardInfo.horaTarefa}</Text>

          <Text>{cardInfo.diaTarefa}</Text>

          <View style={styles.tag}>
            <Text style={{ color: "#0494fc" }}>{cardInfo.tag}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;
