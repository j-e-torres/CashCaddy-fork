// import ReactDOM from "react-dom";
import { useState, useId } from "react";
import formatCost from "../utils/formatCost";
import ExpenseCard from "./ExpenseCard";
import Modal from "react-modal";

// set the modal element using its id
Modal.setAppElement("#root");

export default function Home() {
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
  const [expenses] = useState([
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
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Add Expense" className="animate-top">
        <button className="modal-close" onClick={closeModal}>
          &times;
        </button>
        <div className="modal-content">
          <form id="expense-form" className="modal-content">
            <label htmlFor="titleInput">Expense Title:</label>
            <br />
            <input name="titleInput" type="text" required />
            <br />

            <label htmlFor={descriptionId}>Description:</label>
            <br />
            <textarea
              id={descriptionId}
              name="descriptionInput"
              rows={4}
              cols={40}
              required
            />
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
