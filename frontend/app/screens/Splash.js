
import React from 'react'
import {
  Text,
  View,
  Animated,
  Image,
  Easing,
  StyleSheet
} from 'react-native';

import {
  AccessToken
} from 'react-native-fbsdk';


class Splash extends React.Component {
  constructor () {
    super()
    this.springValue = new Animated.Value(0.3)
  }

  componentDidMount() {
    this.spring()
    AccessToken.getCurrentAccessToken().then(token => {
      if (token) {
        // firebase.database().ref(`/users/${token.userID}`)
        //         .on('value', (snap) => this.props.receiveCurrentUser(snap.val()));
        setTimeout(()=>  this.props.navigation.navigate('SimpleApp'), 2000)
      } else {
        setTimeout(()=>  this.props.navigation.navigate('Signup'), 2000)
      }
    });
  }


  spring() {
    this.springValue.setValue(0.3)
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 1,
      }
    ).start()
  }

  render () {

    return (
      <View style={styles.container}>
        <Animated.Image
          style={{ width: 227, height: 200, transform: [{scale: this.springValue}] }}
          source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})


export default Splash