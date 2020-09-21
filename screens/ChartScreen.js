import React, { Component } from 'react';
import {View,Text,Button, Image} from 'react-native';
import { WebView } from 'react-native-webview';

class ChartScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }


    shouldStartLoadWithRequestHandler = ({url}) => url === this.props.url;
    
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignContent:'center', marginVertical : 10}}>
                {/* <Text style={{textAlign:'center',marginBottom:50}}>ChartScreen screen (HomeStackNavigator)</Text> */}
                <Image source={require('../assets/para.png')} style={{ height : 53, width : 225, marginLeft : 10 }} />
                <WebView
        source={{ uri: 'https://forexmarket.netlify.app/' }}
        style={{ marginTop: 20 }}
        onShouldStartLoadWithRequest={this.shouldStartLoadWithRequestHandler}
      />
            </View>
        );
    }
}

export default ChartScreen;