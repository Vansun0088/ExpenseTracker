import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";

function TotalForm({ text }) {
  const [summary, setSummary] = useState(0);

  return (
    <View style={styles.summaryContainer}>
      <Text style={styles.summaryText}>{text}</Text>
      <Text style={styles.summaryCount}>${summary}</Text>
    </View>
  );
}

export default TotalForm;

const styles = StyleSheet.create({
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
