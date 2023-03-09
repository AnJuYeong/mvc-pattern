
import {Routes, Route } from "react-router-dom";
import Create from "./page/Create";
import Read from "./page/Read";
import './App.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Create></Create>}/>
        <Route path='/:id' element={<Read></Read>}/>
      </Routes>
    </div>
  )
}

export default App;
