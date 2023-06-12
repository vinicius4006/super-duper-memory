import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Dashboard from "../pages/Dashboard";
import CriarTarefa from "../pages/CriarTarefa";

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Tarefas" component={Dashboard} />
    <AppStack.Screen name="CriarTarefa" component={CriarTarefa} />
  </AppStack.Navigator>
);

export default AppRoutes;
