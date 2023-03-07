import {Routes, Route } from "react-router-dom";
import Login from "./components/login";
import PersonLists from "./components/PersonList";
import ResponsiveDrawer from "./components/Main";

function App() {
  return (
    
      <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/home" element={<ResponsiveDrawer />} />
      </Routes>
    
  
  );
}

export default App;
