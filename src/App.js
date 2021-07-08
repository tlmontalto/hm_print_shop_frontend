import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import DisplayPage from './components/DisplayPage';
import Navbar from './components/Navbar';
import {useState, useEffect} from 'react';


function App() {
const [items, setItems] = useState([])
const [file, setFile] = useState('')
const [price, setPrice] = useState('')
const [image, setImage] = useState('')


  return (
    <Router >
      < Navbar />
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/login" component={Login}/>
        <Route path="/:item" component={DisplayPage}/>
      </Switch>
    </Router>
  );
}

export default App;
