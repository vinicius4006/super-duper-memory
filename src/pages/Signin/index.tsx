import React, { useContext, useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AuthContext from "../../contexts/auth";

import { styles } from "./styles";
const SignIn: React.FC = () => {
  const { signIn, signUp } = useContext(AuthContext);

  const [userForm, setUserForm] = useState({ email: "", password: "" });
  const [errorForm, setErrorForm] = useState({ email: false, password: false });
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSign = () => {
    if (!errorForm.email && !errorForm.password) {
      signIn(userForm);
    }
  };
  const handleSignUp = () => {
    if (!errorForm.email && !errorForm.password) {
      signUp(userForm);
    }
  };

  useEffect(() => {});

  return (
    <>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("../../../assets/new_q2.png")}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            value={userForm.email}
            onChangeText={(email) => {
              setUserForm((prevForm) => {
                const newForm = { ...prevForm };
                newForm.email = email;
                return newForm;
              });
              setErrorForm((prevForm) => {
                const newForm = { ...prevForm };
                newForm.email = !emailRegex.test(email);
                return newForm;
              });
            }}
            style={errorForm.email ? styles.inputError : styles.input}
          />
          {errorForm.email ? (
            <Text style={styles.errorMsg}>{"* E-mail inválida"}</Text>
          ) : null}
          <TextInput
            placeholder="Senha"
            value={userForm.password}
            onChangeText={(password) => {
              setUserForm((prevForm) => {
                const newErrorForm = { ...prevForm };
                newErrorForm.password = password;
                return newErrorForm;
              });
              setErrorForm((prevForm) => {
                const newErrorForm = { ...prevForm };
                newErrorForm.password = password.trim() === "";
                return newErrorForm;
              });
            }}
            style={errorForm.password ? styles.inputError : styles.input}
            secureTextEntry
          />
          {errorForm.password ? (
            <Text style={styles.errorMsg}>{"* Senha inválida"}</Text>
          ) : null}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSign} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSignUp}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Registrar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;
