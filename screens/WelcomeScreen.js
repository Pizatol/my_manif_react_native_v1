import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const { Navigator, Screen } = createStackNavigator();
import Button_1 from "../Components/Button_1";

const WelcomeScreen = (props) => {
    
const { Navigator, Screen } = createStackNavigator();

	const gotToHome = () => {
	props.navigation.push('Detail')
	}
console.log(props.navigate);

    return (
        
        <View style={css.container}>
            <Text >Welcome Screen </Text>

				<Button_1
					name = "Aller à Détail"
					press={gotToHome}
				/>
				
        </View>

    );
};

export default WelcomeScreen;

const css = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgrey",
    },
	

});
