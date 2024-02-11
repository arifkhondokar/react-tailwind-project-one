import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";


const router = createBrowserRouter(
  createRoutesFromElements(

    <>
    <Route element={<MainLayout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Route>
      <Route path='*' element={<Error/>}/>
    
    </>

    )
  )



function App() {
 

  return (
    <>
    <RouterProvider router={router} /> 
    </>
  )
}

export default App
