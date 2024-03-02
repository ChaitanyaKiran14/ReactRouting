<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from './Components/Home'
import Contact from "./Components/Contact";
import About from "./Components/About";
import NotFound from "./Components/NotFound";
import BlogItemDetails from "./Components/BlogItemDetails";
import Doremon from "./Components/TestFolder/DataFetch2";
=======
import Top from "./Components/Topportion"
import Bottom  from "./Components/BottomPortion"
import './App.css'
>>>>>>> 7b91670df2fb52d025635cffab2d70c57ed711d4

const App = () => {

  return (
    <div>
<<<<<<< HEAD
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path = "/" element = {<Home/>} /> 
        <Route path="/about" element = {<About/>} />
        <Route path = "/contact" element = {<Contact/>} />


        <Route path = "/blogs/:id" element = {<BlogItemDetails/>} />

        
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </BrowserRouter>   
      
      
=======
      <Top />
      <Bottom />
>>>>>>> 7b91670df2fb52d025635cffab2d70c57ed711d4
    </div>
  )

}

export default App