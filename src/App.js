import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import './App.css'
import TodoComponent from "./Components/TodoComponent/TodoComponent";
import HomeComponent from "./Components/HomeComponent/HomeComponent";
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
import SidebarComponent from "./Components/SidebarComponent/SidebarComponent";
import AboutComponent from "./Components/AboutComponent/AboutComponent";

function App() {

  return (
        <Router>
    <div id="page">
      <header><HeaderComponent/></header>
      <main>
          <Routes>
            <Route exact path="/" element={<HomeComponent/>} />
            <Route exact path="/todo" element={<TodoComponent/>} />
            <Route exact path="/about" element={<AboutComponent/>} /> 
          </Routes>
      </main>
      <sidebar><SidebarComponent/></sidebar>
      <footer></footer>
    </div>
        </Router>
  )
}

export default App;
