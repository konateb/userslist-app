import { FlatList, View } from "react-native";

import Item from "./Item";
import axios from "axios";
import { useEffect } from "react";

const defaultParam = {
  seed: 1,
  page: 20,
  results: 50,
};
const RandomUsers = ({ userData, setUserData }) => {

  const fetchData = async () => {
    const options = {
      method: "GET",
      url: "https://randomuser.me/api",
      params: {
        results: defaultParam.results,
        seed: defaultParam.seed,
      },
    };
    const response = await axios.request(options);
    const data = await response.data.results;
    setUserData(data);
    //   setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

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
