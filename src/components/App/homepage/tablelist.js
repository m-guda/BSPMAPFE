import React from "react";
import PropTypes from "prop-types";

// import the Book component
import Table from "./table";

const Tablelist = (props) => {
  return (
    <div>{props.users.map(b => <Table key={b.id} username={b.username} address={b.address} price={b.price} phone={b.phone}/>)}</div>
  );
}

Tablelist.propTypes = {
  users: PropTypes.array.isRequired
};

export default Tablelist;