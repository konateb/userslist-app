import { FlatList, View } from "react-native";
import { useEffect, useState } from "react";

import Item from "./Item";
import axios from "axios";

const defaultParam = {
  seed: 1,
  page: 20,
  results: 50,
};
const RandomUsers = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://randomuser.me/api",
      params: {
        results: defaultParam.results,
        seed: defaultParam.seed,
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
  }, [defaultParam]);

  const renderItem = ({ item }) => (
    <Item
      id={item.id}
      title={item.name.title}
      name={`${item.name.first} ${item.name.last}`}
      subtitle={item.email}
      avatar={item.picture.thumbnail}
    />
  );
  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%",
        }}
      />
    );
  };
  return (
    <View>
      <FlatList
        data={userData}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
        keyExtractor={(item) => item.email}
        onEndReachedThreshold={50}
      />
    </View>
  );
};

export default RandomUsers;
