
import React, { Component } from "react";
import {
  Chat,
  Channel,
  ChannelHeader,
  Thread,
  Window
} from "stream-chat-react";
import { MessageList, MessageInput } from "stream-chat-react";
import { StreamChat } from "stream-chat";

import "stream-chat-react/dist/css/index.css";

const chatClient = new StreamChat.getInstance('2myywf7yfbk8',{timeout:6000});

chatClient.connectUser(
    {
        id: 'john',
        name: 'John Doe',
        image: 'https://getstream.io/random_svg/?name=John',
    },
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoic3RlZXAtbWF0aC05In0.Kp_qtwRR6hQsjdnehqbmpbCvZOSRIvDMQ4l1mBueE6Y',
);


class App extends Component {
  constructor(props) {
    super(props);
}
  render() {
    return (
      <Chat client={this.client} theme={"messaging light"}>
        <Channel channel={this.channel}>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat>
    );
  }
}

export default App;
