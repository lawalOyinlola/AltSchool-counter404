import { Link } from "react-router-dom";
import "./error.css";

function MyErrorBoundary() {
  return (
    <div className="error-container">
      <div>
        <img
          src="laptop-notification.png"
          alt="A laptop with notification icons"
        />
        <h1>Something went wrong</h1>
      </div>
      <ul>
        <h2>This is why you&apos;re seeing this page:</h2>
        <li>Your input is Not a Number(NaN)</li>
        <li>Your input is greater than 8 characters</li>
        <li>You clicked the &quot;Test Error Handling&quot; button</li>
        <li>Technical error </li>
      </ul>
      <div className="links">
        <Link to="/" className="link">
          Go back to home page.
        </Link>
        <Link to="/*" className="link">
          View 404/not found page.
        </Link>
      </div>
    </div>
  );
}

export default MyErrorBoundary;
