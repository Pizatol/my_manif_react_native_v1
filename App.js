import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import Detail from "./screens/Detail";
import WelcomeScreen from "./screens/WelcomeScreen";

const { Navigator, Screen } = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#f4511e",
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                    headerTitleAlign:"center"
                }}
            >
                <Screen name="Welcome" component={WelcomeScreen} />
                <Screen name="Home" component={Home} />
                <Screen name="Detail" component={Detail} />
            </Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        color: "red",
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "column",
        marginTop: 40,
        alignItems: "center",
        justifyContent: "center",
    },
});
