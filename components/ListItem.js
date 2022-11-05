import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";

function ListItem({ item, price, date, id }) {
  const navigation = useNavigation();

  function itemPressHandler() {
    navigation.navigate("Modal", {
      expenseId: id,
      expensePrice: price,
      expenseItem: item,
    });
  }

  return (
    <View style={styles.rootContainer}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        android_ripple={{ color: "#ccc" }}
        onPress={itemPressHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Text style={styles.textItem}>{item}</Text>
            <Text style={styles.textDate}>{date}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>{price}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  rootContainer: {
    height: 70,
    backgroundColor: "#3F04C4",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 8,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  textItem: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
    marginBottom: 5,
  },
  textDate: {
    color: "white",
  },
  priceContainer: {
    width: 100,
    height: 50,
    backgroundColor: "white",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  priceText: {
    color: "#3F04c4",
    fontWeight: "bold",
    fontSize: 18,
  },
  pressed: {
    opacity: 0.5,
  },
});
