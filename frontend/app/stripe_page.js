/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {connect} from 'react-redux';
import { View, Image, Text } from 'react-native';
import stripe from 'tipsi-stripe';

import {addTokenToUser, createNewUser} from './actions/user_actions.js';

stripe.init({
  // test key
  publishableKey: 'pk_test_HjN8L9E5xZW12lWT4VBzKSWl',
  // live key
  // publishableKey: 'pk_live_3dAdhS9inCpxPCD2pXJf8H2y',
});
const theme = {
  primaryBackgroundColor: 'white',
  secondaryBackgroundColor: 'dimgrey',
  primaryForegroundColor: 'red',
  secondaryForegroundColor: 'red',
  accentColor: 'red',
  errorColor: 'dimgrey'
};

class NewCardPage extends Component {

  constructor(props){
    super(props)
    this.state = {timePassed: false}
  }

  componentDidMount() {

    const { navigate } = this.props.navigation;

    stripe.paymentRequestWithCardForm()
    .then(responseToken => {
      // collecting responseToken
      // sending to backend w/ fetch to store customer
      console.log(responseToken);
      this.props.addTokenToUser(responseToken.tokenId);
      let completeUser = this.props.user
      this.props.createNewUser(completeUser)
      .then(navigate('SimpleApp'));
    })
    .catch(error => {
      console.log(error);
    })

  }

  render() {

      return(
        <View />
      );
    }
  }


const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  addTokenToUser: (user) => dispatch(addTokenToUser(user)),
  createNewUser: (user) => dispatch(createNewUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewCardPage);
