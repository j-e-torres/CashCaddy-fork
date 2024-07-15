import { formatCost } from ".";

function calculateBudget(budget, expenseArray) {
  // get all user made expense amounts in an array
  const costs = [];
  expenseArray.forEach((expense) => costs.push(expense.amount));

  // add all values from resulting array into one deficit
  const totalCost = costs.reduce((accumulator, value) => accumulator + value);
  budget -= totalCost;

  if (budget <= 0) {
    return "$0.00";
  }
  return formatCost.format(budget);
}

export default calculateBudget;
