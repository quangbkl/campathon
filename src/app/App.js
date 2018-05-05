import React, { Component } from 'react';
import '../App.css';
import Header from "./public-component/header/Header";
import HomePage from "./pages/home/HomePage";
import Footer from "./public-component/footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HomePage/>
        <Footer/>
      </div>
    );
  }
}

export default App;
