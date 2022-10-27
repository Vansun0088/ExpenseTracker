import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import RecentExpenses from "./screens/RecentExpenses";
import TotalExpenses from "./screens/TotalExpenses";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "#EBB339",
            tabBarInactiveTintColor: "#807599",
            tabBarStyle: { backgroundColor: "#3018A2" },
            tabBarLabelStyle: { fontSize: 12 },
            headerStyle: { backgroundColor: "#351bb3" },
            headerTintColor: "white",
          }}
        >
          <Tab.Screen
            name="RecentExpenses"
            component={RecentExpenses}
            options={{
              title: "Recent Expenses",
              tabBarIcon: ({ size, color }) => {
                return <Entypo name="time-slot" size={size + 4} color={color} />;
              },
              tabBarLabel: "Recent",
            }}
          />
          <Tab.Screen
            name="TotalExpenses"
            component={TotalExpenses}
            options={{
              title: "Total Expenses",
              tabBarIcon: ({ size, color }) => {
                return <FontAwesome5 name="shopify" size={size + 4} color={color} />;
              },
              tabBarLabel: "Total",
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
