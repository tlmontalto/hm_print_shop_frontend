import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import DisplayPage from './components/DisplayPage';
import Navbar from './components/Navbar';
import {useState, useEffect} from 'react';
import NewItemForm from './components/NewItemForm';
import UserContextProvider from './context/UserContext';

// let baseURL;

// if (process.env.NODE_ENV === 'development') {
//   baseURL = 'http://localhost:5000/api/v1/';
// } else {
//   baseURL = 'https://hm-print-shop-backend.herokuapp.com/api/v1/';
// }

const baseURL = 'https://hm-print-shop-backend.herokuapp.com/api/v1/'

function App() {
const [items, setItems] = useState([])



  return (
    <div className="whole-app">
    <Router >
      <UserContextProvider>
        < Navbar />
      </UserContextProvider>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/login" component={Login}/>
        <Route path="/display/:id" exact component={DisplayPage}/>
        <Route path="/upload" component={NewItemForm}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
