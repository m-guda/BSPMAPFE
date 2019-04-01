import React from 'react';
import CondNav from '../condnav'
class AboutUs extends React.Component {

    render(){
        return (
            <div>
              <CondNav/> <br/><br/><br/><br/>
                <br/>
                <br/>
                <br/>
                <br/>
        <h1 style={{fontSize : '45px'}}><center>What we do?</center></h1>

        <br/>
        <div class="container">
        <div class="card">
        <div class="card-body px-lg-6 pt-0" >
        <br/>
        <br/>
        <p style={{fontSize : '20px'}}>
        Booksplorer is a one-stop destination for your search for finding the perfect bookstores around you. It helps you set various parameters and lets you find the book of your choice.
        <br/><br/>
        We save you time and money by searching every major catalog or book online, and letting you know which booksellers near you are offering the best deals. When you find a book you like, you can buy it directly from the original seller; we never charge a markup.
        <br/><br/>You can use us to search for any book you want, comparing the prices and offers among many bookstores near you. This means that you can find the best offer for the book you want from the nearest bookstore,  without needing to visit all those bookstores, one by one. </p>
        <br/>
        <br/>
        {/* <center><img src="https://cdn.pixabay.com/photo/2016/10/13/19/24/book-1738607_960_720.jpg" width="500" height="400"></img></center> */}
        </div>
        </div>
        </div>
        </div>
 
        );
    }
    }
    export default AboutUs;