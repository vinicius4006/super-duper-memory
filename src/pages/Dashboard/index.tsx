import React, { useEffect, useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import AppBar from "../../components/AppBar";
import Card from "../../components/Card";

import { styles } from "./styles";
import { styles as stylesBtn } from "../Signin/styles";
import { styles as stylesTxt } from "../../components/Card/styles";
import CardContext from "../../contexts/controllerCard";

const Dashboard: React.FC = () => {
  const { loadData, cards } = useContext(CardContext);

  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <AppBar />

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
        <ScrollView>
          <FlatList
            data={cards}
            renderItem={(itemInfo) => (
              <Card key={itemInfo.index} card={itemInfo.item} />
            )}
            keyExtractor={(itemInfo) => itemInfo.id.toString()}
            numColumns={1}
            contentContainerStyle={styles.container}
          />
        </ScrollView>
        <View style={styles.btn}>
          <TouchableOpacity onPress={() => {}} style={stylesBtn.button}>
            <Text style={stylesBtn.buttonText}>+ Criar nova tarefa</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Dashboard;
