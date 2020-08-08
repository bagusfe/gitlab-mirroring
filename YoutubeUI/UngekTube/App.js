import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import YoutubeUI from './Tugas12/YoutubeUI';
import Login from './Tugas13/component/login';
import Register from './Tugas13/component/register';
import About from './Tugas13/component/about';
import Main from './Tugas14/components/Main';
import SkillScreen from './Tugas14/components/skillscreen';
import AddScreen from './Tugas15/AddScreen';
import ProjectScreen from './Tugas15/ProjectScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator(); 

export default class App extends React.Component {
  createHomeStack = () =>  
  <Stack.Navigator initialRouteName="Login" headerMode="none">
    <Stack.Screen name="Bottom" component={this.createBottomTabs} />
    {/* <Stack.Screen name="Login" component={Login} /> */}
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="About" component={About} />
    {/* <Stack.Screen name="Bottom Tabs" children={this.createBottomTabs} /> */}
  
  </Stack.Navigator>

  createBottomTabs = () => {
    return <Tabs.Navigator >
        <Tabs.Screen name="Skill" component={SkillScreen}/>
        {/* <Tabs.Screen name="Skill" component={SkillScreen}/> */}
        <Tabs.Screen name="Proj" component={ProjectScreen}/>
        <Tabs.Screen name="AddSc" component={AddScreen}/> 
    </Tabs.Navigator>
  }

render() {
  return (
      <NavigationContainer>
        <Drawer.Navigator> 
          <Drawer.Screen name="Home" children={this.createHomeStack} />
          <Drawer.Screen name="Notes" component={Main} />
          <Drawer.Screen name="ProjectScreen" component={ProjectScreen} />
          <Drawer.Screen name="AddScreen" component={AddScreen} />
        </Drawer.Navigator>    
      </NavigationContainer>
    );
  }
}


