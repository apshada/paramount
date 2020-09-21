import React, { Component, useEffect, useState } from 'react';
import {View,Text,Button, FlatList, Image, YellowBox, StatusBar} from 'react-native';
import * as firebase from 'firebase';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatBackground from '../components/ChatBackGround'
import Header from '../components/Header'


YellowBox.ignoreWarnings(['Setting a timer']);
const Tab = createBottomTabNavigator();
const CcxScreen1 = () => {
    function getUserData(uid) {
        firebase.database().ref('users/' + uid).once("value", snap => {
            // console.log(snap.val
            setCcx1user(snap.val().ccx1service)
        })
      }

        
          const [ccx1Array , setCcx1] = useState([])   
          const [ccx1User, setCcx1user] = useState("")
      
      
          useEffect(() => {
             const itemsRef3 = firebase.database().ref('ccx1');
            itemsRef3.on('value', (snapshot) => {
              let items = snapshot.val();
              console.log()
              let newState3 = [];
              for (let item in items) {
                newState3.push({
                  id: item,
                  ccx: items[item].ccx1,
                  time: items[item].time
                });
              }
              setCcx1(newState3)
              console.log(ccx1Array)
            });
      
      
            
      
            firebase.auth().onAuthStateChanged(user => {
              if (user) {
                //   console.log(icxUser)
                  // console.log(user.object)
                  getUserData(user.uid)
              }
          })
        
          }, []);
      
      
if(ccx1User === "true"){
  return(

      
          // console.log(icxArray)
          
         
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
           
              <FlatList
               inverted={true}
            data={ccx1Array}
            renderItem={({ item }) => (
              <View style={{ display : 'flex',flexDirection : 'column', justifyContent : 'space-between', backgroundColor : '#fff', borderRadius : 4, borderWidth : 0.5,  padding : 10, margin : 10 }}>
                 <Text style={{ color : 'black', fontSize : 20 }}> {item.ccx} </Text>
                 <Text style={{ color : 'gray' }}>{item.time}</Text>
              </View>
            )}
          />
          </View>
         
       
      
  
  )
            }
            else{
              return(
           
            
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
             
                <Image
                   source={require("../assets/lock.png")}
                   style={{ height : 250, width : 310 }}
                  />
              <Header>Locked Service</Header>
            </View>
              );
            }
}



export default CcxScreen1;