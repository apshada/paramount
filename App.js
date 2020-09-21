import React from 'react';
import { StyleSheet, Text, View, YellowBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/createDrawerNavigator';
import AuthLoading from './screens/AuthLoading';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();
YellowBox.ignoreWarnings(['Setting a timer']);

export default class App extends React.Component{
  
  render(){
    return(
    
      <NavigationContainer>
      <AppStack.Navigator headerMode='none' initialRouteName= "AuthLoading">
      <AppStack.Screen name="AuthLoading"  component={AuthLoading} />
      <AppStack.Screen name="Main" component={DrawerNavigator}/>
      <AppStack.Screen name="Login" component={LoginScreen} /> 
      <AppStack.Screen name="SignUp" component={SignUpScreen} />  
      </AppStack.Navigator>
</NavigationContainer>

      
    )
  }
}


// export default function App() {
//   return (
//     <NavigationContainer>
//           <AppStack.Navigator headerMode='none' initialRouteName= "AuthLoading">
//           <AppStack.Screen name="AuthLoading"  component={AuthLoading} />
//           <AppStack.Screen name="Main" component={DrawerNavigator}/>
//           <AppStack.Screen name="Login" component={LoginScreen} /> 
//           <AppStack.Screen name="SignUp" component={SignUpScreen} />  
//           </AppStack.Navigator>
//     </NavigationContainer>

//   );  
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
