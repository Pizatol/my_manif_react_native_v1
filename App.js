import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./screens/Home";
import Detail from "./screens/Detail";
import WelcomeScreen from "./screens/WelcomeScreen";

const { Navigator, Screen } = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#ff9800",
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                    headerTitleAlign: "center",
                }}
            >
                <Screen name="Welcome" component={WelcomeScreen} />
                <Screen name="Home" component={Home} />
                <Screen name="Detail" component={Detail} />
            </Navigator>

            {/* <Tab.Navigator>
      <Tab.Screen name="Home" component={WelcomeScreen} />
      <Tab.Screen name="Detail" component={Detail} />
    </Tab.Navigator>
     */}
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
