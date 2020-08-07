import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function ProjectScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hi.. This Project Screen</Text>
      <Button
        title="Go to AddScreen"
        onPress={() => navigation.navigate('AddScreen')}
      />
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

export default ProjectScreen;