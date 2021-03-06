import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Course from './components/Course/Course';
import AllCourses from './components/AllCourses/AllCourses';
import NotFound from './components/Error/NotFound';
import About from './components/About/About';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div className="App ">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/course">
            <Course></Course>
          </Route>
          <Route exact path="/allCourse">
            <AllCourses></AllCourses>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>

          {/* error handleing */}
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>

      </Router>


    </div>
  );
}

export default App;
