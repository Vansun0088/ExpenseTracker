import { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";

function ExpensesList({ expensesItem }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    //setList((initialItems) => [...initialItems, { item: expensesItem }]);
  }, []);

  return (
    <FlatList
      data={list}
      renderItem={({ item }) => {
        <View>
          <Text>Text</Text>
        </View>;
      }}
    />
  );
}

export default ExpensesList;
