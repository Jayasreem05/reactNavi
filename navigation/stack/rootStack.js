import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootTab from "../tab/RootTab";
import Page0 from "../../screens/page0"
const Stack = createNativeStackNavigator();
export default function RootStack() {
    return (
        <Stack.Navigator initialRouteName="home">
            <Stack.Screen name="home" component={Page0} options={{ headerShown: false }} />
            <Stack.Screen name="Page1" component={RootTab} />
        </Stack.Navigator>
    );
}