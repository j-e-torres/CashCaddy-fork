import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const currentPage = useLocation().pathname;

  return (
    <>
      <ul className="nav-bar">
        <li className="nav-item">
          <Link to="/" className={currentPage === "/" ? "nav-link active" : "nav-link"}>
            Cash Caddy
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="Budgets"
            className={currentPage === "/Budgets" ? "nav-link active" : "nav-link"}>
            Budgets
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="NewBudget"
            className={currentPage === "/NewBudget" ? "nav-link active" : "nav-link"}>
            New Budget
          </Link>
        </li>
      </ul>
      <ul className="login-bar">
        <li className="nav-item">
          <Link
            to="Login"
            className={currentPage === "/Login" ? "nav-link active" : "nav-link"}>
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="Signup"
            className={currentPage === "/Signup" ? "nav-link active" : "nav-link"}>
            Sign Up
          </Link>
        </li>
      </ul>
    </>
  );
}
