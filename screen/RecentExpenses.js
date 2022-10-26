import { StyleSheet, Text, View } from "react-native";

function RecentExpenses() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Last 7 Days</Text>
        <Text style={styles.summaryCount}>$66.66</Text>
      </View>
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
  summaryContainer: {
    width: "100%",
    height: 40,
    backgroundColor: "#C0B8D8",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
    padding: 5,
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
