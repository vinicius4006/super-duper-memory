import React, { useEffect, useContext } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AppBar from "../../components/AppBar";
import Card from "../../components/Card";

import { styles } from "./styles";
import { styles as stylesBtn } from "../Signin/styles";
import { styles as stylesTxt } from "../../components/Card/styles";
import CardContext from "../../contexts/controllerCard";
import Search from "../../components/Search";


const Dashboard: React.FC = () => {
  const { loadData, cards } = useContext(CardContext);
  const navigation = useNavigation();
  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <AppBar />
      <Search />
      <View style={styles.container}>
        {cards.length == 0 ? (
          <>
            <View>
              <Text style={stylesTxt.cardTitle}>Sem Tarefas!</Text>
            </View>
          </>
        ) : (
          <></>
        )}

        <FlatList
          data={cards}
          renderItem={(itemInfo) => (
            <Card key={itemInfo.index} card={itemInfo.item} />
          )}
          keyExtractor={(itemInfo) => itemInfo.id.toString()}
          numColumns={1}
          contentContainerStyle={styles.containerList}
        />

        <View style={styles.btn}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("CriarTarefa" as never);
            }}
            style={stylesBtn.button}
          >
            <Text style={stylesBtn.buttonText}>+ Criar nova tarefa</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Dashboard;
