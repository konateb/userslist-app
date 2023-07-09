import { FlatList, View } from "react-native";
import { useEffect, useState } from "react";

import Item from "./Item";
import axios from "axios";
import countryCode from "../utils/countries";
const defaultParam = {
  seed: 1,
  page: 20,
  results: 50,
};
const RandomUsers = () => {
  const [usersList, setUsersList] = useState([]);
  
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
    
    setUsersList(data);
  };
  useEffect(() => {
    fetchData();
  }, []); 

  const renderItem = ({ item }) => (
    <Item
      title={item.name.title}
      name={`${item.name.first} ${item.name.last}`}
      email={item.email}
      avatar={item.picture.thumbnail}
      flag={`https://flagsapi.com/${countryCode(item.location.country)}/flat/64.png`}
      countryName ={item.location.country}
    />
  );
  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 3,
          width: "100%",
          backgroundColor: "#5786ccff",
          marginLeft: "0%",
        }}
      />
    );
  };
  return (
    <View>
      <FlatList
        data={usersList}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
        keyExtractor={(item) => item.email}
        onEndReachedThreshold={50}
      />
    </View>
  );
};

export default RandomUsers;
