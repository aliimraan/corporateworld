import logo from './logo.svg';
import './App.css';

import Forget from './components/forget_pass/Forget';
import {Switch,Route} from 'react-router-dom'
import Register from './components/register/Register'
import Login from './components/login/Login';
import Home from './components/Home/Home';
import Corporate from './components/corporate/Corporate';
import userDasboard from './components/dashboards/userDashboard/JobApp';
import ViewApp from './components/dashboards/userDashboard/ViewApp';
import Status from './components/dashboards/userDashboard/Status';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/login/forget_pass" component={Forget} />
        <Route path="/corporate_login" component={Corporate} />
        <Route path="/user_dashboard" exact component={userDasboard} />
        <Route path="/user_dashboard/view_application"  component={ViewApp} />
        <Route path="/user_dashboard/status"  component={Status} />
  
      </Switch>
    </div>
)
}


export default App ;

