import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";

import ChatHearder from "./components/ChatHearder";
import RandomUsers from "./components/RandomUsers";
import { useState } from "react";

export default function App() {
  const [usersList, setUsersList] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <ChatHearder />
      <StatusBar animated={true} backgroundColor="#5786ccff" />
      <View style={styles.mainbox}>
        <RandomUsers usersList={usersList} setUsersList={setUsersList} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    fontSize: 30,
  },
  item: {
    padding: 20,
    marginTop: 5,
    fontSize: 15,
  },
});
