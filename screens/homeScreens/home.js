import React, { useState,Component } from 'react';
import { Text, View,Button , StyleSheet,StatusBar,SafeAreaView,Image,TouchableHighlight } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

 //You can use  global.userId to get UserId ,
  //syntax {global.userId }


  class Home extends Component {
  constructor(props){
    super(props);
   
    
  }
  

  

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#08d4c4"/>
        <View style={styles.head}>
            <Image
            style={styles.userImage}
            source={require('../../img/logo.png')}/>
           
              <Text style={{fontSize:24,color:'#fff',fontWeight:'bold',paddingBottom:2}}>Book worm</Text>
                
                <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
                  
                  <Icon style={{marginRight:5,marginLeft:5}}
                    name="search" color={'#333'} size={28} backgroundColor={"#08d4c4"}
                    onPress={()=>this.props.navigation.navigate('SearchScreen')}
                    />
                   
                    <Icon style={{marginRight:20,marginLeft:5}}
                    name="options" color={'#333'} size={28} backgroundColor={"#08d4c4"}
                    onPress={()=>this.props.navigation.navigate('FilterScreen')}
                    />
                  
                 
              </View>
         </View>
        
        
        
        

      
      </View>

      
      
   );
  
}
}
const styles = StyleSheet.create({
 container:{
   flex:1,
   backgroundColor:'#fff',
 },
 head:{
   height:58,
   backgroundColor:"#08d4c4",
   flexDirection:'row',
   justifyContent:'space-between',
   alignItems:'center',
   paddingTop:20,
   paddingRight:0,
   paddingBottom:20,
   paddingLeft:20

 },
 userImage:{
   width:50,
   height:50,
   borderRadius:50,
},
 filter:{
  height:500,
  width:'100%',
  backgroundColor:'#fff',
}
 ,filter1:{
  height:1000,
  backgroundColor:'red',


  
 }
})
export default Home 