import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import {Image, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NestedHome from '../screens/NestedHome';
import AboutScreen from '../screens/AboutScreen';
import ContactScreen from '../screens/ContactScreen';
import ChartScreen from '../screens/ChartScreen';
import PaymentScreen from '../screens/PaymentScreeen';
import CallScreen from '../screens/CallScreen';
import IcxScreen from '../screens/IcxScreen';
import FcxScreen from '../screens/FcxScreen';
import CcxScreen from '../screens/CcxScreen';
import NewsScreen from '../screens/NewsScreen';
import EconomicScreen from '../screens/EconomicScreen';
import OfferScreen from '../screens/OfferScreen';
// import { View, Container, Left, Header, Button, Icon, Right } from 'native-base';
import { Ionicons } from '@expo/vector-icons'


function HeaderComponent(props) {
  return (
  //   <Header>
  //   <Left>
  //     <Button
  //       transparent
  //       onPress={() => {props.navigation.toggleDrawer()}}
  //       // onPress={() => this.props.navigation.navigate("DrawerOpen")}
  //       >
  //       <Icon name="menu" />
  //     </Button>
  //   </Left>
  //   <Right />
  // </Header>
   
     
    <TouchableOpacity onPress={() => {props.navigation.goBack()}}   >
      <Ionicons name="md-arrow-round-back" size={28} color="black" style={{ marginLeft : 10 }}  />
      {/* <Image style={{width: 40, height: 40}} source={{uri:"https://img.icons8.com/bubbles/50/000000/menu.png"}}/> */}
      </TouchableOpacity>
   
      
  );
}

const HomeStack = createStackNavigator();

export function HomeStackNavigator({ navigation }) {
  return (
    <HomeStack.Navigator screenOptions={{headerLeft: () => <HeaderComponent navigation={navigation}/>}}>
      <HomeStack.Screen name="Home" options={{title:'Home Screen',headerTitleAlign:'center'}} component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const AboutStack = createStackNavigator();

export function AboutStackNavigator({navigation}) {
  return (
    <AboutStack.Navigator screenOptions={{headerLeft: () => <HeaderComponent navigation={navigation}/>}}>
    <AboutStack.Screen name="About" options={{title:'About Screen',headerTitleAlign:'center'}} component={AboutScreen} />
    {/* You can add more screens to your stack navigator and they will not appear in your drawer. */}
    </AboutStack.Navigator>
  )
}

const ContactStack = createStackNavigator();

export function ContactStackNavigator({navigation}) {
  return (
    <ContactStack.Navigator screenOptions={{headerLeft: () => <HeaderComponent navigation={navigation}/>}}>
    <ContactStack.Screen name="Offers" options={{title:'Offer Screen',headerTitleAlign:'center'}} component={ContactScreen} />
    {/* You can add more screens to your stack navigator and they will not appear in your drawer. */}
  </ContactStack.Navigator>
  )
}

const CallStack = createStackNavigator()
export function CallStackNavigator({navigation}) {
  return (
    <CallStack.Navigator screenOptions={{headerLeft: () => <HeaderComponent navigation={navigation}/>}}>
    <CallStack.Screen name="Call" options={{title:'Call Screen',headerTitleAlign:'center'}} component={CallScreen} />
    {/* You can add more screens to your stack navigator and they will not appear in your drawer. */}
  </CallStack.Navigator>
  )
}

const ChartStack = createStackNavigator()
export function ChartStackNavigator({navigation}) {
  return (
    <ChartStack.Navigator screenOptions={{headerLeft: () => <HeaderComponent navigation={navigation}/>}}>
    <ChartStack.Screen name="Chart" options={{title:'Chart Screen',headerTitleAlign:'center'}} component={ChartScreen} />
    {/* You can add more screens to your stack navigator and they will not appear in your drawer. */}
  </ChartStack.Navigator>
  )
}


const PaymentStack = createStackNavigator()
export function PaymentStackNavigator({navigation}) {
  return (
    <PaymentStack.Navigator screenOptions={{headerLeft: () => <HeaderComponent navigation={navigation}/>}}>
    <PaymentStack.Screen name="Payment" options={{title:'Payment Screen',headerTitleAlign:'center'}} component={PaymentScreen} />
    {/* You can add more screens to your stack navigator and they will not appear in your drawer. */}
  </PaymentStack.Navigator>
  )
}

const IcxStack = createStackNavigator()
export function IcxStackNavigator({navigation}) {
  return (
    <IcxStack.Navigator screenOptions={{headerLeft: () => <HeaderComponent navigation={navigation}/>}}>
    <IcxStack.Screen name="ICX Call" options={{title:'ICX Call',headerTitleAlign:'center'}} component={IcxScreen} />
    {/* You can add more screens to your stack navigator and they will not appear in your drawer. */}
  </IcxStack.Navigator>
  )
}


const FcxStack = createStackNavigator()
export function FcxStackNavigator({navigation}) {
  return (
    <FcxStack.Navigator screenOptions={{headerLeft: () => <HeaderComponent navigation={navigation}/>}}>
    <FcxStack.Screen name="FCX Call" options={{title:'FCX Call',headerTitleAlign:'center'}} component={FcxScreen} />
    {/* You can add more screens to your stack navigator and they will not appear in your drawer. */}
  </FcxStack.Navigator>
  )
}


const CcxStack = createStackNavigator()
export function CcxStackNavigator({navigation}) {
  return (
    <CcxStack.Navigator screenOptions={{headerLeft: () => <HeaderComponent navigation={navigation}/>}}>
    <CcxStack.Screen name="CCXcall" options={{title:'CCX call',headerTitleAlign:'center'}} component={CcxScreen} />
    {/* You can add more screens to your stack navigator and they will not appear in your drawer. */}
  </CcxStack.Navigator>
  )
}


const ProfileStack = createStackNavigator()
export function ProfileStackNavigator({navigation}) {
  return (
    <ProfileStack.Navigator screenOptions={{headerLeft: () => <HeaderComponent navigation={navigation}/>}}>
    <ProfileStack.Screen name="Profile" options={{title:'Profile',headerTitleAlign:'center'}} component={AboutScreen} />
    {/* You can add more screens to your stack navigator and they will not appear in your drawer. */}
  </ProfileStack.Navigator>
  )
}

const NewsStack = createStackNavigator()
export function NewsStackNavigator({navigation}) {
  return (
    <NewsStack.Navigator screenOptions={{headerLeft: () => <HeaderComponent navigation={navigation}/>}}>
    <NewsStack.Screen name="News" options={{title:'News',headerTitleAlign:'center'}} component={NewsScreen} />
    {/* You can add more screens to your stack navigator and they will not appear in your drawer. */}
  </NewsStack.Navigator>
  )
}

const EconomicStack = createStackNavigator()
export function EconomicStackNavigator({navigation}) {
  return (
    <EconomicStack.Navigator screenOptions={{headerLeft: () => <HeaderComponent navigation={navigation}/>}}>
    <EconomicStack.Screen name="Economic" options={{title:'Economic Calendar',headerTitleAlign:'center'}} component={EconomicScreen} />
    {/* You can add more screens to your stack navigator and they will not appear in your drawer. */}
  </EconomicStack.Navigator>
  )
}

const OfferStack = createStackNavigator()
export function OfferStackNavigator({navigation}) {
  return (
    <OfferStack.Navigator screenOptions={{headerLeft: () => <HeaderComponent navigation={navigation}/>}}>
    <OfferStack.Screen name="Offer" options={{title:'Research Reports',headerTitleAlign:'center'}} component={OfferScreen} />
    {/* You can add more screens to your stack navigator and they will not appear in your drawer. */}
  </OfferStack.Navigator>
  )
}


