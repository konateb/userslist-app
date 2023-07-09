import { Avatar } from "@rneui/themed";
import { ListItem } from "react-native-elements";

const Item = ({ title, name, avatar, email, flag, countryName }) => {
  return (
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
        <ListItem.Subtitle>{email}</ListItem.Subtitle>
        <ListItem.Title>{countryName}</ListItem.Title>
      </ListItem.Content>
      <Avatar size={50} source={{ uri: flag }} />
      <ListItem.Chevron />
    </ListItem>
  );
};

export default Item;
