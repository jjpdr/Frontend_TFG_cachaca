import "./style.scss";

import { Link } from "react-router-dom";

export default function ButtonComponent({ tag, destination, type, text }) {
  return (
    <div>
      {tag === "Link" ? (
        <Link to={destination} className={`button-component ${type}`}>
          {text}
        </Link>
      ) : (
        <a href={destination} className={`button-component ${type}`}>
          {text}
        </a>
      )}
    </div>
  );
}
