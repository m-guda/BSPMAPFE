import React from "react";
import PropTypes from "prop-types";

// import the Book component
import Book from "./Book";

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.onViewClick=this.onViewClick.bind(this);

}
onViewClick(id){
    {console.log("hlist id"+id)}
    let path=`/viewmore/${id}`;
    this.props.history.push({
        pathname: path,
        state: {
           id:id
        }
       });
}
render() {
  return (
    <div>{props.books.map(b => <Book key={b.id} title={b.title} author={b.author} price={b.price} count={b.count} category={b.category} imageUrls={b.imageUrls} username={b.user.username}/>)}</div>
  );
}
}
BookList.propTypes = {
  books: PropTypes.array.isRequired
};

export default BookList;