import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./navigation/stack/rootStack";
import RootTab from "./navigation/tab/RootTab";
import RootDrawer from "./navigation/drawer/RootDrawer";
export default function App() {
  return (
    <NavigationContainer>
      <RootDrawer />
    </NavigationContainer>
  );
}