import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import Forget from './components/forget_pass/Forget';
import {Switch,Route} from 'react-router-dom'
import Register from './components/register/Register';
import Login from './components/login/Login';
import Home from './components/Home/Home';
function App() {
  return (
    <div>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/login" exact component={Login} />
      <Route path="/login/forget_pass" component={Forget} />
    </Switch>
     
=======
import Register from './components/register/register';






function App() {
  return (
    <div>
      <Register />
>>>>>>> 4dd927acda79532d5a9899fe42ec38140b4875af
    </div>
    
  );
}

export default App;
