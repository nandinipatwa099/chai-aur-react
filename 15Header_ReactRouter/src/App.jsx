import Home from "./Home";
import Login from "./Login";
import About from "./About";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./NavBar";
import PageNotFound from "./PageNotFound";
import College from "./College";
import Student from "./Student";
import Department from "./Department";
import Details from "./Details";
import Users from "./Users";
import UsersDetails from "./UsersDetails";
function App() {
  return (
    <>
      {/* <NavBar /> -> hide for layout route */}

      <Routes>

        <Route element={<NavBar/>}>
          <Route path="/home" element={<Home />} />
          <Route path="/user/list?" element={<Users/>} />      {/*  --> this is static optional segment */} 
          {/* <Route path="/user/list" element={<Users/>} /> */}

          <Route path="/user/:id/:name?" element={<UsersDetails/>}/>    {/*  --> this is dynamic optional segment */} 
          
         
         <Route path="/in">
         <Route path="/in/user">
          <Route path="/in/user/about" element={<About />} />
           <Route path="/in/user/login" element={<Login />} />
         </Route>
         </Route>

         
        </Route>

        <Route path="/*" element={<PageNotFound/>} />
        {/* <Route path="/*" element={<Navigate to="/login" />} /> */}

        <Route path="/college" element={<College />}>
          <Route index element={<Student />} />
          <Route path="department" element={<Department />} />
          <Route path="details" element={<Details />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
