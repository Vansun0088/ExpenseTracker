import { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import ExpensesList from "../components/ExpensesList";
import IconButton from "../components/IconButton";
import ModalScreen from "../components/ModalScreen";
import TotalForm from "../components/TotalForm";

function RecentExpenses({ navigation }) {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [summary, setSummary] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={plusHandler}
            Family={FontAwesome5}
            icon={"plus"}
            size={20}
            color={"white"}
            style={styles.plus}
          />
        );
      },
    });
  }, []);

  function plusHandler() {
    setModalVisibility(true);
  }

  return (
    <View style={styles.rootContainer}>
      <TotalForm text={"Last 7 Days"} />
      <View>
        <ExpensesList />
      </View>
      <ModalScreen setModal={setModalVisibility} modal={modalVisibility} />
    </View>
  );
}

export default RecentExpenses;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#2E058A",
    alignItems: "center",
    paddingHorizontal: "5%",
    paddingVertical: 20,
  },
  plus: {
    marginRight: "10%",
  },
  summaryContainer: {
    width: "100%",
    height: 40,
    backgroundColor: "#C0B8D8",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 7,
    paddingHorizontal: 10,
  },
  summaryText: {
    color: "#5d3ea7",
    fontWeight: "bold",
  },
  summaryCount: {
    color: "#3F2B7C",
    fontSize: 20,
    fontWeight: "bold",
  },
});
