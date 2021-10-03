import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
      </BrowserRouter>
      <button className="btn btn-success">Search</button>
      <div className="d-flex"> <h1>hello</h1><h1>now</h1></div>
    </div>
  );
}

export default App;
