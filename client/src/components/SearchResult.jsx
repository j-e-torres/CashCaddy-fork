// import React from "react";
import { formatCost } from "../utils";
import "./SearchResult.css";

export default function SearchResult({ result }) {
  return(
    <div className="search-result">
      {result.title} - {formatCost.format(result.amount)}
    </div>
  )
}
