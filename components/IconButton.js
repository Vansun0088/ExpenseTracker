import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

function IconButton({ size, color, icon, style, Family, onPress }) {
  return (
    <Pressable onPress={onPress} style={style}>
      <Family name={icon} size={size} color={color} />
    </Pressable>
  );
}

export default IconButton;
