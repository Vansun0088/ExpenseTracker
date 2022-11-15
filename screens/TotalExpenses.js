import { StyleSheet, View } from "react-native";
import { useContext, useEffect, useState } from "react";

import TotalForm from "../components/TotalForm";
import ExpensesList from "../components/ExpensesList";
import { ListContext } from "../store/context/list-context";
import { colors } from "../constants/colors";
import { fetchExpenses } from "../util/http";
import LoadingOverlay from "../components/Styles/LoadingOverlay";

function TotalExpenses() {
  const [isFetching, setIsFetchingState] = useState(true);
  const listCtx = useContext(ListContext);

  useEffect(() => {
    async function getExpenses() {
      setIsFetchingState(true);
      const expenses = await fetchExpenses();
      setIsFetchingState(false);
      listCtx.setExpenses(expenses);
    }
    getExpenses();
  }, []);

  if (isFetching) {
    return <LoadingOverlay />;
  }

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
