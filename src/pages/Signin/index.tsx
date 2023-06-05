import React, { useContext } from "react";
import { View, Button, StyleSheet } from "react-native";
import AuthContext from "../../contexts/auth";

import { signIn } from "../../services/auth";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

const SignIn: React.FC = () => {
  const { signed, user, token } = useContext(AuthContext);
  console.log(signed, user, token);
  const handleSign = async () => {
    const response = await signIn();
    console.log(response);
  }
  return (
    <View style={styles.container}>
      <Button title="Sign In" onPress={handleSign} />
    </View>
  );
};

export default SignIn;
