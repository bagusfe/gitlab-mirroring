import React, {Component} from 'react'; 
import {StyleSheet,View, Text, Image, TouchableOpacity, ScrollView} from 'react-native'; 
import { Input, Item ,Button, Content} from 'native-base';


function Register ({navigation}) {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.navBar1}></View>
                <View style={styles.navBar2}>
                    <Image source={require('../images/logo.png')} style= {{height: 70, width: 250}} />
                </View>    
                <View> 
                    <Text style={styles.textHead}>DAFTAR PENGGUNA BARU</Text>
                </View>
                <Content>
                    <View style={styles.navBar3}>
                        <Text style={styles.text}>Username</Text>
                        <Item rounded>
                            <Input placeholder='Masukkan Username...'/>
                        </Item>
                    </View>
                    <View style={styles.navBar3}>
                        <Text style={styles.text}>E-Mail</Text>
                        <Item rounded>
                            <Input placeholder='user@user.com'/>
                        </Item>
                    </View>
                    <View style={styles.navBar4}>
                        <Text style={styles.text}>Password</Text>
                        <Item rounded>
                            <Input placeholder='Masukkan kata sandi...' secureTextEntry={true}/>
                        </Item>
                    </View>
                    <View style={styles.navBar4}>
                        <Text style={styles.text}>Ulangi Password</Text>
                        <Item rounded>
                            <Input placeholder='Ulangi kata sandi...' secureTextEntry={true}/>
                        </Item>
                    </View>
                    <View style={styles.button}>
                            <TouchableOpacity onPress={() => navigation.navigate('About')}>
                                <Button primary style={{width: 120}}><Text style={styles.teksButton}> Daftar </Text></Button>
                            </TouchableOpacity>
                    </View>
                    <View style={styles.link}>
                        <Text>Sudah memiliki akun?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={{color: '#c3c'}}>  Login aja!</Text>
                        </TouchableOpacity>
                    </View>
                </Content>
                
            </ScrollView>
        );
    }
export default Register;


const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    navBar1: {
        height: 20, 
        
    },
    navBar2: {
        height: 80, 
        backgroundColor: 'white',
        elevation: 3, 
        padding: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }, 
    navBar3: {
        height: 110, 
        paddingLeft:50,
        paddingRight:50,
        paddingTop: 1,
        paddingBottom: 0,
    },
    navBar4: {
        height: 110, 
        paddingLeft:50,
        paddingRight:50,
        paddingTop: 1,
        paddingBottom: 0,
        backgroundColor: 'white'
    },
    textHead: {
        fontSize: 17,
        paddingHorizontal: 95,
        alignItems:'center',
        borderColor:'#3c3c3c',
        paddingBottom: 30    
    },
    text: {
        fontSize: 18,
        paddingHorizontal: 10,
        padding: 3
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal:150,
    },
    teksButton: {
        fontSize: 20,
        color : '#fff',
        alignItems: 'center',
        paddingHorizontal: 30 
    },
    link: {
        // height: 50,
        flexDirection:'row',
        paddingTop: 100,
        paddingHorizontal: 100
    }


})
