import React from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  AppRegistry,
  View,
  Button,
  Image
} from 'react-native';
import {connect} from 'react-redux';

import { addItemToCart } from '../actions/cart_actions.js';

class ProductItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleUSDConversion(cents){
    var dollars = cents / 100;
    return dollars.toLocaleString("en-US", {style:"currency", currency:"USD"});
  }

  render() {
    let product = this.props.product;
    let name = product.name;
    let description = product.description;
    let price = this.handleUSDConversion(product.price);
    return (
      <TouchableOpacity style={{ borderWidth: 1, borderColor: '#1485CC', backgroundColor: 'white'}} onPress={() => this.props.addItemToCart(product)}>
        <View style={styles.menuItem}>
          <Image
            style={styles.image}
            source={{uri: product.img_url}} />
          <View style={{flex: 1, justifyContent: 'space-around'}}>
            <Text style={styles.text}>
              {`${name}\n${description}`}
            </Text>
            <Text style={{fontSize: 20}}>{price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}


// <TouchableOpacity style={{backgroundColor: '#1485CC', height: '100%', width: '100%', flex: 2, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} onPress={() => this.props.addItemToCart(product)}>
//   <Text style={{color: 'white', fontSize: 22, height: '90%'}}>Add to Cart</Text>
// </TouchableOpacity>

  const styles = StyleSheet.create({
    menuItem: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      margin: 10
    },
    image: {
      height: 100,
      width: 100,
      marginRight: 30,
      marginLeft: 15
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black'
    }
  });


  //testing
  const mapStateToProps = (state) => ({
    state: state
  });


  const mapDispatchToProps = (dispatch) => {
    return (
      {
        addItemToCart: (item) => dispatch(addItemToCart(item))
      }
    );
  };

  export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
