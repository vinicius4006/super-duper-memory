import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";

import AuthRoutes from "../routes/auth.routes";
import AuthContext from "../contexts/auth";
import AppRoutes from "./app.routes";
import { CardProvider } from "../contexts/controllerCard";

const Routes: React.FC = () => {
  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    );
  }

  return signed ? <CardProvider><AppRoutes /></CardProvider> : <AuthRoutes />;
};

export default Routes;
