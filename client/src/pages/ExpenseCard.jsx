import formatCost from "../utils/formatCost";

export default function ExpenseCard({ expense }) {
  const { title, description, amount } = expense;

  return (
    <div className="card">
      <h4>{title}</h4>
      <p>{formatCost.format(amount)}</p>
      <p>{description}</p>
    </div>
  );
}
