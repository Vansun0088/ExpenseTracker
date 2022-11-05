import { Pressable, View, StyleSheet, Text } from "react-native";
import { useContext, useLayoutEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import ModalAlert from "./ModalAlert";
import IconButton from "../IconButton";
import ButtonBackground from "../Styles/ButtonBackground";
import { ListContext } from "../../store/context/list-context";
import { colors } from "../../constants/colors";

function ModalScreen({ navigation, route }) {
  const expensesCtx = useContext(ListContext);
  const [AlertVisibility, setAlertVisibility] = useState("none");
  const expenseId = route.params?.expenseId;
  const expenseItem = route.params?.expenseItem;
  const expensePrice = route.params?.expensePrice;
  const isEditing = !!expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  });

  function ModalHandler() {
    setAlertVisibility("flex");
  }

  function DeleteHandler() {
    expensesCtx.deleteExpense(expenseId);
    navigation.goBack();
  }

  function CancelHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonCancel}>
          <Pressable
            onPress={CancelHandler}
            style={({ pressed }) => [styles.button, pressed && styles.pressed]}
          >
            <View style={styles.textButtonContainer}>
              <Text style={styles.cancelText}>Cancel</Text>
            </View>
          </Pressable>
        </View>
        <ButtonBackground
          text={isEditing ? "Update" : "Add"}
          onPress={ModalHandler}
          style={{ marginLeft: 10 }}
        />
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            onPress={DeleteHandler}
            icon={"trash"}
            Family={Ionicons}
            color={colors.cancelColor}
            size={36}
          />
        </View>
      )}
      <ModalAlert
        item={expenseItem}
        price={expensePrice}
        id={expenseId}
        isEditing={isEditing}
        visibleAlert={AlertVisibility}
      />
    </View>
  );
}

export default ModalScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.modalColor,
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
    color: colors.buttonAddEdit,
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
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: "#ffffff6a",
    alignItems: "center",
    alignSelf: "center",
    width: "80%",
  },
});
