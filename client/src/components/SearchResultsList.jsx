// import React from "react";
import SearchResult from "./SearchResult";
import "./SearchResultsList.css";

export default function SearchResultsList({ results }) {
  return(
    <div className="results-list">
      {
        results.map((result, index) => {
          return <SearchResult result={result} key={index} />
        })
      }
    </div>
  )
}
