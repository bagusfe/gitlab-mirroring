import React, {Component} from 'react'; 
import {StyleSheet,View, Text, Image, TouchableOpacity, FlatList} from 'react-native'; 
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import VideoItem from "./Component/VideoItem"; 
import data from './data.json';

export default class YoutubeUI extends Component {
    render() {

       return (
        <View style={styles.container}>
            <View style= {styles.navBar1}></View>
            <View style= {styles.navBar2}> 
                <Image source={require("./images/logo.png")} style={{width: 150, height:22}}/>
                <View style={styles.rightNav}>
                    <TouchableOpacity>
                        <Icon style={styles.navItem} name="tap-and-play" size={30}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon style={styles.navItem} name="search" size={30}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon style={styles.navItem} name="account-circle" size={30}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.body}>
              <FlatList 
              data={data.items}
              renderItem={(video)=><VideoItem video={video.item}/>}
              keyExtractor={(item)=> item.id}
              ItemSeparatorComponent={()=><View style={{height: 0.5, backgroundColor:'#3c3c3c'}}/> }
              />
            </View>
            <View style={styles.tabBar1}> 
                <TouchableOpacity style={styles.tabItem}>
                    <Icon name="home" size={40}/>
                    <Text style={styles.tabTitle}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                    <Icon name="whatshot" size={40}/>
                    <Text style={styles.tabTitle}>Explore</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                    <Icon name="subscriptions" size={40}/>
                    <Text style={styles.tabTitle}>Subscriptions</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                    <Icon name="notifications" size={40}/>
                    <Text style={styles.tabTitle}>Notification</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                    <Icon name="folder" size={40}/>
                    <Text style={styles.tabTitle}>Library</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tabBar2}></View> 
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navBar1: {
        height: 30
    },
    navBar2: {
        height: 50, 
        borderBottomWidth: 0.5,
        borderColor: '#e5e5e5',
        backgroundColor: 'white',
        elevation: 3, 
        paddingHorizontal: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    rightNav: {
        flexDirection: 'row'
    },
    navItem: {
        marginLeft: 10
    },
    tabBar1: {
        backgroundColor: 'white',
        height: 60,
        borderTopWidth: 0.5,
        borderColor: '#e5e5e5',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    tabBar2: {
        backgroundColor: 'white',
        height: 20,
    },
    tabItem: {
        alignItems: 'center',
        justifyContent:  'center'
    },
    tabTitle: {
        fontSize: 11, 
        color: '#3c3c3c'

    },
    body: {
        flex: 1
    }
}); 
