import React from "react";
import PropTypes from "prop-types";
import "./Book.css";
import { POINT_CONVERSION_UNCOMPRESSED } from "constants";

const Book = (props) => {
  console.log("in book:, ", POINT_CONVERSION_UNCOMPRESSED)
  return (
    <div className="book">
      <span>{props.title}</span>
      <span>{props.author}</span>
      <span>{props.price}</span>
      <span>{props.count}</span>
      <span>{props.username}</span>
    </div>
  );
}

Book.propTypes = {
  name: PropTypes.string.isRequired
};

export default Book;