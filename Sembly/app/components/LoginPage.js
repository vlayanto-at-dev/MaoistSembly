import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
container: {
  padding: 30,
  marginTop: 200,
  alignItems: 'center'
},
buttonText: {
  fontSize: 20,
  fontWeight: 'bold',
  color: 'white',
  alignSelf: 'center'
},
button: {
  height: 36,
  flex: 1,
  backgroundColor: '#F44336',
  borderColor: '#F44336',
  borderWidth: 1,
  marginBottom: 10,
  alignSelf: 'stretch',
  justifyContent: 'center'
}
});


export default class LoginPage extends Component {
  constructor(props){
    super(props);
  }

  goLogin() {
    this.props.navigator.push({
        name: 'LoginForm'
    });
  }

  goRegis() {
    this.props.navigator.push({
        name: 'RegisForm'
    });
  }

  render(){
    return (
      <View>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.goLogin.bind(this)} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goRegis.bind(this)} style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};
