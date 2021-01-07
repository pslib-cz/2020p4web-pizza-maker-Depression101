import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar, NavbarBrand, NavbarToggler } from "reactstrap";
import { render } from '@testing-library/react';
var bool = false;
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar expand="md">
          <NavbarBrand href="/order/pizza">Pizza</NavbarBrand>
          <NavbarToggler onClick={toggle()}></NavbarToggler>
          
        </Navbar>
          <Switch>
            <Route path="/order/pizza">
              
            </Route>
            <Route path="/order/calzone">
              
            </Route>
            <Route path="/">
              
            </Route>
          </Switch>
      </Router>
    </div>
  );
}
function toggle(){
  bool= !bool;
  render();
};
function Bool(){
  if(bool)
  {
    return <h2>Bool is true</h2>
  }
  else
    return <h2>Bool is false</h2>
};
export default App;
