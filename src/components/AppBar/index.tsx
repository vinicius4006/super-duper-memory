import React, { useContext } from "react";
import { View, Image, Button } from "react-native";
import AuthContext from "../../contexts/auth";
import { styles } from "./styles";

const AppBar = () => {
  const { signOut } = useContext(AuthContext);

  const handleSignOut = () => {
    signOut();
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/new_q2.png")}
        style={styles.image}
      />
      <View style={styles.buttonContainer}>
        <Button title="Sign Out" onPress={handleSignOut} color={'white'}  />
      </View>
    </View>
  );
};

export default AppBar;
