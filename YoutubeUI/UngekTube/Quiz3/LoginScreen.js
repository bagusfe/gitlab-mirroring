import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "",
      password: "",
      isError: false,
    }
  }

  loginHandler() {
  console.log(this.state.userName, ' ', this.state.password)
    if (this.state.userName === "Admin" && this.state.password === "123456") {
      this.props.navigation.navigate("Home");
    } else {
      return isError = true;
    }
  state = {
    userName: "Admin",
    password: "123456",
  }
  userNameTextChange=(inputText) => {
    this.setState({userName: inputText})
  }
  userPasswordTextChange=(inputText) => {
    this.setState({password: inputText})
  }

  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.titleText}>Soal Quiz 3</Text>
          <Text style={styles.subTitleText}>Sanbercode</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons name='account-circle' color='blue' size={40} />
            <View>
              <Text style={styles.labelText}>Username/Email</Text>
              <TextInput
                style={styles.textInput}
                placeholder='Masukkan Nama User/Email'
                onChangeText={userName => this.setState({ userName })}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <MaterialCommunityIcons name='lock' color='blue' size={40} />
            <View>
              <Text style={styles.labelText}>Password</Text>
              <TextInput
                style={styles.textInput}
                placeholder='Masukkan Password'
                onChangeText={password => this.setState({ password })}
                secureTextEntry={true}
                password={true}
              />
            </View>
          </View>
          <Text style={this.state.isError ? styles.errorText : styles.hiddenErrorText}>Password Salah</Text>
          <Button title='Login' onPress={() => this.loginHandler()} />
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
  },
  subTitleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
    alignSelf: 'flex-end',
    marginBottom: 16
  },
  formContainer: {
    justifyContent: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 16
  },
  labelText: {
    fontWeight: 'bold'
  },
  textInput: {
    width: 300,
    backgroundColor: 'white'
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 16,
  },
  hiddenErrorText: {
    color: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  }
});
