import  Home  from "./Pages/Home";
import  Advices  from "./Pages/Advices";
import About from "./Pages/About";
import React from "react";
import Test from "./Pages/Test";
import Quiz from "./Pages/Quiz";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Questions from "./Pages/Questions";



function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/advices" element={<Advices/>} />
            <Route path="/test" element={<Test/>} />
            <Route path="/quiz" element={<Quiz/>} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
