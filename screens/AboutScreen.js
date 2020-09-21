import React, { Component, useEffect, useState } from 'react';
import {View,Text, AsyncStorage , YellowBox, Dimensions} from 'react-native';
import * as firebase from 'firebase';
// import { Button } from 'native-base';
import Button from '../components/Button'
import { logoutUser } from '../api/authApi'
import Background from '../components/Background';
import  Paragraph from '../components/Paragraph'
import Header from '../components/Header'
import { Switch } from 'react-native-switch';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'
import { List,Avatar } from 'react-native-paper';



YellowBox.ignoreWarnings(['Setting a timer']);
const AboutScreen = () => {

  console.ignoredYellowBox = ['Setting a timer'];
  const [uid, setUid] = useState('')
  const [userData, setUserData] = useState([])
  const [usericx, setUsericx] = useState(false)
  const [userfcx, setUserfcx] = useState(false)
  const [userccx, setUserccx] = useState(false) 
  const [userccx1, setUserccx1] = useState(false) 
  const [userccx2, setUserccx2] = useState(false)  

  const wide = Dimensions.get("window").width
const  getUserData = async (uid) => {
  await  firebase.database().ref('users/' + uid).once("value", snap => {
      console.log(snap.val().ccxservice)
       setUserData(snap.val())
       setUsericx(snap.val().icxservice)
       setUserfcx(snap.val().fcxservice)
       setUserccx(snap.val().ccxservice)
       setUserccx1(snap.val().ccx1service)
       setUserccx2(snap.val().ccx2service)
      
  })
}

    useEffect(() => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          // console.log(user.uid)
            setUid(user.uid)
            // console.log(user)
            // setUserfcx(user)
            getUserData(user.uid)
        }
    })
    

    },[userfcx, userfcx, userccx]);

    return(
      <ScrollView>
        <View style={{ flex : 1, justifyContent : 'center', alignItems : 'center', marginVertical : 30 }}>
         <Avatar.Image size={150} source={require('../assets/avatar.png')}/>
         <View style={{ display : 'flex', flexDirection : 'row', marginVertical : 15 }}>
        <Ionicons name="ios-mail" size={24} color="gray" />
        {/* <Text style={{ marginLeft : 20, fontSize : 18, color: "gray" }}>welcome - : </Text> */}
        <Text style={{ marginLeft : 20, fontSize : 18, color: "black" }}>{userData.email}</Text>
        </View>
        <View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth: 0.4,
    width : wide
  }}
/>
         </View>
<List.AccordionGroup>
    <List.Accordion title="Index" id="1"> 
      <List.Item title= {'Start Date : ' + userData.icxdatebegin} />
      <List.Item title= {'End Date : ' + userData.icxdateend} />
    </List.Accordion>


    <List.Accordion title="Forex" id="2">
    <List.Item title= {'Start Date : ' + userData.fcxdatebegin} />
      <List.Item title= {'End Date : ' + userData.fcxdateend} />
    </List.Accordion>

    <List.Accordion title="Comex" id="3">
    <List.Item title= {'Start Date : ' + userData.ccxdatebegin} />
      <List.Item title= {'End Date : ' + userData.ccxdateend} />
    </List.Accordion>

    <List.Accordion title="Forex HNI" id="4">
    <List.Item title= {'Start Date : ' + userData.ccx1datebegin} />
      <List.Item title= {'End Date : ' + userData.ccx1dateend} />
    </List.Accordion>

    <List.Accordion title="Comex HNI" id="5">
    <List.Item title= {'Start Date : ' + userData.ccx2datebegin} />
      <List.Item title= {'End Date : ' + userData.ccx2dateend} />
    </List.Accordion>
   
  </List.AccordionGroup>

      {/* <Background> */}
        <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>

      

{/* 
      <View style={{ display : 'flex',flexDirection : 'row', justifyContent : 'space-between', backgroundColor : '#fff', borderRadius : 4, borderWidth : 0.5,  padding : 10, margin : 10 }}>
    <Header>Welcome - :{ } { }</Header>
    <Header>{userData.email}</Header>
    </View>

    <View style={{ display : 'flex',flexDirection : 'column', justifyContent : 'space-between' }}>
    <View  style={{ display : 'flex',flexDirection : 'row' , justifyContent : 'space-between', backgroundColor : '#fff', borderRadius : 4, borderWidth : 0.5,  padding : 10, margin : 10, }}>
    <Header>Index</Header> 
    <Switch
value={usericx}
onValueChange={(val) => console.log(val)}
disabled={false}
activeText={'On'}
inActiveText={'Off'}
backgroundActive={'green'}
backgroundInactive={'gray'}
circleActiveColor={'#30a566'}
circleInActiveColor={'#000000'}/>
<Paragraph>{userData.icxdatebegin} {'//'}{userData.icxdateend}</Paragraph>
</View>
  
    <View  style={{ display : 'flex',flexDirection : 'row' , justifyContent : 'space-between', backgroundColor : '#fff', borderRadius : 4, borderWidth : 0.5,  padding : 10, margin : 10 }}>
    <Header>Forex</Header>
    <Switch
value={userfcx}
onValueChange={(val) => console.log(val)}
disabled={false}
activeText={'On'}
inActiveText={'Off'}
backgroundActive={'green'}
backgroundInactive={'gray'}
circleActiveColor={'#30a566'}
circleInActiveColor={'#000000'}/>
<Paragraph>{userData.fcxdatebegin} {'//'}{userData.fcxdateend}</Paragraph>
</View>

<View  style={{ display : 'flex',flexDirection : 'row' , justifyContent : 'space-between', backgroundColor : '#fff', borderRadius : 4, borderWidth : 0.5,  padding : 10, margin : 10 }}>
    <Header>ComexHNI</Header>
    <Switch
value={userccx1}
onValueChange={(val) => console.log(val)}
disabled={false}
activeText={'On'}
inActiveText={'Off'}
backgroundActive={'green'}
backgroundInactive={'gray'}
circleActiveColor={'#30a566'}
circleInActiveColor={'#000000'}/>
<Paragraph>{userData.ccx1datebegin} {'//'}{userData.ccx1dateend}</Paragraph>
</View>

<View  style={{ display : 'flex',flexDirection : 'row' , justifyContent : 'space-between', backgroundColor : '#fff', borderRadius : 4, borderWidth : 0.5,  padding : 10, margin : 10 }}>
    <Header>FCX</Header>
    <Switch
value={userccx2}
onValueChange={(val) => console.log(val)}
disabled={false}
activeText={'On'}
inActiveText={'Off'}
backgroundActive={'green'}
backgroundInactive={'gray'}
circleActiveColor={'#30a566'}
circleInActiveColor={'#000000'}/>
<Text>{userData.icxdatebegin} {'//'}{userData.icxdateend}</Text>
</View>


<View  style={{ display : 'flex',flexDirection : 'row' , justifyContent : 'space-between', backgroundColor : '#fff', borderRadius : 4, borderWidth : 0.5,  padding : 10, margin : 10 }}>

    <Header>CCX</Header>
    <Switch
value={userccx}
onValueChange={(val) => console.log(val)}
disabled={false}
activeText={'On'}
inActiveText={'Off'}
backgroundActive={'green'}
backgroundInactive={'gray'}
circleActiveColor={'#30a566'}
circleInActiveColor={'#000000'}

/>
<Text>{userData.icxdatebegin} {'//'}{userData.icxdateend}</Text>
</View>
    </View> */}
{/* 
    <View style={{ display : 'flex',flexDirection : 'row' , justifyContent : 'space-between' }}>
    <View style={{ display : 'flex',flexDirection : 'column' , backgroundColor : '#fff', borderRadius : 4, borderWidth : 0.5,  padding : 10, margin : 10 }}>
      <Header>Date Begin</Header>
    <Header>{userData.datebegin} { }{ } </Header>
    </View>

    <View style={{ display : 'flex',flexDirection : 'column' , backgroundColor : '#fff', borderRadius : 4, borderWidth : 0.5,  padding : 10, margin : 10 }}>
    <Header>Date End</Header>
    <Header>{userData.dateend}</Header>
    </View>
    </View> */}

    <View style={{ display : 'flex',flexDirection : 'row', justifyContent : 'space-between', backgroundColor : '#fff', borderRadius : 4, borderWidth : 0.5,  padding : 10, margin : 10 }}>
    <Header style={{ fontSize : 10 }}>Total Amount Paid :</Header>
    {/* <Paragraph>Total Amount Paid -</Paragraph> */}
    <Header style={{ color : 'green' }}>{userData.payment}</Header>
    </View>
    <View style={{ display : 'flex', justifyContent : 'center' }}>
    <Button style={{ color : "orange" }} mode="outlined" onPress={() => logoutUser()}>
      <Text> Logout</Text>
      
    </Button> 
    </View>
    </View>
    {/* </Background> */}
      </ScrollView>
    );
}


// class AboutScreen extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  };
//     }
//     render() {
//         return (
            
//         );
//     }
// }



export default AboutScreen;