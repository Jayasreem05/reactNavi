import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function Page5() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Page 5</Text>
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
        fontSize: 25,
        color: '#fff',
    }
})