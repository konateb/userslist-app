import { FlatList, View } from "react-native";

import Item from "./Item";

const RandomUsers = ({ data }) => {
    
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
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
        keyExtractor={(item) => item.email}
        onEndReachedThreshold={50}
      />
    </View>
  );
};

export default RandomUsers;
