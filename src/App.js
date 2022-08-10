import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./pagess/Home";
import Articles from "./pagess/Articles/Articles";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/article/:articleId" element={<Articles/>}/> 
    </Routes>
    </div>
  );
}

export default App;
