import { SafeAreaView, StyleSheet, View } from "react-native";

import RandomUsers from "./components/RandomUsers";

export default function App() {
  

  return (
    <SafeAreaView style={styles.container}>
      <View>
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
  item: {
    padding: 20,
    marginTop: 5,
    fontSize: 15,
  },
});
