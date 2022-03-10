import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Page2 from "../../screens/page2";
import Page3 from "../../screens/page3";
import Page1 from "../../screens/page1";

const Tab = createBottomTabNavigator();
export default function RootTab() {
    return (
        <Tab.Navigator initialRouteName="Page1" >
            <Tab.Screen name="Page1" component={Page1} />
            <Tab.Screen name="Page2" component={Page2} />
            <Tab.Screen name="Page3" component={Page3} />
        </Tab.Navigator>
    );
}