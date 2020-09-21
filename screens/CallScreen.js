import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { IcxStackNavigator, FcxStackNavigator, CcxStackNavigator } from '../navigation/createStackNavigator';
import { Ionicons } from '@expo/vector-icons'
import IcxScreen from './IcxScreen';
import FcxScreen from './FcxScreen';
import CcxScreen from './CcxScreen';
import CcxScreen1 from './ccx1screen'
import CcxScreen2 from './ccxScreen2'

const Tab = createMaterialTopTabNavigator();
const CallScreen = () => {

  return(
    <Tab.Navigator 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'ICX') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (route.name === 'FCX') {
          iconName = focused ? 'ios-list-box' : 'ios-list';
        }
        else if (route.name === 'CCX') {
          iconName = focused ? 'ios-list-box' : 'ios-list';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
    >
      <Tab.Screen name="Forex" component={FcxScreen} />
      <Tab.Screen name="Comex" component={CcxScreen} />
    <Tab.Screen name="Index"  component={IcxScreen} />
    <Tab.Screen name="Forex HNI" component={CcxScreen1} />
    <Tab.Screen name="Comex HNI" component={CcxScreen2} />

  </Tab.Navigator>
  )
}


// function getUserData(uid) {
//   firebase.database().ref('users/' + uid).once("value", snap => {
//       // console.log(snap.val().ccxservice)

//       setIcxuser(snap.val().icxservice)
//       setCcxuser(snap.val().ccxservice)
//       setFcxuser(snap.val().fcxservice)

//   })
// }
//     const [icxArray , setIcx] = useState([])
//     const [fcxArray , setFcx] = useState([])
//     const [ccxArray , setCcx] = useState([])


//     //Array ka Dher
//     const [one ,setOne] = useState([])
//     const [two ,setTwo] = useState([])
//     const [three ,setThree] = useState([])
//     const [four ,setFour] = useState([])
//     // const [five ,setFive] = useState([])
//     // const [six ,setSix] = useState([])

//     const [icxUser, setIcxuser] = useState('')
//     const [fcxUser, setFcxuser] = useState('')
//     const [ccxUser, setCcxuser] = useState('')


//     useEffect(() => {
//       // Update the document title using the browser API
//       const itemsRef1 = firebase.database().ref('icx');
//       itemsRef1.on('value', (snapshot) => {
//         let items = snapshot.val();
//         // console.log(items)
//         let newState1 = [];
//         for (let item in items) {
//           newState1.push({
//             id: item,
//             icx: items[item].icx,
//             time: items[item].time
//           });
//         }
//         setIcx(newState1)
        
//       });


//       const itemsRef2 = firebase.database().ref('fcx');
//       itemsRef2.on('value', (snapshot) => {
//         let items = snapshot.val();
//         console.log
//         let newState2 = [];
//         for (let item in items) {
//           newState2.push({
//             id: item,
//             icx: items[item].fcx,
//             time: items[item].time
//           });
//         }
//         setFcx(newState2)
        
//       });

//        const itemsRef3 = firebase.database().ref('ccx');
//       itemsRef3.on('value', (snapshot) => {
//         let items = snapshot.val();
//         console.log
//         let newState3 = [];
//         for (let item in items) {
//           newState3.push({
//             id: item,
//             icx: items[item].ccx,
//             time: items[item].time
//           });
//         }
//         setCcx(newState3)
        
//       });


      

//       firebase.auth().onAuthStateChanged(user => {
//         if (user) {
//             console.log(icxUser)
//             // console.log(user.object)
//             getUserData(user.uid)
//         }
//     })

//     setOne(icxArray.concat(fcxArray))
//     setTwo(icxArray.concat(ccxArray))  
//     setThree(fcxArray.concat(ccxArray))
//     setFour(one.concat(ccxArray))
//     console.log("One Comes here")
//     console.log(one)
//     console.log("One Ends Here")
      
//     }, []);

   
//     // console.log(icxArray)
//     return(
      
//         <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
     
//         <FlatList
//       data={icxArray}
//       renderItem={({ item }) => (
//         <View style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//           <Text> {item.icx}</Text>
//           <Text>{item.time}</Text>
//         </View>
//       )}
//     />
//     </View>
//     );
// }

// class CallScreen extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  };
//     }
//     render() {
//         return (
//             <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
//                 <Text style={{textAlign:'center',marginBottom:50}}>CallScreen screen (HomeStackNavigator)</Text>
//                 {/* <Button
//                     title="See how a screen inside this stack works"
//                     onPress={() => {this.props.navigation.navigate('NestedHome')}}
//                 /> */}
//             </View>
//         );
//     }
// }

export default CallScreen;