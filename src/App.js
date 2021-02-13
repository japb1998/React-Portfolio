import logo from './logo.svg';
import './App.css';
import React,{useContext} from 'react';
import {ThemeProvider , useTheme,useThemeUpdate} from './ThemeContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Column} from 'react-bootstrap';
import NavBarComponent from './components/NavBar';
import { HashRouter as Router, Route,Switch} from "react-router-dom";
import Portfolio from './Portfolio';
import Home from './Home';
import  Footer  from "./components/Footer";
import ProjectDetails from './components/ProjectDetails';

function App() {
const darkTheme = useTheme();
const toggleTheme = useThemeUpdate();
console.log(darkTheme , toggleTheme)
  const projects = [
    {
        id:1,
        title:'Budget Tracker',
        description:"An app for people who wants to save money but doesn't want to make the numbers",
        author:'Javier Perez',
        technologies:'Html,Css,Javascript,Node.js,Express,MongoDB',
        link:'https://young-retreat-92535.herokuapp.com/login'
    },{
      id:2,
      title:'Movies&Food',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus fuga natus recusandae quaerat eos temporibus blanditiis unde optio, ipsum repellat eligendi! Distinctio explicabo fuga at, veritatis voluptatibus molestiae voluptate!',
      author:'Javier Perez',
      technologies:'Html,Css,Javascript',
      link:'Placeholder'
  },{
    id:4,
      title:'Responsive Portfolio',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus fuga natus recusandae quaerat eos temporibus blanditiis unde optio, ipsum repellat eligendi! Distinctio explicabo fuga at, veritatis voluptatibus molestiae voluptate!',
      author:'Javier Perez',
      technologies:'Html,Css,Javascript',
      link:'https://japb1998.github.io/NewPortfolio/'
  },
];

  return (
    <Router>
      <ThemeProvider>
    <div className={darkTheme ? "main-dark" : "main"}>
    <NavBarComponent></NavBarComponent>
<Switch>
  <Route exact path='/' component={Home}></Route>
  <Route  exact path='/portfolio'>
    <Portfolio projects={projects}/>
  </Route>
  <Route path='/portfolio/:id' >
  <ProjectDetails projects={projects}/>
  </Route>
  </Switch>
    </div>
    <button className='button' onClick={()=>(toggleTheme())}>Click</button>
    <Footer></Footer>
    </ThemeProvider>
    </Router>
  );
}

export default App;
