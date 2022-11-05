import { StyleSheet, View } from "react-native";
import { useContext } from "react";

import TotalForm from "../components/TotalForm";
import ExpensesList from "../components/ExpensesList";
import { ListContext } from "../store/context/list-context";
import { colors } from "../constants/colors";
import { getDateMinusDays } from "../util/date";

function RecentExpenses() {
  const listCtx = useContext(ListContext);

  const recentExpenses = listCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <View style={styles.rootContainer}>
      <TotalForm data={recentExpenses} text={"Last 7 Days"} />
      <ExpensesList
        emptyFallback={"You don't have any expense for 7 days yet("}
        data={recentExpenses}
      />
    </View>
  );
}

export default RecentExpenses;

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
