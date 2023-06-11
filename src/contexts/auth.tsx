import React, { createContext, useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";

import * as auth from "../services/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { FirebaseError } from "firebase/app";
import { errorMsg } from "../config/errors";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthContextData {
  signed: boolean;
  user: object | null;
  loading: boolean;
  signIn(obj: any): void;
  signUp(obj: any): void;
  signOut(): void;
}

export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [user, setUser] = useState<object | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadStorageData = async () => {
      const storagedUser = await AsyncStorage.getItem("@RNAuth:user");
      const storagedToken = await AsyncStorage.getItem("@RNAuth:token");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
      }
      setLoading(false);
    };

    loadStorageData();
  });

  const signIn = async (objForm: any) => {
    setLoading(true);
    try {
      const response = await auth.signIn(objForm);
      await AsyncStorage.setItem(
        "@RNAuth:user",
        JSON.stringify(response.user.email)
      );
      const token = await response.user.getIdToken();
      await AsyncStorage.setItem("@RNAuth:token", token);
      setUser(response);
    } catch (err) {
      const error = err as FirebaseError;
      Alert.alert("Erro", errorMsg(error), [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      console.log("error login: ", err);
    }
  };
  const signUp = async (objForm: any) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    try {
      const response = await auth.signUp(objForm);

      await AsyncStorage.setItem(
        "@RNAuth:user",
        JSON.stringify(response.user.email)
      );
      const token = await response.user.getIdToken();
      await AsyncStorage.setItem("@RNAuth:token", token);
      setUser(response);
    } catch (err) {
      console.log("register error: ", err);
    }
  };

  const signOut = async () => {
    await AsyncStorage.clear();
    setUser(null);
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    );
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signIn, signUp, signOut, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
