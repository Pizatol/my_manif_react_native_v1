import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = (props) => {

	const gotToHome = () => {
	props.navigation.push('Detail')
	}

    return (
        <View style={css.container}>
            <Text >Welcome Screen </Text>
				<TouchableOpacity onPress={gotToHome}>
					<View style={css.button}>
						<Text>
							Aller à Home
						</Text>
					</View>
				</TouchableOpacity>
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
	 button : {
		backgroundColor: "lightblue",
		borderColor: "darkblue",
		borderWidth : 2,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
		borderRadius : 5

	 }

});
