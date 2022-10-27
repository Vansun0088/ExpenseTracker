import { Pressable, StyleSheet } from "react-native";

function IconButton({ size, color, icon, style, Family, onPress }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [style, pressed && styles.pressed]}>
      <Family name={icon} size={size} color={color} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});
