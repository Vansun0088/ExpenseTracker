import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
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

import { colors } from "../../constants/colors";
import { ListContext } from "../../store/context/list-context";
import { getFormattedDate } from "../../util/date";
import ButtonBackground from "../Styles/ButtonBackground";

const screenHeight = Dimensions.get("screen").height;

function ModalAlert({ visibleAlert, isEditing, item, price, id }) {
  const navigation = useNavigation();
  const expensesCtx = useContext(ListContext);
  const [enteredText, setEnteredText] = useState(item);
  const [enteredPrice, setEnteredPrice] = useState(price);

  function addItem() {
    if (enteredText) {
      const object = {
        text: enteredText,
        price: enteredPrice,
        date: getFormattedDate(new Date()),
      };

      isEditing ? expensesCtx.updateExpense(id, object) : expensesCtx.addExpense(object);
      navigation.goBack();
    } else {
      Alert.alert("'Item Name' cannot be empty", "", [{ text: "Ok" }]);
    }
  }

  function cancel() {
    navigation.goBack();
  }

  function enterText(enteredText) {
    setEnteredText(enteredText);
  }

  function enterPrice(enteredPrice) {
    const newEnteredPrice = Number(enteredPrice.replace(/,/i, "."));
    setEnteredPrice(newEnteredPrice);
  }

  return (
    <View style={[styles.alertContainer, { display: visibleAlert }]}>
      <ScrollView alwaysBounceVertical={false} style={styles.rootScreen}>
        <KeyboardAvoidingView behavior="padding" style={styles.rootScreen}>
          <View style={styles.alert}>
            <TextInput
              style={styles.inputText}
              onChangeText={enterText}
              placeholder="Item Name"
              placeholderTextColor={"#ccc"}
              value={enteredText}
            />
            <TextInput
              style={styles.inputText}
              keyboardType={"numeric"}
              onChangeText={enterPrice}
              placeholder="Price"
              placeholderTextColor={"#ccc"}
              value={enteredPrice}
            />
            <Text style={styles.text}>Date: {getFormattedDate(new Date())}</Text>
            <View style={styles.buttonsContainer}>
              <ButtonBackground text={"Cancel"} onPress={cancel} style={styles.buttonCancel} />
              <ButtonBackground
                text={isEditing ? "Update" : "Add"}
                onPress={addItem}
                style={styles.buttonAdd}
              />
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
  alertContainer: {
    position: "absolute",
    width: "100%",
    height: screenHeight,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  alert: {
    backgroundColor: colors.modalAlertColor,
    width: 320,
    height: 220,
    borderRadius: 20,
    padding: 20,
    top: "25%",
    alignSelf: "center",
  },
  inputText: {
    borderRadius: 5,
    width: "100%",
    height: 40,
    backgroundColor: "white",
    padding: 10,
    marginVertical: 10,
  },
  buttonsContainer: {
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonAdd: {
    backgroundColor: colors.buttonAddEdit,
  },
  buttonCancel: {
    backgroundColor: colors.cancelColor,
  },
  text: {
    color: "white",
    alignSelf: "center",
    fontSize: 16,
  },
});
