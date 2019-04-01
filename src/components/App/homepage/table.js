import React from "react";
import PropTypes from "prop-types";
//import "./Book.css";
import { POINT_CONVERSION_UNCOMPRESSED } from "constants";

const Table = (props) => {
  console.log("in users:, ", POINT_CONVERSION_UNCOMPRESSED)
  return (
    <div className="users">
      <span>{props.username}</span>
      <span>{props.address}</span>
      <span>{props.price}</span>
      <span>{props.phone}</span>
   
    </div>
  );
}

Table.propTypes = {
  name: PropTypes.string.isRequired
};

export default Table;