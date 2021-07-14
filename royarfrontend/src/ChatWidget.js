import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import './css/main.css';
import React, {useEffect, useState} from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import messageHandler from './messageHandler'


export default function ChatWidget() {

  const [prevResp, setPrevResp] = useState('')

  useEffect(() => {
    addResponseMessage('Hi! Let us help you find what you are looking for!');
    addResponseMessage('If you want to speak with our agents simply type "help"');
    addResponseMessage('Please type buy, rent, or sell for us to navigate to your likings.');
    addResponseMessage('If you are roman or ismail, please type pizduyar.');
    setPrevResp('Please type buy, rent, or sell for us to navigate to your likings.')
  }, []);

  const handleNewUserMessage = (newMessage) => {
    // Now send the message throught the backend API
    var str = messageHandler(prevResp, newMessage)
    setPrevResp(str)
    addResponseMessage(str)
    console.log(prevResp)

  }

  return (
      <Widget
          handleNewUserMessage={handleNewUserMessage}
          title="Royar Help Desk"
          subtitle="online"/>
  );
}
