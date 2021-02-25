import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { images } from '../../assets/images'

const home = () => {
    return (
        <View style={{marginVertical:5}}>
            <View style={{flexDirection:'row',marginBottom:5,borderRadius:10,elevation:8,backgroundColor:'white',marginHorizontal:5}}>
                <Image source={images.img_fruit} style={{width:130,height:110}}/>
                <Text style={{marginLeft:10,top:20,fontWeight:'bold'}}>This is BlackBerry</Text>
            </View>
            <View style={{flexDirection:'row',marginBottom:5,borderRadius:10,elevation:8,backgroundColor:'white',marginHorizontal:5}}>
                <Image source={images.img_fruit1} style={{width:130,height:110}}/>
                <Text style={{marginLeft:10,top:20,fontWeight:'bold'}}>This is BlueBerry</Text>
            </View>
            <View style={{flexDirection:'row',marginBottom:5,borderRadius:10,elevation:8,backgroundColor:'white',marginHorizontal:5}}>
                <Image source={images.img_fruit2} style={{width:130,height:110}}/>
                <Text style={{marginLeft:10,top:20,fontWeight:'bold'}}>This is Banana</Text>
            </View>
            <View style={{flexDirection:'row',marginBottom:5,borderRadius:10,elevation:8,backgroundColor:'white',marginHorizontal:5}}>
                <Image source={images.img_fruit3} style={{width:130,height:110}}/>
                <Text style={{marginLeft:10,top:20,fontWeight:'bold'}}>This is Avocado</Text>
            </View>
            <View style={{flexDirection:'row',marginBottom:5,borderRadius:10,elevation:8,backgroundColor:'white',marginHorizontal:5}}>
                <Image source={images.img_fruit4} style={{width:130,height:110}}/>
                <Text style={{marginLeft:10,top:20,fontWeight:'bold'}}>This is Strawberry</Text>
            </View>
            <View style={{flexDirection:'row',marginBottom:5,borderRadius:10,elevation:8,backgroundColor:'white',marginHorizontal:5}}>
                <Image source={images.img_fruit5} style={{width:130,height:110}}/>
                <Text style={{marginLeft:10,top:20,fontWeight:'bold'}}>This is Apricot</Text>
            </View>
        </View>
    )
}

export default home

const styles = StyleSheet.create({})
