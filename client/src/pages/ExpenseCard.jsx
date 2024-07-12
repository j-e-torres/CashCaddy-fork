import formatCost from "../utils/formatCost";

export default function ExpenseCard({ expense }) {
  const { title, description, amount, categories } = expense;

  return (
    <div className="card">
      <h4>{title}</h4>
      <p>{formatCost.format(amount)}</p>
      <p>{description}</p>
      <h4>Categories:</h4>
      <ul>
        {categories.map((category, index) => (
          <p className="tag" key={index}>{category}</p>
        ))}
      </ul>
    </div>
  );
}
