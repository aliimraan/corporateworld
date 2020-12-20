import logo from './logo.svg';
import './App.css';
import {Switch,Route, Router} from 'react-router-dom'
import Viewadmin from './Superadmin/Dashboard/adminDashboard/Viewadmin';
import Viewhr from './Superadmin/Dashboard/adminDashboard/Viewhr';


function App() {
  return (
    <div>
    <Viewadmin/>
        </div>
  );
}

export default App;
