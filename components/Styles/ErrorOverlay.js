import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/colors";
import ButtonBackground from "./ButtonBackground";

export default function ErrorOverlay({ massage, onConfirm }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error occurred!</Text>
      <Text style={styles.text}>{massage}</Text>
      {onConfirm && <ButtonBackground onPress={onConfirm} text="Restart" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: colors.contentPurple,
  },
  text: {
    color: "white",
    textAlign: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
