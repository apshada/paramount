import React, { Component } from 'react';
import {View,Text,Button} from 'react-native';

class PaymentScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
                <Text style={{textAlign:'center',marginBottom:50}}>Payment screen (HomeStackNavigator)</Text>
                {/* <Button
                    title="See how a screen inside this stack works"
                    onPress={() => {this.props.navigation.navigate('NestedHome')}}
                /> */}
            </View>
        );
    }
}

export default PaymentScreen;