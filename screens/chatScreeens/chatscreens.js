import React, { useState, useEffect ,Component} from 'react';
import { Button, View, Image, StyleSheet,FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'
import { TouchableHighlight } from 'react-native-gesture-handler';


const list = [
  {
    name: 'Amy Farha',
    avatar_url: '../../img/2.jpeg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: '../../img/2.jpeg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Anas Jackson',
    avatar_url: '../../img/2.jpeg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Hello Jackson',
    avatar_url: '../../img/2.jpeg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'My name Jackson',
    avatar_url:"'../../img/2.jpeg'",
    subtitle: 'Vice Chairman'
  },
]
const styels=StyleSheet.create({
  img:{
    width:50,
    height:50
  }
})

class Chat extends Component {
 
keyExtractor = (item, index) => index.toString()
  
  renderItem = ({ item }) => (
    <ListItem bottomDivider
    onPress={()=>this.props.navigation.navigate('MessageScreen')}>
      <Image
        style={styels.img}
        source={require('../../img/2.jpeg') }>
       </Image>
     <ListItem.Content>
       
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  )
  
  render () {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={list}
        renderItem={this.renderItem}
      />
    )
  }
}
export default Chat 