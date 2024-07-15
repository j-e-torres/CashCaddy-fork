import { useState } from "react";
import "./SearchBar.css";
// import { FaSearch } from "react-icons/fa";

export default function SearchBar({ setResults, expenses }) {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    const results = expenses.filter((expense) => {
      return value && expense.categories.includes(value.toLowerCase());
    });
    setResults(results);
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <input 
        className="search-input"
        placeholder="Type to search..."
        value={input}
        onChange={(event) => handleChange(event.target.value)}
      />
    </div>
  );
}
