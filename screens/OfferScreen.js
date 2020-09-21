import React, { Component, useState, useEffect } from 'react';
import {View,Text,Button, Alert,ToastAndroid, Dimensions, StyleSheet} from 'react-native';
import * as firebase from 'firebase';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';

const OfferScreen = () => {

    const [uril,setUri] = useState("")
    
    useEffect(() => {
      const itemsRef3 = firebase.database().ref('offers');
     itemsRef3.on('value', (snapshot) => {
       let items = snapshot.val();
      //  console.log(items.offer)
      JSON.stringify(items.offer)
      setUri(items.offer)
      //  setUri(newState3)
       
     });     
   }, []);


    const downLoadFile = () => {
   

      downloadFi()
      
    }


  const showStartToast = () => {
    ToastAndroid.show("Download Started", ToastAndroid.SHORT);
  };
  const showFinishToast = () => {
    ToastAndroid.show("Download Finished", ToastAndroid.SHORT);
  }


    const downloadFi = () => {
      const uri = uril
      let fileUri = FileSystem.documentDirectory + "Research Report.pdf";
      showStartToast()
      FileSystem.downloadAsync(uri, fileUri)
      .then(({ uri }) => {
          // this.saveFile(uri);
          saveFile(uri)
          console.log('Finished downloading to ', uri);
          showFinishToast()
        })
        .catch(error => {
          console.error(error);
        })

        
        
  }
  
  const saveFile = async (fileUri) => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status === "granted") {
          const asset = await MediaLibrary.createAssetAsync(fileUri)
          await MediaLibrary.createAlbumAsync("Download", asset, false)
      }
  }

  const high = Dimensions.get("window").height
  const wide = Dimensions.get("window").width - 10

    return(
        <View style={{flex:1,paddingRight : 20, paddingLeft : 20}}>
        {/* <Text style={{textAlign:'center',marginBottom:50}}>{pdf}</Text> */}
        <View style={styles.title}>
          <Text style={styles.testStyle} >
            Research Report
          </Text>
          <TouchableOpacity  onPress={downLoadFile}>
          <Ionicons name="md-download" size={32} color="white" />

          </TouchableOpacity>
        
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 0,
    // borderColor: "tomato",
    borderRadius: 6,
    backgroundColor: "tomato",
    color: "white",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    flexDirection : "row",
    
  },
  testStyle : {
    textAlign: "center",
    fontSize: 25,
    color : "white",
    paddingRight : 30,
    paddingLeft : 20
  }
});

export default OfferScreen;