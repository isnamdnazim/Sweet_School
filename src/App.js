// import all the file
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notfound from './components/Notfound/Notfound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Student from './components/Student/Student';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path="/home">
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path="/services">
            <Services></Services>
            <Footer></Footer>
          </Route>
          <Route path="/about">
            <About></About>
            <Footer></Footer>
          </Route>
          <Route path="/student">
            <Student></Student>
            <Footer></Footer>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
