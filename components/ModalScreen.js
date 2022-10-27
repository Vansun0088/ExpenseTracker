import { Pressable, View, StyleSheet, Modal, Text } from "react-native";

function ModalScreen({ setModal, modal }) {
  function modalVisibilityHandler() {
    setModal(false);
  }

  return (
    <Modal animationType="slide" visible={modal}>
      <View style={styles.rootContainer}>
        <View style={styles.lineContainer}>
          <Text style={styles.lineText}>Add Expense</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonCancel}>
            <Pressable
              style={({ pressed }) => [styles.button, pressed && styles.pressed]}
              onPress={modalVisibilityHandler}
            >
              <View style={styles.textButtonContainer}>
                <Text style={styles.cancelText}>Cancel</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.buttonAdd}>
            <Pressable
              style={({ pressed }) => [styles.button, pressed && styles.pressed]}
              onPress={modalVisibilityHandler}
              android_ripple={{ color: "#ccc" }}
            >
              <View style={styles.textButtonContainer}>
                <Text style={styles.addText}>Add</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ModalScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#1D0C57",
  },
  lineContainer: {
    width: "100%",
    height: 50,
    backgroundColor: "#3618B9",
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 2,
    borderColor: "black",
  },
  lineText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 20,
  },
  buttonAdd: {
    height: 35,
    width: 130,
    backgroundColor: "#3618B9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    overflow: "hidden",
    marginLeft: 5,
  },
  buttonCancel: {
    height: 35,
    width: 130,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  cancelText: {
    color: "#6451a9",
  },
  addText: {
    color: "white",
  },
  pressed: {
    opacity: 0.5,
  },
  button: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  textButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    borderRadius: 5,
  },
});
