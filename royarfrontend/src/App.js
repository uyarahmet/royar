
import SlideShow from './SlideShow'
import SearchAndBackground from './SearchAndBackground'
import ActionMenu from './ActionMenu'
import Footer from './Footer'
import Navbar from './Navbar'
import ChatWidget from './ChatWidget'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import './css/main.css';
import React from 'react';
import 'react-chat-widget/lib/styles.css';


export default function App() {

  return (
    <div className="App">
      <Navbar/>
      <SearchAndBackground/>
      <SlideShow/>
      <ActionMenu/>
      <ChatWidget/>
      <Footer/>
    </div>
  );
}
