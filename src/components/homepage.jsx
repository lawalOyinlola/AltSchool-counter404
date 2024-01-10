import { Link } from "react-router-dom";
import "./homepage.css";

function HomePage() {
  return (
    <div className="homepage">
      <div>
        <h1 className="code">Hi there!</h1>
        <h2 className="heading">Welcome to the Counter404 App</h2>
        <p>
          This is a simple counter application designed for ease of use and
          practicality. With this application, you can effortlessly adjust the
          margin for both increment and decrement operations, reset the count to
          its initial state, and directly edit the count value.
        </p>
      </div>
      <div>
        <h2 className="heading">Features</h2>
        <ul>
          <li>Set Margin for both increment and decrement operations.</li>
          <li>Increment the count value by set margin.</li>
          <li>Decrement the count value by set margin.</li>
          <li>Reset the count value to its initial state.</li>
          <li>Edit the count value directly.</li>
          <li>Error handling for NaN and count length greater 8.</li>
          <li>Error handling by click of a button.</li>
          <li>Error handling for missing page.</li>
        </ul>
      </div>

      <div className="navs">
        <p>
          Click&nbsp;
          <Link to="/error">Here</Link>
          &nbsp;to test the error boundary.
        </p>
        <p>
          Typing a wrong URL will redirect you to the&nbsp;
          <Link to="/notfound">404 page.</Link>
        </p>
        <p>
          Explore the app effortlessly and enjoy a polished and user-friendly
          experience&nbsp;
        </p>
        <Link to="/counter" className="start">
          Start
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
