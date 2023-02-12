import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Home Screen </Text>
        </View>
    );
};
const styles = StyleSheet.create({
	container: {
		 flex: 1,
		 justifyContent: "center",
		 alignItems: "center",
		 backgroundColor: "lightgrey",
	},
});

export default Home;


