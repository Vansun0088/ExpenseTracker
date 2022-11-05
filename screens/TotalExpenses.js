import { StyleSheet, View } from "react-native";
import { useContext } from "react";

import TotalForm from "../components/TotalForm";
import ExpensesList from "../components/ExpensesList";
import { ListContext } from "../store/context/list-context";
import { colors } from "../constants/colors";

function TotalExpenses() {
  const listCtx = useContext(ListContext);

  return (
    <View style={styles.rootContainer}>
      <TotalForm data={listCtx.expenses} text={"Total"} />
      <ExpensesList emptyFallback={"You didn't add any expense yet(("} data={listCtx.expenses} />
    </View>
  );
}

export default TotalExpenses;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.contentPurple,
    alignItems: "center",
    paddingHorizontal: "5%",
    paddingVertical: 20,
  },
  list: {
    width: "100%",
    marginVertical: 20,
  },
});
