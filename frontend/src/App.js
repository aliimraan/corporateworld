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
import hrDashboard from './components/dashboards/hrDashboard/Viewapp';
import Approve from './components/dashboards/hrDashboard/Approve';
import Account from './components/dashboards/hrDashboard/Account';
import Approveuser from './container/Content/contenthr/approve/Approveuser';


function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/login/forget_pass" component={Forget} />
        <Route path="/corporate_login" component={Corporate} />
        <Route path="/user_dashboard/job_application/:id" exact component={userDasboard} />
        <Route path="/user_dashboard/view_application"  exact component={ViewApp} />
        <Route path="/user_dashboard/status"  exact component={Status} />
        <Route path="/hr_dashboard" exact component={hrDashboard} />
        <Route path="/hr_dashboard/approvedec_app" exact component={Approve} />
        <Route path="/hr_dashboard/account" exact component={Account} />
        <Route path="/contenthr/approve/:id" exact component={Approveuser} />

  
      </Switch>
    </div>
)
}


export default App ;

