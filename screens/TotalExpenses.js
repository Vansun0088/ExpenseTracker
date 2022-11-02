import { useLayoutEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import IconButton from "../components/IconButton";
import ModalScreen from "../components/ModalAsp/ModalScreen";
import TotalForm from "../components/TotalForm";
import ListItem from "../components/ListItem";

function TotalExpenses({ navigation }) {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [expensesList, setExpensesList] = useState([]);

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

  function addItemHandler(enteredItem, enteredPrice) {
    setExpensesList((items) => [
      ...items,
      { text: enteredItem, price: enteredPrice, id: Math.random().toString(), date: "2022.28.10" },
    ]);
  }

  function plusHandler() {
    setModalVisibility(true);
  }

  function onDeleteItem(id) {
    setExpensesList((items) => items.filter((item) => item.id !== id));
  }

  return (
    <View style={styles.rootContainer}>
      <TotalForm data={expensesList} text={"Total"} />
      <FlatList
        style={styles.list}
        data={expensesList}
        renderItem={({ item }) => {
          return (
            <ListItem
              item={item.text}
              price={Number(item.price).toFixed(2)}
              id={item.id}
              date={item.date}
              onDelete={onDeleteItem}
            />
          );
        }}
      />
      <ModalScreen
        setModal={setModalVisibility}
        modal={modalVisibility}
        addItemHandler={addItemHandler}
      />
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
    marginRight: 20,
  },
  list: {
    width: "100%",
    marginVertical: 20,
  },
});
