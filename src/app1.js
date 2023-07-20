import React from "react";
import './app.css';
import Navbar from "./components/navbar/navbar";
import Home from "./components/Home/Home";
import Footer from "./components/footer/footer";
import Main from "./components/main/main";

const App = ()=>{
return (
   <>
   <Navbar/>
    <Home/>
   <Main/>
   {/* <Footer/> */}
   </>
)
}

export default App