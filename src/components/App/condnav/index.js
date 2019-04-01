import React, {Component} from 'react';
import NavBar from '../navbar';
import LoginNav from '../loginnav/index';
import { isNull } from 'util';
class  CondNav extends React.Component{

    
    render(){
        if(localStorage.getItem("AccessToken") != null )
        {
            return(<LoginNav/>)
            
        }
       else {
           return(<NavBar/>)
       }
    }

    }

export default CondNav;