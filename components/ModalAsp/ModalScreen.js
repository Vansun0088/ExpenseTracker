import { Pressable, View, StyleSheet, Modal, Text, SafeAreaView } from "react-native";
import { useState } from "react";

import ModalAlert from "./ModalAlert";
import ButtonBackground from "../Styles/ButtonBackground";

function ModalScreen({ setModal, modal, addItemHandler }) {
  const [AlertVisibility, setAvertVisibility] = useState("none");

  function CancelModalHandler() {
    setModal(false);
  }

  function AddModalHandler() {
    setAvertVisibility("flex");
  }

  return (
    <Modal animationType="slide" visible={modal}>
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.lineContainer}>
          <Text style={styles.lineText}>Add Expense</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonCancel}>
            <Pressable
              style={({ pressed }) => [styles.button, pressed && styles.pressed]}
              onPress={CancelModalHandler}
            >
              <View style={styles.textButtonContainer}>
                <Text style={styles.cancelText}>Cancel</Text>
              </View>
            </Pressable>
          </View>
          <ButtonBackground text={"Add"} onPress={AddModalHandler} style={{ marginLeft: 10 }} />
        </View>
        <ModalAlert
          addItemHandler={addItemHandler}
          visibleAlert={AlertVisibility}
          setVisibleAlert={setAvertVisibility}
          setModal={setModal}
        />
      </SafeAreaView>
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
