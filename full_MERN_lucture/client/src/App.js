import logo from './logo.svg';
import './App.css';

import {Routes, Route, Link} from 'react-router-dom'
import Dashboard from './component/Dashboard';
import Edit from './component/Edit';
import New from './component/New';

function App() {
  return (
    <div className="App">
      <h1>Welcome to User Tracker</h1>

      <Link to={"/"}>Home</Link>
      |
      <Link to={"/new"}>Add a User</Link>

      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/new' element={<Edit/>}></Route>
        <Route path='/edit/:id' element={<New/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
