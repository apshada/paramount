import React, { Component, useState } from 'react';
import { View,Text, AsyncStorage, StyleSheet, Image, YellowBox, KeyboardAvoidingView, Dimensions } from 'react-native';
import * as firebase from 'firebase';
// import { Container, Content, Header, Form, Input, Item,Button, Label } from 'native-base'
// import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { emailValidator, passwordValidator } from '../core/util'
import { theme } from '../core/theme'
import Toast from '../components/Toast'
import Background from '../components/Background'
import { loginUser } from '../api/authApi'

YellowBox.ignoreWarnings(['Setting a timer']);

  
var firebaseConfig = {
  apiKey: "AIzaSyBf036mwEaUZtTi16KPcq0GIsd_ykNAPXo",
  authDomain: "paramountinfotechapp.firebaseapp.com",
  databaseURL: "https://paramountinfotechapp.firebaseio.com",
  projectId: "paramountinfotechapp",
  storageBucket: "paramountinfotechapp.appspot.com",
  messagingSenderId: "933646552643",
  appId: "1:933646552643:web:dea1e21d3e86b665e3cef6",
  measurementId: "G-CR1FWRVHT8"
};

  firebase.initializeApp(firebaseConfig);

  const LoginScreen = ({ navigation }) => {
    console.ignoredYellowBox = ['Setting a timer'];
    const [email, setEmail] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const high = Dimensions.get("window").height
    const wide = Dimensions.get("window").width - 30
    

    const _onLoginPressed = async () => {
        if (loading) return;
    
        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value);
    
        if (emailError || passwordError) {
          setEmail({ ...email, error: emailError });
          setPassword({ ...password, error: passwordError });
          return;
        }
    
        setLoading(true);
    
        const response = await loginUser({
          email: email.value,
          password: password.value
        });
    
        if (response.error) {
          setError(response.error);
        }
    
        setLoading(false);
       
        // console.log(response.uid)
        await firebase.auth().onAuthStateChanged(user => {
          if (user) {
            console.log("Data")
            console.log(user.uid)
            this.registerForPushNotificationsAsync(user.uid)
          }
      })
        
      };
      registerForPushNotificationsAsync = async (res) => {
        const {status : existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        let finalStatus = existingStatus;

        // only ask if permissions have not already been determined, because
        // iOS won't necessarily prompt the user a second time.
        if (existingStatus !== 'granted') {
            // Android remote notification permissions are granted during the app
            // install, so this will only ask on iOS
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }

        // Stop here if the user did not grant permissions
        if (finalStatus !== 'granted') {
            return;
        }

        // Get the token that uniquely identifies this device
        let token = await Notifications.getExpoPushTokenAsync();
        console.log(token)
        console.log("Some")
        console.log(res)
        console.log("More")
        // POST the token to our backend so we can use it to send pushes from there
        var updates = {}
        updates['/expoToken'] = token
        // console.log(user.uid)
        await firebase.database().ref('/users/' + res).update(updates)
        //call the push notification \
  
    }


      return(
        <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        {/* <Background>   */}
          <Image source={require('../assets/logone.png')} style={{ flex : 1, width : wide  }} />
          <View style={{ marginLeft : 20, marginRight : 20 }}>
        <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
      label="Password"
      returnKeyType="done"
      value={password.value}
      onChangeText={text => setPassword({ value: text, error: "" })}
      error={!!password.error}
      errorText={password.error}
      secureTextEntry
      autoCapitalize="none"
    />

<Button  loading={loading} mode="contained" onPress={_onLoginPressed}> 
        Login
      </Button>

      </View>

      <Image source={require('../assets/logtwo.png')}  style={{ flex : 1, width : wide  }} />

      <Toast message={error} onDismiss={() => setError("")} />

   {/* </Background> */}
   </KeyboardAvoidingView>
      );
  }

    

const styles = StyleSheet.create({
    forgotPassword: {
      width: "100%",
      alignItems: "flex-end",
      marginBottom: 24
    },
    container: {
      flex: 1
    },
    row: {
      flexDirection: "row",
      marginTop: 4
    },
    label: {
      color: theme.colors.secondary
    },
    link: {
      fontWeight: "bold",
      color: theme.colors.primary
    }
  });
  
export default LoginScreen;

