import { Avatar } from "@rneui/themed";
import { ListItem } from "react-native-elements";

const Item = ({ title, name, avatar, email }) => {
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
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );
};

export default Item;
