import SearchResult from "./SearchResult";
import "../styles/SearchResultsList.css";

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
