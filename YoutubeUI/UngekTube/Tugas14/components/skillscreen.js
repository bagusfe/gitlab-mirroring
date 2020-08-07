import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, Image,FlatList,Button} from 'react-native';
import Ikon from 'react-native-vector-icons/Ionicons';
import data from '../skillData.json';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function SkillScreen () {
        return(
        
        <View style = {styles.container}>
            <View style = {styles.containerHead}></View>
            <View style = {styles.logoSanber}>
                <Image source = {require('../images/sanber.png')} style = {{height:40,width:120}} />
            </View>
            <View style = {styles.hai}>
                <Ikon name = "people" size = {40} color = '#3EC6FF'/>
                <View style = {styles.haiText}>
                    <Text style = {{fontWeight:'bold'}}>Hai,</Text>
                    <Text style = {{fontSize:17,color:'#003366'}}>Bagus Frayoga Effendi</Text>
                </View>
            </View>
            <View style = {styles.skill}>
                <TouchableOpacity >
                <Text style = {{fontSize:30,color:'#003366'}}>SKILL</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Main')}}>
                <Text style = {{fontSize:30,color:'#003366'}}>NOTES</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.garis}></View>
            <View style = {styles.category}>
                <TouchableOpacity>
                <View style = {styles.library}>
                    <Text style = {{fontSize:12,color:'#003366',fontWeight:'bold'}}>Library / Framework</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style = {styles.bahasa}>
                    <Text style = {{fontSize:12,color:'#003366',fontWeight:'bold'}}>Bahasa Pemrograman</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style = {styles.teknologi}>
                    <Text style = {{fontSize:12,color:'#003366',fontWeight:'bold'}}>Teknologi</Text>
                </View>
                </TouchableOpacity>          
            </View>
            <View style = {styles.body}>
                <FlatList 
                data = {data.items}
                renderItem = {({item}) => (
                <View style= {styles.kotak}>
                    <Icon name = {item.iconName} size = {100}/>
                    <View style = {styles.isiKotak}>
                        <Text style = {{color:'#003366', fontSize:25,fontWeight:'bold'}}>{item.skillName}</Text>
                        <Text style = {{color:'#3EC6FF'}} >{item.categoryName}</Text>
                        <Text style = {{color:'white', fontSize:40,fontWeight:'bold',alignSelf:'flex-end'}}>{item.percentageProgress}</Text>
                    </View>
                    <TouchableOpacity>
                        <Icon name = 'greater-than' size = {100}/>
                    </TouchableOpacity>
                </View>
                )}
                keyExtractor = { (item) => item.id.toString()}
                //  {* PENUTUP FLATLIST *}
                />
            </View>
        </View>
        )
    }
export default SkillScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    containerHead: {
        // flex: 1,
    paddingTop: 30 
    },
    logoSanber:{
      height:50,
      alignItems:'flex-end',
      // borderWidth:2
    },
    hai:{
        height:50,
      //   borderWidth:2,
        flexDirection:'row',
        paddingLeft:10,
        alignItems:'center'
    },
    haiText:{
        paddingLeft:10,
        justifyContent:'center'
    },
    skill:{
        height:50,
      //   borderWidth:2,
        paddingLeft:10,
        flexDirection:'row',
        justifyContent: 'space-around'
    },
    garis:{
      height:3,
      marginBottom: 3, 
      width:390,
      backgroundColor:'#3EC6FF',
      borderRadius:25,
    },
      category:{
          height:30,
          // borderWidth:2,
          flexDirection:'row',
          justifyContent:'space-evenly'
      },
      library:{
          height:25,
          width:130,
          borderRadius:5,
          backgroundColor:"#B4E9FF",
          alignItems:'center',
          justifyContent:'center'
      },
      bahasa:{
          height:25,
          width:130,
          borderRadius:5,
          backgroundColor:"#B4E9FF",
          alignItems:'center',
          justifyContent:'center'
      },
      teknologi:{
          height:25,
          width:100,
          borderRadius:5,
          backgroundColor:"#B4E9FF",
          alignItems:'center',
          justifyContent:'center'
      },
      kotak:{
          height:150,
          borderWidth:2,
          borderRadius:5,
          width:380,
          alignSelf:'center',
          elevation:10,
          marginTop:10,
          backgroundColor:"#B4E9FF",
          flex:1,
          flexDirection:'row',
          alignItems:'center'
      },
      body:{
          flex:1
      },
      isiKotak:{
          paddingLeft:10,
          width:175
      }
  });