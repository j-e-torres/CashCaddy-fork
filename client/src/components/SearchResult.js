import { formatAmount, formatAmountDecimal } from "../utils/helpers";
import "../styles/SearchResult.css";

export default function SearchResult({ result }) {
  return(
    <div className="search-result">
      {result.title} - {result.amount % 1 != 0 ? formatAmountDecimal(result.amount) : formatAmount(result.amount)}
    </div>
  )
}
