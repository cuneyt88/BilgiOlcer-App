import { Route, Routes } from "react-router-dom";
import Home from '../src/pages/Home'
import Classes from '../src/pages/Classes'
import Contact from '../src/pages/Contact'
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [quizState, setQuizState] = useState("")

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/classes" element={<Classes/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </>
    
  );
}

export default App;
