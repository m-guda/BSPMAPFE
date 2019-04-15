import React, { PureComponent } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'leaflet/dist/leaflet.css';

import LeafletMap from './components/map';
import Header from './components/header';
import Background from './components/App/background/index';
import Homepage  from "./components/App/homepage/index";
import Login from "./components/App/login/index";
//import Register from './components/App/register/index';
import UpdateProfile from './components/App/updateProfile/index'
import SearchDetails from './components/App/searchDetails/index'
import ViewBook from './components/App/viewbook/index';
//import LoginNav from './loginnav/index'
import SellBook from './components/App/sellbook/index';
import Profile from './components/App/profile/index';
import AboutUs from './components/App/aboutus/index';
import Reachout from "./components/App/homepage/reachout";
//import Locatebook from './locatebook/index';
import MapLocate from './components/App/maplocate/maplocate'
import View from './components/App/view/index';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import HomeLogin from "./components/App/homelogin";
import Viewmore from "./components/App/viewmore";
 
import MapRender from './components/mapRender';
import CreateBook from './components/App/updatebook/createdbook';
import UpdateBook from './components/App/updatebook/updatebook';
import Wishlist from './components/App/wishlist/index';
import Viewcreated from './components/App/viewcreatedbook';
// import LocateBook from "./components/App/locatebook/index"
class App extends PureComponent {
 
  render() {
    return (
      <div className="App" >
        <Router>
        <Switch>
        <Route exact path="/login" component={Login}/>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/viewbook" component={ViewBook}/>
                <Route exact path="/aboutus" component={AboutUs}/>
                <Route exact path="/register" component={MapRender}/>
                <Route exact path="/search" component={SearchDetails}/>
                <Route exact path="/background" component={Background}/>
                <Route exact path="/homelogin" component={HomeLogin}/>
                <Route exact path="/sellbook" component={SellBook}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/updateprofile" component={UpdateProfile}/>
                <Route exact path="/reachout" component={Reachout}/>
                <Route exact path="/viewmore" component={Viewmore}/>
                <Route exact path="/view" component={View}/>
                <Route exact path="/wishlist" component={Wishlist}/>
                <Route exact path="/viewcreated" component={Viewcreated}/>
                <Route exact path="/updatebook" component={CreateBook}/>
                <Route exact path="/editbook" component={UpdateBook}/>
                <Route exact path="/maplocate" component={MapLocate}/>
           
        {/* <Route exact path="/Maps" component={MapRender}/> */}
            <Redirect to="/" component={Homepage}/>
        </Switch>
    </Router> 
    </div>
  
    
    );
}
}

export default App;

