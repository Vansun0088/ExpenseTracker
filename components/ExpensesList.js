import { FlatList, StyleSheet, Text, View } from "react-native";

import ListItem from "./ListItem";

export default function ExpensesList({ data, emptyFallback }) {
  let emptyText = <Text style={styles.emptyText}>{emptyFallback}</Text>;

  function renderItem({ item }) {
    return (
      <ListItem
        item={item.text}
        price={Number(item.price).toFixed(2)}
        id={item.id}
        date={item.date}
      />
    );
  }

  return (
    <View style={{ width: "100%" }}>
      {data.length === 0 ? (
        emptyText
      ) : (
        <FlatList style={styles.list} data={data} renderItem={renderItem} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    width: "100%",
    marginVertical: 20,
  },
  emptyText: {
    color: "white",
    fontSize: 16,
    marginTop: 32,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
