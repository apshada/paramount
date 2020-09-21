import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeStackNavigator, AboutStackNavigator, ContactStackNavigator, CallStackNavigator, ChartStackNavigator, PaymentStackNavigator, ProfileStackNavigator, NewsStackNavigator, EconomicStackNavigator, OfferStackNavigator} from './createStackNavigator';
import HomeScreen from '../screens/HomeScreen';
import CallScreen from '../screens/CallScreen';
import ChartScreen from '../screens/ChartScreen';
import MoreScreen from '../screens/MoreScreen';
import { Ionicons } from '@expo/vector-icons'
import AnimatedSplash from "react-native-animated-splash-screen";
import { SafeAreaView } from 'react-native';

// const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function DrawerNavigator() {

  const [ isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true)
    }, 1000);
    return () => clearTimeout(timer);
  }, []);


    return (
        // <Drawer.Navigator  hideStatusBar={false} initialRouteName="Home">
        //     <Drawer.Screen  name="Home" component={HomeStackNavigator}/>
        //     <Drawer.Screen  name="Profile" component={AboutStackNavigator}/>
        //     <Drawer.Screen  name="Live Call" component={CallStackNavigator}/>
        //     <Drawer.Screen  name="Live Chart" component={ChartStackNavigator}/>
        //     <Drawer.Screen  name="Payment" component={PaymentStackNavigator}/>
        //     <Drawer.Screen  name="Offers" component={ContactStackNavigator}/> 
        // </Drawer.Navigator>
        <AnimatedSplash
        translucent={false}
        isLoaded={isLoaded}
        logoImage={require("../assets/logo01.png")}
        backgroundColor={"transparent"}
        logoHeight={550}
        logoWidth={450}

      >
        {/* <SafeAreaView forceInset={{ top: 'always' }} style={{ backgroundColor: '#212121'}}></SafeAreaView> */}

        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home';
            } 
            else if (route.name === 'Live Call') {
              iconName = focused ? 'logo-usd' : 'logo-usd';
            }
            else if (route.name === 'Live Chart') {
                iconName = focused ? 'ios-trending-up' : 'ios-trending-up';
              }
              else if (route.name === 'More') {
                iconName = focused ? 'ios-list' : 'ios-list';
              }
              
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          pressColor: 'gray',//for click (ripple) effect color
          style: {
            backgroundColor: 'black',//color you want to change
            height : 50
          }
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Live Call" component={CallScreen} />
        <Tab.Screen name="Live Chart" component={ChartScreen} />
        <Tab.Screen name="More" component={MoreScreen} />
        <Tab.Screen name="Profile" component={ProfileStackNavigator} options={{tabBarVisible : true,   tabBarButton: () => null,}} />
        <Tab.Screen name="Payment" component={PaymentStackNavigator}  options={{tabBarVisible : true,   tabBarButton: () => null,}} />
        <Tab.Screen name="News" component={NewsStackNavigator}  options={{tabBarVisible : true,   tabBarButton: () => null,}} />
        <Tab.Screen name="Economic" component={EconomicStackNavigator}  options={{tabBarVisible : true,   tabBarButton: () => null,}} />
        <Tab.Screen name="Offer" component={OfferStackNavigator}  options={{tabBarVisible : true,   tabBarButton: () => null,}} />
        {/* <Tab.Screen name="More" component={MoreScreen} />
        <Tab.Screen name="More" component={MoreScreen} />
        <Tab.Screen name="More" component={MoreScreen} />
        <Tab.Screen name="More" component={MoreScreen} /> */}
      </Tab.Navigator>
      </AnimatedSplash>
    )

}