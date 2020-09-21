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

class NewsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
   
    //   shouldStartLoadWithRequestHandler = ({url}) => url === this.props.url;
      navigationStateChangedHandler = ({url}) => {
        if (url.startsWith('https://') && url !== this.props.url) {
          this.WebView.stopLoading();
        }
      };
    render() {
        const {url, ...props} = this.props;
        return (
            <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
              
                {/* <WebView
                {...props}
               
                onShouldStartLoadWithRequest={this.shouldStartLoadWithRequestHandler}
        source={{ uri: 'https://paramountnews.netlify.app/' }}
        style={{ marginTop: 20 }}
       
      /> */}
      <WebView
        {...props}
        source={{ uri: 'https://paramountnews.netlify.app/' }}
        style={{ marginTop: 20 }}
        // onShouldStartLoadWithRequest={this.shouldStartLoadWithRequestHandler}
        onNavigationStateChange={this.navigationStateChangedHandler}
        ref={c => {
            this.WebView = c;
          }}
      />
            </View>
        );
    }
}

export default NewsScreen;