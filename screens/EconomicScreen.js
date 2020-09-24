import React, { Component, useEffect, useRef } from 'react';
import {View,Text,Button, ActivityIndicator} from 'react-native';
import { WebView } from 'react-native-webview';

// const ChartScreen = () => {
//     const [canGoBack, setCanGoBack] = useState(false)
//     const [canGoForward, setCanGoForward] = useState(false)
//     const [currentUrl, setCurrentUrl] = useState('')
//     const webviewRef = useRef(null)

//     return(
//         <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
//         {/* <Text style={{textAlign:'center',marginBottom:50}}>ChartScreen screen (HomeStackNavigator)</Text> */}
//         <WebView
// source={{ uri: 'https://forexmarket.netlify.app/' }}
// style={{ marginTop: 20 }}
// renderLoading={() => (
//     <ActivityIndicator
//       color='black'
//       size='large'
//       style={styles.flexContainer}
//     />
//   )}
//   ref={webviewRef}
//   onNavigationStateChange={navState => {
//     setCanGoBack(navState.canGoBack)
//     setCanGoForward(navState.canGoForward)
//     setCurrentUrl(navState.url)
//   }}
// />
//     </View>
//     )
// }

class EconomicScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
   
      shouldStartLoadWithRequestHandler = ({url}) => url === this.props.url;
    render() {
        const {url, ...props} = this.props;
        return (
            <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
              
                <WebView
                {...props}
               
                onShouldStartLoadWithRequest={this.shouldStartLoadWithRequestHandler}
        source={{ uri: 'https://paramounteconomic.netlify.app/' }}
        style={{ marginTop: 20 }}
       
      />
            </View>
        );
    }
}

export default EconomicScreen;