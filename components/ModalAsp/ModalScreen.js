import { Pressable, View, StyleSheet, Text } from "react-native";
import { useContext, useLayoutEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import ModalAlert from "./ModalAlert";
import IconButton from "../IconButton";
import ButtonBackground from "../Styles/ButtonBackground";
import { ListContext } from "../../store/context/list-context";
import { colors } from "../../constants/colors";
import { deleteExpense } from "../../util/http";
import LoadingOverlay from "../Styles/LoadingOverlay";
import ErrorOverlay from "../Styles/ErrorOverlay";

function ModalScreen({ navigation, route }) {
  const [isFetching, setIsFetchingState] = useState(false);
  const [error, setError] = useState();
  const expensesCtx = useContext(ListContext);
  const [AlertVisibility, setAlertVisibility] = useState("none");

  const expenseId = route.params?.expenseId;
  const expenseItem = route.params?.expenseItem;
  const expensePrice = route.params?.expensePrice;
  const expenseDate = route.params?.expenseDate;
  const isEditing = !!expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  });

  function ModalHandler() {
    setAlertVisibility("flex");
  }

  async function DeleteHandler() {
    setIsFetchingState(true);
    try {
      expensesCtx.deleteExpense(expenseId);
      await deleteExpense(expenseId);
      navigation.goBack();
    } catch (error) {
      setError("Could not delete expense!");
      setIsFetchingState(false);
    }
  }

  function CancelHandler() {
    navigation.goBack();
  }

  if (error && !isFetching) {
    // isFetching почему он не равняется true
    return <ErrorOverlay massage={error} onConfirm={CancelHandler} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
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
        setLoading={setIsFetchingState}
        setError={setError}
        item={expenseItem}
        id={expenseId}
        price={expensePrice}
        date={expenseDate}
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
