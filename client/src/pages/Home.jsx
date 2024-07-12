import { useState } from "react";
import formatCost from "../utils/formatCost";
import ExpenseCard from "./ExpenseCard";

export default function Home() {
  let budgetAmount = 100;
  // Placeholder expenses list, to be replaced with db connection later on
  const [expenses] = useState([
    {
      title: "Ice-Cream",
      description: "bought tasty Ice-Cream :p",
      amount: 40,
    },
    {
      title: "Peanut",
      description: "one of them...",
      amount: 0.4,
    },
  ]);

  return (
    <>
      <div className="budget">
        <h2 className="budget-title">Budget:</h2>
        <h3 className="budget-amount">{formatCost.format(budgetAmount)}</h3>
        {expenses.map((expense, index) => (
          <ExpenseCard expense={expense} key={"expense" + index} />
        ))}
      </div>
    </>
  );
}
