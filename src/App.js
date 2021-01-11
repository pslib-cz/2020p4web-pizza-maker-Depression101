import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MyDropdown from './components/Dropdown'
import {Navbar} from 'reactstrap'
import Ingredients from './components/Ingredients';
import Pizza from './components/Pizza';
import NotFound from './components/NotFound';
import Calzone from './components/Calzone'
import { useState } from 'react';


function App() {
  const [values,setValues] = useState([]);
  const initialValues = [{name:"ham", category:"meat"},{name:"salami", category:"meat"}];
  return (
    <div className="App">
      <Router>
        <Navbar expand="md">
          <MyDropdown/>
        </Navbar>
          <Switch>
            <Route path="/ingredients">
              <Ingredients values={values} setValues={setValues}></Ingredients>
            </Route>
            <Route path="/order/pizza">
              <Pizza></Pizza>
            </Route>
            <Route path="/order/calzone">
              <Calzone></Calzone>
            </Route>
            <Route exact path="/">
            </Route>
            <Route component={NotFound}></Route>
          </Switch>
      </Router>
    </div>
  );
}
export default App;
