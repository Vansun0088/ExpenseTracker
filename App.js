import { StatusBar } from "expo-status-bar";
import { Button, Modal, StyleSheet, View, Text } from "react-native";
import { useState, useCallback, useMemo, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";

import RecentExpenses from "./screen/RecentExpenses";
import TotalExpenses from "./screen/TotalExpenses";
import IconButton from "./components/IconButton";
//import BottomSheet from "./components/BottomSheet";

const Tab = createBottomTabNavigator();

export default function App() {
  const bottomSheetModalRef = useRef < BottomSheetModal > null;
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const [expensesList, setExpensesList] = useState();
  const [modalVisibility, setModalVisibility] = useState(false);

  function addButtonHandler() {
    setModalVisibility(true);
  }

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
            headerRight: () => {
              return (
                <IconButton
                  onPress={addButtonHandler}
                  Family={FontAwesome5}
                  icon={"plus"}
                  size={20}
                  color={"white"}
                  style={styles.plus}
                />
              );
            },
          }}
        >
          <Tab.Screen
            name="RecentExpenses"
            component={RecentExpenses}
            options={({ route }) => {
              return {
                title: "Recent Expenses",
                tabBarIcon: ({ size, color }) => {
                  return <Entypo name="time-slot" size={size + 4} color={color} />;
                },
                tabBarLabel: "Recent",
              };
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
        {/*<Modal animationType="slide" visible={modalVisibility}>
            <View style={{ backgroundColor: "#ff0", flex: 1 }}></View>
            <Button
            title="Press ME!"
            onPress={() => {
              setModalVisibility(false);
            }}
            />
          </Modal>*/}
        {/* <BottomSheet />*/}
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handlePresentModalPress}
        >
          <View></View>
        </BottomSheetModal>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  plus: {
    marginRight: "10%",
  },
});
