import { SafeAreaView, StyleSheet, View } from "react-native";

import RandomUsers from "./components/RandomUsers";
import { useState } from "react";

export default function App() {
  
  const [userData, setUserData] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <RandomUsers userData={userData} setUserData={setUserData} />
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
