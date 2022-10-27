import { useLayoutEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import IconButton from "../components/IconButton";
import TotalForm from "../components/TotalForm";

function TotalExpenses({ navigation }) {
  const [modalVisibility, setModalVisibility] = useState(false);

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
      <TotalForm text={"Total"} />
    </View>
  );
}

export default TotalExpenses;

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
  pressed: {
    opacity: 0.5,
  },
});
