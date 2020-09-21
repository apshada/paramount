import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'
import {View,Text,Button, ActivityIndicator, StyleSheet, Image, Dimensions} from 'react-native';
import ContactScreen from './ContactScreen';
import { ContactStackNavigator } from '../navigation/createStackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from '../navigation/createDrawerNavigator';
import PaymentScreen from './PaymentScreeen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Appbar } from 'react-native-paper';


const Stack = createStackNavigator();

const MoreScreen = ({ navigation }) => {

    const wide = Dimensions.get("window").width
    return(
        
    //   // <NavigationContainer>
    //   <Stack.Navigator>
    //     {/* <Stack.Screen name="Home" component={DrawerNavigator} /> */}
    //     {/* <Stack.Screen name="Settings" component={ContactScreen} /> */}
    //     <Stack.Screen name="Settings" component={PaymentScreen} />
    //   </Stack.Navigator>
    // // </NavigationContainer>
    <>
    {/* <Appbar.Header>
    <Appbar.Content title="Paramount Infotech"  />
  </Appbar.Header> */}
  <View style={{ marginVertical : 10 }}>
   <Image source={require('../assets/para.png')} style={{ height : 53, width : 225, marginLeft : 10 }} />
   </View>
    <View  style={styles.MainContainer}>

      <TouchableOpacity onPress={() =>
        navigation.navigate('Profile')
      }>
        <View style={{ display : 'flex', flexDirection : 'row', marginVertical : 20 }}>
        <Ionicons name="ios-person" size={24} color="gray" style={{ marginLeft : 15 }} />
        <Text style={{ marginLeft : 20, fontSize : 18, color: "gray" }}>Profile</Text>
        
        </View>
        <View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth: 0.4,
    width : wide
  }}
/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() =>
        navigation.navigate('Payment')
      }>
        <View style={{ display : 'flex', flexDirection : 'row', marginVertical : 10 }}>
        <Ionicons name="ios-cash" size={24} color="gray" style={{ marginLeft : 15 }} />
        <Text style={{ marginLeft : 20, fontSize : 18, color: "gray" }}>Payment</Text>
        </View>
        <View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth: 0.4,
    width : wide
  }}
/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() =>
        navigation.navigate('News')
      }>
        <View style={{ display : 'flex', flexDirection : 'row', marginVertical : 10 }}>
        <Ionicons name="md-paper" size={24} color="gray" style={{ marginLeft : 15 }} />
        <Text style={{ marginLeft : 20, fontSize : 18, color: "gray" }}>News</Text>
        </View>
        <View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth: 0.4,
    width : wide
  }}
/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() =>
        navigation.navigate('Economic')
      }>
        <View style={{ display : 'flex', flexDirection : 'row', marginVertical : 10 }}>
        <Ionicons name="md-calendar" size={24} color="gray" style={{ marginLeft : 15 }} />
        <Text style={{ marginLeft : 20, fontSize : 18, color: "gray" }}>Economic Calendar</Text>
        </View>
        <View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth: 0.4,
    width : wide
  }}
/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() =>
        navigation.navigate('Offer')
      }>
        <View style={{ display : 'flex', flexDirection : 'row', marginVertical : 10 }}>
        <Ionicons name="ios-flame" size={24} color="gray" style={{ marginLeft : 15 }} />
        <Text style={{ marginLeft : 20, fontSize : 18, color: "gray" }}>Research Reports</Text>
        </View>
        <View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth: 0.4,
    width : wide
  }}
/>
      </TouchableOpacity>
     
    {/* <Button
      title="Profile"
      onPress={() =>
        navigation.navigate('Profile')
      }
      // color="white"
    /> */}
    {/* <Button
      title="Payment"
      onPress={() =>
        navigation.navigate('Payment')
      }
      // color="white"
      style={styles.butonStyle}
    /> */}
    {/* <Button
      title="News"
      onPress={() =>
        navigation.navigate('News')
      }
      color="white"
      style={styles.butonStyle}
    /> */}
    {/* <Button
      title="Economic Calender"
      onPress={() =>
        navigation.navigate('Economic')
      }
      color="white"
      style={styles.butonStyle}
    /> */}
     {/* <Button
      title="Offers"
      onPress={() =>
        navigation.navigate('Offer')
      }
      color="white"
      style={styles.butonStyle}
    /> */}
    </View>
    </>
    )
}

const styles = StyleSheet.create(
  {
  
  MainContainer: 
  {
  
  flex: 1,
  
  // // Set content's vertical alignment.
  // justifyContent: 'center',
  
  // // Set content's horizontal alignment.
  alignItems: 'flex-start',
  
  // Set hex color code here.
  backgroundColor: 'white',
  
  }
  
  });

export default MoreScreen