/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

*/

//import React from "react";
//import { Route } from "react-router-dom";
import axios from "axios";

//HOC
import DefaultHOC from "./hoc/defaulthoc";
import MovieHOC from "./hoc/Movie.HOC";
import EventsHOC from "./hoc/Events.HOC";

//pages
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";
import EventsPage from "./pages/Events.page";


//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};  // fakeing an empty object
axios.defaults.params["api_key"]=process.env.REACT_APP_API_KEY; // here "api_key" is named like that because it is specified in the base of the example api in tmdb page

//Component
//import Temp from "./components/temp";
//import Navbar from "./components/navbar/navbar.components";

function App() {
  return (
    <>
     <DefaultHOC path="/" exact component={HomePage} />
     <MovieHOC path="/movie/:id" exact component={Movie} />
     <EventsHOC path="/events" exact component={EventsPage} />
    </>
  );
}
// / , /movie
export default App;
//temp.js->default layout-> DefaultHOC -> App.js -> Index.js
//inner->outer
