import React, { Component, useEffect, useState } from 'react';
import {View,Text,Button,  StyleSheet, Image, YellowBox} from 'react-native';
import * as firebase from 'firebase';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatBackground from '../components/ChatBackGround'
import Header from '../components/Header'
import ReversedFlatList from 'react-native-reversed-flat-list';

YellowBox.ignoreWarnings(['Setting a timer']);
const IcxScreen = () => {
    function getUserData(uid) {
        firebase.database().ref('users/' + uid).once("value", snap => {
            // setUserData(snap.val())
            setUsericx(snap.val().icxservice)
        })
      }
      const [icxArray , setIcx] = useState([])   
      const [usericx, setUsericx] = useState("")   
     
          useEffect(() => {
            // Update the document title using the browser API
            const itemsRef1 = firebase.database().ref('icx');
            itemsRef1.on('value', (snapshot) => {
              let items = snapshot.val();
              // console.log(items)
              let newState1 = [];
              for (let item in items) {
                newState1.push({
                  id: item,
                  icx: items[item].icx,
                  time: items[item].time
                });
              }
              setIcx(newState1)
              
            });
      
        
            firebase.auth().onAuthStateChanged(user => {
              if (user) {
                  getUserData(user.uid)
              }
          })

          }, []);
      
      
    if(usericx === "true"){     
  return(
            // <ChatBackground>
              <View style={styles.MainContainer}>
           
              <ReversedFlatList
              //  inverted={true}
              style={styles.container}
            data={icxArray}
            renderItem={({ item }) => (
              <View style={{ display : 'flex',flexDirection : 'column', justifyContent : 'space-between', backgroundColor : '#fff', borderRadius : 4, borderWidth : 0.5,  padding : 10, margin : 10 }}>
                 <Text style={{ color : 'black', fontSize : 20 }}> {item.icx}</Text>
                <Text style={{ color : 'gray' }}>{item.time} </Text>
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
              )
            }
}

const styles = StyleSheet.create({
    MainContainer: {
      justifyContent: 'center',
      flex: 1,
      // marginLeft: 10,
      // marginRight: 10,
      marginBottom: 10,
      marginTop: 30,
    },
  
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    
  });

export default IcxScreen;