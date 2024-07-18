import { useState } from "react";
import "../styles/SearchBar.css";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ setResults, transactions }) {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    const results = transactions.filter((transaction) => {
      return value && transaction.category.toLowerCase().includes(value.toLowerCase());
    });
    setResults(results);
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input 
        className="search-input"
        placeholder="Type to search..."
        value={input}
        onChange={(event) => handleChange(event.target.value)}
      />
    </div>
  );
}
