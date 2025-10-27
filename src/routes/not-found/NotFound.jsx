import "./NotFound.sass";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <main className="not-found">
      <h2 className="pink-text h2-tag">This page is not available</h2>
      <p className="gray-text ">Sorry, we couldn’t find the page you’re looking for.</p>
      <Link className="pink-text" to="/">
        Homepage
      </Link>
    </main>
  );
};
