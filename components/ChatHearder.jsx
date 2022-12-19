import { Header } from "react-native-elements";
import React from 'react'

const ChatHearder = () => {
  return (
    <Header
      barStyle="light-content"
      leftComponent={{ icon: "menu", color: "#fff", paddingTop: 10 }}
      centerComponent={{
        text: "Kale Chat.",
        style: { color: "#fff", paddingTop: 10 },
      }}
      rightComponent={{ icon: "logout", color: "#fff", paddingTop: 10 }}
      containerStyle={{
        backgroundColor: "#5786ccff",
        justifyContent: "space-around",
      }}
    />
  );
}

export default ChatHearder