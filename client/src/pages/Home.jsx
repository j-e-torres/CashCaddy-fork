// import ReactDOM from "react-dom";
import { useState, useId } from "react";
import { SearchBar, SearchResultsList } from "../components";
import { calculateBudget } from "../utils/";
import ExpenseCard from "./ExpenseCard";
import Modal from "react-modal";

// sets the root id as the id of the whole document
Modal.setAppElement("#root");

export default function Home() {
  let arbitraryAmount = 100;
  let budgetAmount = arbitraryAmount;

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const value = 1; // index for value of items in formData

    // destructure arrays out of formData object so we can check them
    const [title, amount, description, categories] = formData;

    const newExpense = {
      title: title[value],
      description: description[value] ? description[value] : "",
      amount: parseInt(amount[value]),
      categories: categories[value].toLowerCase().split(",").trim(), // split categories by ", " so that users can save multiple tags
    };

    setExpenses([...expenses, newExpense]);
    closeModal();
  }

  const descriptionId = useId();

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // Placeholder expenses list, to be replaced with db connection later on
  const [expenses, setExpenses] = useState([
    {
      title: "Ice-Cream",
      description: "bought tasty Ice-Cream :p",
      amount: 40,
      categories: ["food", "treat"],
    },
    {
      title: "Peanut",
      description: "one of them...",
      amount: 0.4,
      categories: ["treat", "NOT food"],
    },
  ]);

  const [results, setResults] = useState([]);

  return (
    <>
      <div className="budget">
        <h2 className="budget-title">Budget:</h2>
        <h3 className="budget-amount">{calculateBudget(budgetAmount, expenses)}</h3>
      </div>

      <button onClick={openModal} id="add-expense-button">
        Add Expense
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Expense"
        className="animate-top">
        <button className="modal-close" onClick={closeModal}>
          &times;
        </button>
        <div className="modal-content">
          <form id="expense-form" className="modal-content" onSubmit={handleSubmit}>
            <label htmlFor="titleInput">Expense Title:</label>
            <br />
            <input name="titleInput" type="text" required />
            <br />

            <label htmlFor="amountInput">Amount:</label>
            <br />
            <input name="amountInput" type="number" required />
            <br />

            <label htmlFor={descriptionId}>Description:</label>
            <br />
            <textarea id={descriptionId} name="descriptionInput" rows={4} cols={40} />
            <br />

            {/* Currently, category input will have to be a stand-in for something more complicated later on */}
            <label htmlFor="categoryInput">Categories:</label>
            <br />
            <input name="categoryInput" type="text" />
            <br />

            <input type="submit" value="Submit" />
          </form>
        </div>
      </Modal>

      <SearchBar setResults={setResults} expenses={expenses}/>
      <SearchResultsList results={results} />
      <div className="expense-list">
        {expenses.map((expense, index) => (
          <ExpenseCard expense={expense} key={"expense" + index} />
        ))}
      </div>
    </>
  );
}
