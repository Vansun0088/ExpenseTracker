import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import { colors } from "./constants/colors";
import RecentExpenses from "./screens/RecentExpenses";
import TotalExpenses from "./screens/TotalExpenses";
import ModalScreen from "./components/ModalAsp/ModalScreen";
import IconButton from "./components/IconButton";
import ListContextProvider from "./store/context/list-context";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        tabBarActiveTintColor: "#EBB339",
        tabBarStyle: { backgroundColor: colors.mainPurple },
        tabBarLabelStyle: { fontSize: 12 },
        headerStyle: { backgroundColor: colors.mainPurple },
        headerTintColor: "white",
        headerRight: () => {
          return (
            <IconButton
              Family={FontAwesome5}
              icon={"plus"}
              size={20}
              color={"white"}
              onPress={() => {
                navigation.navigate("Modal");
              }}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ size, color }) => {
            return <Entypo name="time-slot" size={size + 4} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="TotalExpenses"
        component={TotalExpenses}
        options={{
          title: "Total Expenses",
          tabBarLabel: "Total",
          tabBarIcon: ({ size, color }) => {
            return <FontAwesome5 name="shopify" size={size + 4} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <ListContextProvider>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: colors.mainPurple },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Modal"
            component={ModalScreen}
            options={{
              presentation: "modal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ListContextProvider>
  );
}
