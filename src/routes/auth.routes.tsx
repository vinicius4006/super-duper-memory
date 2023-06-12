import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../pages/Signin";


const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Login" component={SignIn} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
