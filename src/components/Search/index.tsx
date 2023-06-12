import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Dimensions,
} from "react-native";
import { styles } from "./styles";
import { Status, Tags } from "../../data/enums";
import { Button } from "react-native-elements";
import CardContext from "../../contexts/controllerCard";

const Search = () => {
  const { width, height } = Dimensions.get("window");
  const modalWidth = width * 0.8;
  const modalHeight = height * 0.5;
  const [modalVisible, setModalVisible] = useState(false);
  const [listaTagEmpresa, setListaTagEmpresa] = useState<boolean[]>([]);
  const [listaTagStatus, setListaTagStatus] = useState<boolean[]>([]);
  const { filtrarTags } = useContext(CardContext);
  useEffect(() => {
    Object.values(Tags).forEach(() =>
      setListaTagEmpresa((prev) => {
        const newArray = [...prev, false];
        return newArray;
      })
    );
    Object.values(Status).forEach(() =>
      setListaTagStatus((prev) => {
        const newArray = [...prev, false];
        return newArray;
      })
    );
  }, []);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const filtrar = () => {
    const tagsEmpresa: string[] = [];
    let tagsStatus: boolean | null = null;
    console.log("EITA", listaTagEmpresa, listaTagStatus);
    if (
      listaTagEmpresa.some((v) => v === true) ||
      listaTagStatus.some((v) => v === true)
    ) {
      Object.values(Tags).forEach((e, idx) => {
        if (listaTagEmpresa[idx]) {
          tagsEmpresa.push(e);
        }
      });
      Object.values(Status).forEach((s, idx) => {
        tagsStatus = listaTagStatus[idx];
      });
    }

    filtrarTags(tagsEmpresa, tagsStatus);
    closeModal();
  };

  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  const formattedDate = currentDate.toLocaleDateString("pt-BR", options);
  const formattedDateCapitalized = formattedDate.replace(/\b\w/g, (match) =>
    match.toUpperCase()
  );

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Tarefas de Hoje</Text>
        <Text>{formattedDateCapitalized}</Text>
      </View>
      <TouchableOpacity onPress={openModal}>
        <View style={styles.filtro}>
          <Image
            source={require("../../../assets/filter.png")}
            style={styles.image}
          />
          <Text style={{ color: "white" }}>Filtrar</Text>
        </View>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.containerModal}>
          <View
            style={[styles.modal, { width: modalWidth, height: modalHeight }]}
          >
            <Text style={styles.title}>Filtro</Text>
            <Text style={styles.subtitle}>Filtro por empresa:</Text>
            <View style={styles.sidebyside}>
              {Object.values(Tags).map((tag, idx) => (
                <Button
                  key={idx}
                  title={tag}
                  titleStyle={{ fontSize: 12 }}
                  type={listaTagEmpresa[idx] ? "solid" : "outline"}
                  onPress={() => {
                    setListaTagEmpresa((prev) => {
                      const newArray = [...prev];
                      newArray[idx] = !newArray[idx];
                      return newArray;
                    });
                  }}
                />
              ))}
            </View>
            <Text style={styles.subtitle}>Filtro por status da tarefa: </Text>
            <View style={styles.sidebyside}>
              {Object.values(Status).map((status, idx) => (
                <Button
                  key={idx}
                  title={status}
                  titleStyle={{ fontSize: 12 }}
                  type={listaTagStatus[idx] ? "solid" : "outline"}
                  onPress={() => {
                    setListaTagStatus((prev) => {
                      const newArray = [...prev];
                      newArray[idx] = !newArray[idx];
                      return newArray;
                    });
                  }}
                />
              ))}
            </View>
            <Button
              title="Filtrar"
              type="outline"
              buttonStyle={{ borderRadius: 15, marginTop: 30 }}
              onPress={filtrar}
            />
            <Button
              title="Fechar"
              buttonStyle={{ borderRadius: 15, marginTop: 30 }}
              onPress={closeModal}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Search;
