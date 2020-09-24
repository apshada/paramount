import React, { Component } from 'react';
import {View,Text,Button, YellowBox, StyleSheet , ImageBackground, StatusBar, Image, BackHandler,  ToastAndroid} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as firebase from 'firebase';
import { ActivityIndicator } from 'react-native';


YellowBox.ignoreWarnings(['Setting a timer']);
class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {imageUri: ""};
    }
    
    componentDidMount() {
      BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
      const itemsRef3 = firebase.database().ref('images');
      itemsRef3.on('value', (snapshot) => {
        let items = snapshot.val();
        console.log(items.images)
       JSON.stringify(items.images)
       this.setState({ imageUri : items.images })
      //  setUri(items.offer)
       //  setUri(newState3)
        
      });     
      
    }
  
    componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }
  
    onBackPress = () => {
      this.showToast()
      return true; 

    }
    
    showToast = () => {
      ToastAndroid.show("Press Home to Exit", ToastAndroid.SHORT);
    };
    

    render() {

      if(this.state.imageUri.length > 0){

      
      
        return (
       
          <View style={{flex:1}} >  
           <StatusBar  
              backgroundColor='black'  
              barStyle='light-content'  
          />      
       
        
            <View style={styles.container}>
        
            <ImageBackground source={{uri: `${this.state.imageUri}`}} style={styles.image}>
         
            </ImageBackground>
          </View>
         
         </View>
        // </AnimatedSplash>
          
        );
    }
    else{
      return(
      <ActivityIndicator />
      )
    }
  }
  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    }
  });
  
export default HomeScreen;