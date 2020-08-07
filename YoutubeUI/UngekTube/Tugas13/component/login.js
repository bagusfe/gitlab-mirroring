import 'react-native-gesture-handler';
import React from 'react'; 
import {StyleSheet,View, Text, Image, TouchableOpacity, ScrollView} from 'react-native'; 
import { Input, Item ,Button} from 'native-base';


function Login({ navigation }) {
        return (
            <ScrollView contentContainerStyle={styles.contentContainer} style={styles.container} >
                <View style={styles.navBar1}></View>
                <View style={styles.navBar2}>
                    <Image source={require('../images/logo.png')} style= {{height: 70, width: 250}} />
                </View>
                <View> 
                    <Text style={styles.textHead}>SELAMAT DATANG DI SANBERCODE </Text>
                </View>    
                <View style={styles.navBar3}>
                    <Text style={styles.text}>Username</Text>
                    <Item rounded>
                        <Input placeholder='Masukkan Username...'/>
                    </Item>
                </View>
                <View style={styles.navBar4}>
                    <Text style={styles.text}>Password</Text>
                    <Item rounded>
                        <Input placeholder='Masukkan kata sandi...' secureTextEntry={true}/>
                    </Item>
                </View>
                <View style={styles.button}>
                        <TouchableOpacity >
                            <Button primary style={{width: 120}}><Text style={styles.teksButton} onPress={() => navigation.navigate('About')}> Login </Text></Button>
                        </TouchableOpacity>
                </View>
                <View style={styles.link}>
                    <Text>Belum memiliki akun?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={{color: '#c3c'}}>  Daftar Sekarang!</Text>
                    </TouchableOpacity>
                </View>
                
            </ScrollView>
        );
    }

    export default Login;


const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    navBar1: {
        height: 50, 
        
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
        height: 150, 
        padding:50
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
        paddingHorizontal: 63,
        alignItems:'center',
        borderColor:'#3c3c3c',
        paddingBottom: 10    
    },
    text: {
        fontSize: 20,
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
        paddingTop: 280,
        paddingHorizontal:80
    }


})
