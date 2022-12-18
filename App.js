import { SafeAreaView, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";

import RandomUsers from "./components/RandomUsers";
import axios from "axios";

const defaultParam = {
  seed: 1,
  page: 20,
  results: 5,
};

export default function App() {
  const [userData, setUserData] = useState([]);
  const [formData, setFormData] = useState(defaultParam);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://randomuser.me/api",
      params: {
        results: formData.results,
        seed: formData.seed,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setUserData(response.data.results);
        console.log(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [formData]);

  
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <RandomUsers data={userData} />
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
