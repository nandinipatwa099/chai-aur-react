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
function App() {
  return (
    <>
      {/* <NavBar /> -> hide for layout route */}

      <Routes>

        <Route element={<NavBar/>}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* <Route path="/*" element={<PageNotFound/>} /> */}
        <Route path="/*" element={<Navigate to="/login" />} />

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
