import React from 'react';
import { Table } from 'reactstrap';

const Tables = (props) => {
  console.log(props)
  return (
      <div>
    <Table style={{width:'350px', margin:'10px'}}>
    <thead>
 <tr>
   
   <th>Bookseller</th>
   <th>Address</th>
   <th>Price</th>
   <th>Contact</th>
 </tr>
</thead>
</Table>
    <div style={{display: 'relative', flexWrap:'wrap', margin: '5px'}}>
      {
        
        props.books.map((users) => {
          return (
            <Table style={{width:'350px', margin:'10px'}}>
            <tbody>
                <tr>
              <th>{users.username}</th>
              <th>{users.address}</th>
              <th>{users.price}</th>
              <th>{users.phoneno}</th>
              </tr>
           </tbody>
          </Table>
          )
        })
      }

    </div>
    </div>
  );
};

export default Tables;
