import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function AddScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Add Screen</Text>
      <Button
        title="Go to ProjectScreen"
        onPress={() => navigation.navigate('ProjectScreen')}
      />
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

export default AddScreen;