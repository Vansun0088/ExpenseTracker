import { Dimensions, StyleSheet, Text, View } from "react-native";
import { GestureDetector } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

const screenHeight = Dimensions.get("window").height;
function BottomSheet() {
  return (
    <GestureDetector>
      <Animated.View style={styles.bottomSheetContainer}>
        <View style={styles.line}></View>
      </Animated.View>
    </GestureDetector>
  );
}

export default BottomSheet;

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: screenHeight,
    width: "100%",
    backgroundColor: "white",
    position: "absolute",
    top: screenHeight / 1.5,
    borderRadius: 25,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: "grey",
    alignSelf: "center",
    marginVertical: 15,
    borderRadius: 2,
  },
});
