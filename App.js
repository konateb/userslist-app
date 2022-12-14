import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import { Avatar } from "@rneui/themed";
import { ListItem } from "react-native-elements";
import axios from "axios";

const defaultParam = {
  seed: 1,
  page: 20,
  results: 5000,
};

const Item = ({ title, name, subtitle, avatar, id }) => (
  <ListItem
    bottomDivider
    containerStyle={{
      backgroundColor: "#cde1f9",
    }}
  >
    <Avatar size={64} rounded source={{ uri: avatar }} />
    <ListItem.Content>
      <ListItem.Title>{title}</ListItem.Title>
      <ListItem.Subtitle>{name}</ListItem.Subtitle>
      <ListItem.Subtitle>{subtitle}</ListItem.Subtitle>
    </ListItem.Content>
    <ListItem.Chevron />
  </ListItem>
);
export default function App() {
  const [userData, setUserData] = useState([]);
  const [formData, setFormData] = React.useState(defaultParam);

  const renderItem = ({ item }) => (
    <Item
      id={item.id}
      title={item.name.title}
      name={`${item.name.first} ${item.name.last}`}
      subtitle={item.email}
      avatar={item.picture.thumbnail}
    />
  );
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
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={userData}
          renderItem={renderItem}
          keyExtractor={(item) => item.email}
          ItemSeparatorComponent={renderSeparator}
          onEndReachedThreshold={50}
        />
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
