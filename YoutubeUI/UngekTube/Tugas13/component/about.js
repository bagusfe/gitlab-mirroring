import React from 'react'; 
import {StyleSheet,View, Text, Image, TouchableOpacity, ScrollView, StatusBar} from 'react-native'; 
import Icon from 'react-native-vector-icons/Ionicons';


function About ({navigation}) {
        return (
            // <StatusBar barStyle="dark-content"/> 
                <ScrollView style={styles.container}>
                    <View style={styles.navBar1}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                        <Icon name="person" size={25} style={{paddingLeft:20}}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('SkillScreen')}>
                        <Text style={{fontSize: 25, paddingLeft: 270}}>Skills</Text> 
                        </TouchableOpacity>    
                    </View>
                    <View style={styles.navBar2}>
                        <Text style={{fontSize: 25, paddingLeft: 130}}> Tentang Saya</Text>     
                    </View>
                    <View style={styles.image}>
                        <Image source={{uri:'https://secure.gravatar.com/avatar/46d065c5e86ad459b3143c7e173c7d5a?s=160&d=mm&r=g'}} style={{width:150, height:150, borderRadius:80}}/>    
                    </View>
                    <View style={styles.nameTitle}><Text style={{fontSize:20}}> Bagus Frayoga Effendi</Text></View>
                    <View style={styles.nameDesc}><Text style={{fontSize:15}}> Mobile Developer</Text></View>
                    <View style = {styles.kotak1}>
                        <Text style = {{fontSize:20, paddingTop: 10}}>  Portofolio</Text>
                        <View style = {styles.garis}></View>
                        <View style = {styles.isiKotak1}>
                            <View style = {styles.gitlab}>
                                <Icon name="people" size={40} color="#3ec6ff" style={{paddingLeft:15}}/>
                                <Text>@bagusfe</Text>
                            </View>
                            <View style = {{justifyContent:'center',alignItems:'center'}}>
                                <Icon name="people" size={40} color="#3ec6ff" style={{paddingLeft:10}} />
                                <Text>@bagusfe</Text>
                            </View>               
                        </View>
                    </View>
                    <View style = {styles.kotak2}>
                        <Text style = {{fontSize:20, paddingTop: 10}}>  Hubungi Saya</Text>
                        <View style = {styles.garis}></View>
                        <View style = {styles.isiKotak2}>
                            <View style = {styles.facebook}>
                                <Icon name="logo-facebook" size={40} color="#3ec6ff" style={{paddingLeft:20}}/>                            
                                <Text>@bagusfe.id</Text>
                            </View>     
                            <View style = {styles.instagram}>
                                <Icon name="logo-instagram" size={40} color="#3ec6ff" style={{paddingLeft:20}}/>
                                <Text>@bagusfe.id</Text>
                            </View>     
                            <View style = {styles.twitter}>
                                <Icon name="logo-twitter" size={40} color="#3ec6ff" style={{paddingLeft:20}}/>
                                <Text>@bagusfedotid</Text>
                            </View>     
                        </View>
                    </View>
                </ScrollView>
        )
    }
    export default About;



const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#4848'
    },
    navBar1: {
        
        paddingTop: 40,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#ecec'
    },
    navBar2: {
        paddingTop: 50,
    },
    image: {
        paddingTop: 20,
        paddingHorizontal: 130,

        
    },
    nameTitle: {
        margin: '2%', 
        paddingLeft: 90, 
    },
    nameDesc: { 
        paddingLeft: 140, 
    },
    garis:{
        height:1,
        width:370,
        alignSelf:'center',
        backgroundColor:'black'
    },
    kotak1:{
        height:160,
        width:380,
        backgroundColor:'#e5e5e5',
        alignSelf:'center',
        borderRadius:20,
        marginTop:30
    },
    kotak2:{
        height:260,
        width:380,
        alignSelf:'center',
        backgroundColor:'#e5e5e5',
        borderRadius:25,
        marginTop:10,
        flexDirection:'column',
        justifyContent:'flex-start',
        paddingRight:0
    },
    isiKotak1:{
        height:100,
        backgroundColor:'#e5e5e5',
        marginTop:15,
        flexDirection:'row',
        padding:20,
        justifyContent:'space-around'
    },
    isiKotak2:{
        height:170,
        width:380,
        backgroundColor:'#e5e5e5',
        marginTop:15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    facebook:{
        flexDirection:'column'
    },
    instagram:{
        flexDirection:'column'
    },
    twitter:{
        flexDirection:'column'
    },

});