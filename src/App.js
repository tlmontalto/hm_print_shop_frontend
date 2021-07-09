import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import DisplayPage from './components/DisplayPage';
import Navbar from './components/Navbar';
import {useState, useEffect} from 'react';
import NewItemForm from './components/NewItemForm'

let baseURL;

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:5000/api/v1/hmpusers';
} else {
  baseURL = 'https://hm-print-shop-backend.herokuapp.com/';
}

function App() {
const [items, setItems] = useState([])



  return (
    <Router >
      < Navbar />
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/login" component={Login}/>
        <Route path="/display/:item" exact component={DisplayPage}/>
        <Route path="/upload" component={NewItemForm}/>
      </Switch>
    </Router>
  );
}

export default App;
