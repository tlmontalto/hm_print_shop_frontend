import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './resources/HomePage';
import SignUp from './resources/SignUp';
import Login from './resources/Login';
import DisplayPage from './resources/DisplayPage';
import Navbar from './resources/Navbar';


function App() {
  return (
    <Router >
      < Navbar />
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/login" component={Login}/>
        <Route path="/display" component={DisplayPage}/>
      </Switch>
    </Router>
  );
}

export default App;
