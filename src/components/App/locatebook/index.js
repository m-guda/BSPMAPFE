import React from "react";
// import axios from "axios";
import MapLocate from "../maplocate/maplocate";
var body;
var id;
export default class Locatebook extends React.Component{
    constructor(props){
        super(props)
         this.state = {
         data: []
        }
    }
    
    componentDidMount(props){
         id=this.props.location.state.id;
        console.log("componentDidMount in book id.......:"+id);

        const url = "http://10.10.200.19:9000/books/"+id; 
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
          .then(contents => {console.log("in fetch: "+ JSON.stringify(contents));
                        if(contents.imageUrls!=null)
                        {
                            this.setState ({
                                data : contents,
                            })   
                          
                        }
                          
                                 
                })
        //.catch(() => console.log("Can’t access " + url + " response. "))
      
      
    }
   
           
            
    render() {
        console.log("data11111.."+this.state.data);
        return(
            
            <MapLocate data={this.state.data} history={this.props.history}/>
        )
    }
}