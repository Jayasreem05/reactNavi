import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

export default function Page0({ navigation }) {
    return (
        <View style={styles.container} >
            <Text style={styles.header} >Home</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Page1")}>
                <Text style={styles.buttons}>NEXT</Text>
            </TouchableOpacity>
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 40,
    },
    buttons: {
        top: 20,
        backgroundColor: 'blue',
        padding: '3%',
        fontWeight: 'bold',
        fontSize: 25,
        color: '#fff',
    }
})