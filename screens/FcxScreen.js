import React, { Component, useEffect, useState } from 'react';
import {View,Text,Button, FlatList, Image, YellowBox} from 'react-native';
import * as firebase from 'firebase';
import ChatBackground from '../components/ChatBackGround'
import Header from '../components/Header'


YellowBox.ignoreWarnings(['Setting a timer']);
const FcxScreen = () => {
    function getUserData(uid) {
        firebase.database().ref('users/' + uid).once("value", snap => {
     
            setUserfcx(snap.val().fcxservice)
      
        })
      }
          const [fcxArray , setFcx] = useState([])
          const [userfcx, setUserfcx] = useState("")   

          useEffect(() => {
           
            const itemsRef2 = firebase.database().ref('fcx');
            itemsRef2.on('value', (snapshot) => {
              let items = snapshot.val();
              console.log
              let newState2 = [];
              for (let item in items) {
                newState2.push({
                  id: item,
                  fcx: items[item].fcx,
                  time: items[item].time
                });
              }
              setFcx(newState2)
              
            });
            firebase.auth().onAuthStateChanged(user => {
              if (user) {
 
                  getUserData(user.uid)
              }
          })
     

          }, []);
      
      
if(userfcx === "true"){
  return(

      
          // console.log(icxArray)
            // <ChatBackground>
            
              <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
           
              <FlatList
              //  inverted={true}
            data={fcxArray}
            renderItem={({ item }) => (
              <View style={{ display : 'flex',flexDirection : 'column', justifyContent : 'space-between', backgroundColor : '#fff', borderRadius : 4, borderWidth : 0.5,  padding : 10, margin : 10 }}>
                <Text style={{ color : 'black', fontSize : 20 }}> {item.fcx} </Text>
                <Text style={{ color : 'gray' }}>{item.time}</Text>
              </View>
            )}
          />
          </View>
          // </ChatBackground>
      
  
  )
            }
            else{
              return(
              // <ChatBackground>
            
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
           
              <Image
                 source={require("../assets/lock.png")}
                 style={{  height : 250, width : 310 }}
                />
            <Header>Locked Service</Header>
          </View>
          // </ChatBackground>
              );
            }
}




// class CallScreen extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  };
//     }
//     render() {
//         return (
//             <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
//                 <Text style={{textAlign:'center',marginBottom:50}}>CallScreen screen (HomeStackNavigator)</Text>
//                 {/* <Button
//                     title="See how a screen inside this stack works"
//                     onPress={() => {this.props.navigation.navigate('NestedHome')}}
//                 /> */}
//             </View>
//         );
//     }
// }

export default FcxScreen;