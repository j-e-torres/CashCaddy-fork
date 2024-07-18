import { formatAmount, formatAmountDecimal, formatDate } from "../utils/helpers";
import "../styles/SearchResult.css";

export default function SearchResult({ result }) {
  return(
    <div className="search-result">
      {formatDate(result.date)} - ${result.amount % 1 != 0 ? formatAmount(result.amount) : formatAmountDecimal(result.amount)}
    </div>
  )
}
