import { StyleSheet, Text, View, Pressable } from "react-native";

function ButtonBackground({ onPress, style, text }) {
  return (
    <View style={[styles.buttonContainer, style]}>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={onPress}
        android_ripple={{ color: "#ccc" }}
      >
        <View style={styles.textButtonContainer}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default ButtonBackground;

const styles = StyleSheet.create({
  buttonContainer: {
    height: 35,
    width: 130,
    backgroundColor: "#3618B9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    overflow: "hidden",
  },
  button: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  pressed: {
    opacity: 0.5,
  },
  textButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    borderRadius: 5,
  },
  text: {
    color: "white",
  },
});
