import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Page4 from "../../screens/page4";
import RootStack from "../stack/rootStack";
const Drawer = createDrawerNavigator();
export default function RootDrawer() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={RootStack} options={{ headerShown: false }} />
            <Drawer.Screen name="Page4" component={Page4} />
        </Drawer.Navigator>
    );
}