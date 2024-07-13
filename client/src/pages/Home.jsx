// import ReactDOM from "react-dom";
import { useState, useId } from "react";
import formatCost from "../utils/formatCost";
import ExpenseCard from "./ExpenseCard";
import Modal from "react-modal";

// set the modal element using its id
Modal.setAppElement("#root");

export default function Home() {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    // destructure arrays out of formData object so we can check them
    const [ title, amount, description, categories ] = formData;
    
    const newExpense = {
      title: title[1],
      description: description[1],
      amount: parseInt(amount[1]),
      categories: categories[1].trim().split(", "), // split categories by ", " so that users can save multiple tags
    }

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

  let budgetAmount = 100;
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

  return (
    <>
      <div className="budget">
        <h2 className="budget-title">Budget:</h2>
        <h3 className="budget-amount">{formatCost.format(budgetAmount)}</h3>
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

      <div className="expense-list">
        {expenses.map((expense, index) => (
          <ExpenseCard expense={expense} key={"expense" + index} />
        ))}
      </div>
    </>
  );
}

// ReactDOM.createRoot(<Home />, appElement);
