import { Text, View, StyleSheet } from "react-native";

function TotalExpenses() {
  return (
    <View style={styles.rootContainer}>
      <Text>TotalScreen</Text>
    </View>
  );
}

export default TotalExpenses;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#2E058A",
  },
});
