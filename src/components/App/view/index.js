import React from "react";

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
//import {CardColumns} from "reactstrap";

let name;
class View extends React.Component {

    constructor(props){
        super(props);
        name=(this.props.location.state.category)
        console.log(name)
        this.state = {
          data : []
        }
      }
    
    componentDidMount() {
        //const url = "http://localhost:9000/books"; 
        const url = "http://10.10.200.19:9000/books/category?name="+name;
        console.log(url) 
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        headers.append('Access-Control-Allow-Origin', url);
        headers.append('Access-Control-Allow-Credentials', 'true');

        headers.append('GET', 'POST');

        fetch(url, {
            headers: headers,
            method: 'GET'
        })
        .then(response => response.json())
        .then(contents => {console.log("in fetch: "+ contents);
                            this.setState ({
                            data : contents})
            })
        .catch(() => console.log("Can’t access " + url + " response. "))
      }


    render() {
       
        return (
            <div>
               <br/><br/>
                <h3><b>VIEW BOOKS</b></h3>
                
                <br></br>
                <div style={{position:'relative'}}>
                
                 
                
               {/* <div style={{display: 'inline-block'}}>*/}
               <div style={{display: 'flex', flexWrap:'wrap', margin: '5px'}}>
                <div>{this.state.data.map((Booksplorer,index) =>{
                    
                return(
                   
                    <Card style={{width:'350px', margin:'10px'}}>
                    <CardImg top width="30%" src={Booksplorer.imageUrls} alt="Card image cap" />
                       <CardBody> 
                           <div key={index}>
                               <CardTitle>{Booksplorer.title}</CardTitle>
                               <CardSubtitle>{Booksplorer.author}</CardSubtitle>
                               <hr className="my-2"/>
                               <CardText>{Booksplorer.price}</CardText>

                               <Button onClick={this.onButtonChange}>Locate Book</Button>
                               </div>
                           
                       </CardBody>
                   </Card>

                       
                    
                    
                    )
                })}
                </div>
                </div>
                <br></br>
                </div>
                </div>
            
                
            
        );
    }
} 

export default View;