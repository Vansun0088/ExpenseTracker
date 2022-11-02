import { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import ButtonBackground from "../Styles/ButtonBackground";

const screenHeight = Dimensions.get("window").height;

function ModalAlert({ setVisibleAlert, visibleAlert, addItemHandler, setModal }) {
  const [enteredText, setEnteredText] = useState("");
  const [enteredPrice, setEnteredPrice] = useState(0);

  function addItem() {
    if (
      (enteredText.length === 0) & (enteredPrice.length !== 0) ||
      (enteredText.length !== 0) & (enteredPrice.length === 0)
    ) {
      Alert.alert("Error", "Fill both inputs or close", [{ text: "Okay", style: "cancel" }]);
    } else if (
      (enteredPrice.length === 0) & (enteredText.length === 0) ||
      (enteredPrice.length !== 0) & (enteredText.length !== 0)
    ) {
      addItemHandler(enteredText, Number(enteredPrice));
      setModal(false);
      setVisibleAlert("none");
      setEnteredText("");
    }
  }

  function enterText(enteredText) {
    setEnteredText(enteredText);
  }

  function enterPrice(enteredPrice) {
    const newEnteredPrice = enteredPrice.replace(/,/i, ".");
    setEnteredPrice(newEnteredPrice);
  }

  return (
    <View style={[styles.alertContainer, { display: visibleAlert }]}>
      <ScrollView alwaysBounceVertical={false} style={styles.rootScreen}>
        <KeyboardAvoidingView behavior="padding" style={styles.rootKeyboard}>
          <View style={styles.alert}>
            <TextInput
              style={styles.inputText}
              onChangeText={enterText}
              placeholder="Item name"
              placeholderTextColor={"#ccc"}
            />
            <TextInput
              style={styles.inputText}
              keyboardType={"numeric"}
              onChangeText={enterPrice}
              placeholder="Price"
              placeholderTextColor={"#ccc"}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>Date: 28.10.2022</Text>
              <ButtonBackground text={"Add/Cancel"} onPress={addItem} style={styles.button} />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}

export default ModalAlert;

const styles = StyleSheet.create({
  rootScreen: {
    width: "100%",
    height: screenHeight,
  },
  rootKeyboard: {
    width: "100%",
    height: screenHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  alertContainer: {
    position: "absolute",
    width: "100%",
    height: screenHeight,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  alert: {
    backgroundColor: "#3618B9",
    width: 300,
    height: 200,
    borderRadius: 20,
    padding: 20,
  },
  inputText: {
    borderRadius: 5,
    width: "100%",
    height: 40,
    backgroundColor: "white",
    padding: 10,
    marginVertical: 10,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#5236a6",
  },
  text: {
    color: "white",
  },
});
