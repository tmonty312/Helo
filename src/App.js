import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Auth from './component/Auth';
// import Dashboard from './component/Dashboard';
// import Post from './component/Post';
// import Form from './component/Form';
import Routes from './route'
import {Router} from 'react-router-dom'
import {Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <Auth/>
       <Dashboard/>
       <Form/>
       <Post/> */}
        {/* <Link to="/">
          <p> Route 1 </p>
        </Link>
        <Link to="/2">
          <p> Route 2 </p>
        </Link>
        <Link to="/3">
        <p> Route 3 </p>
        </Link> */}
        
        {/* <Link to={this.props.match.url+'/'}/> */}
        {Routes}
       
      </div>
    );
  }
}

export default App;
