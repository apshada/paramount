import React, { Component } from 'react';
import {View,Text,AsyncStorage, ActivityIndicator ,YellowBox} from 'react-native';
import * as firebase from 'firebase';
import {theme} from '../core/theme'
// firebase.initializeApp(FIREBASE_CONFIG);
YellowBox.ignoreWarnings(['Setting a timer']);
const AuthLoading = ({ navigation }) => {
  console.ignoredYellowBox = ['Setting a timer'];
  firebase.auth().onAuthStateChanged(user => {

    if (user) {
      // User is logged in
      // console.log(user)
      navigation.navigate('Main',{screen:'Home'});
    } else {
      // User is not logged in
      navigation.navigate("Login");
    }
  });

  return(
    <ActivityIndicator size="large"  color={theme.colors.primary} />
  );
}
// class AuthLoading extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }

//     componentDidMount() {
//         //You can check if a user's token is stored in localstorage and is valid.
//         this.retrieveData();
//     }


//     retrieveData = async () => {
//         try {
//           const value = await AsyncStorage.getItem('isLoggedIn');
//           if (value !== null) {
//             this.props.navigation.navigate('Main',{screen:'Home'})
//           } else {
//             this.props.navigation.navigate('Login')
//           }
//         } catch (error) {
//           // Error retrieving data
//         }
//       };

//     render() {
//         return (
//             // No need to return anything since this component does not render anything. 
//             // It simply acts as a middleman between the main part of your app that only authenticated users
//             // see, and the parts of the app required to authenticate those users.
//             null
//         );
//     }
// }

export default AuthLoading;