import React, { Component } from 'react';
import {View,Text,Button, YellowBox, StyleSheet , ImageBackground, StatusBar, Image, BackHandler,  ToastAndroid} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



YellowBox.ignoreWarnings(['Setting a timer']);
class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
    componentDidMount() {
      BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
      
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
      
        return (
         
        //   <AnimatedSplash
        //   translucent={false}
        //   isLoaded={this.state.isLoaded}
        //   logoImage={require("../assets/logo01.png")}
        //   backgroundColor={"transparent"}
        //   logoHeight={550}
        //   logoWidth={450}

        // >
          <View style={{flex:1}} >  
           <StatusBar  
              backgroundColor='black'  
              barStyle='light-content'  
          />      
       
        
            <View style={styles.container}>
            {/* <Appbar.Header style={{ height : 10, backgroundColor : 'white'}}> */}
              
          {/* <Appbar.Content title="Home" style={{ marginHorizontal : 3 }}  /> */}
        {/* </Appbar.Header> */}

            <ImageBackground source={require('../assets/one.jpg')} style={styles.image}>
         
            </ImageBackground>
          </View>
         
         </View>
        // </AnimatedSplash>
          
        );
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