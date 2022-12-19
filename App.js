import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";

import ChatHearder from "./components/ChatHearder";
import RandomUsers from "./components/RandomUsers";

export default function App() {
  

  return (
    <SafeAreaView style={styles.container}>
      <ChatHearder />
      <StatusBar animated={true} backgroundColor="#5786ccff" />
      <View style={styles.mainbox}>
        <RandomUsers/>
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
});
