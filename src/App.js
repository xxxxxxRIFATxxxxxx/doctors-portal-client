import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Components/Home/Home';
import Appointment from './Components/Appointment/Appointment';
import Dashboard from './Components/Dashboard/Dashboard';
import AuthProvider from './Context/AuthProvider';
import Login from './Components/Login/Login';
import MyAppointments from './MyAppointments/MyAppointments';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <PrivateRoute exact path="/appointment">
            <Appointment />
          </PrivateRoute>

          <Route exact path="/myAppointments">
            <MyAppointments />
          </Route>

          <Route exact path="/dashboard">
            <Dashboard />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
