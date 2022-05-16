import React from "react";
import {
  BrowserRouter, Route, Routes, Link
} from "react-router-dom";
import { useParams } from "react-router";
import Home from "./components/Home";
import Word from "./components/Word";






function App() {
  
  return ( 
    
      <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/:word" element={<Word/>} />
          <Route path="/:word/:color/:background" element={<Word/>} />
        </Routes>
      </div>
      </BrowserRouter>
    
  );
}
    
export default App;
