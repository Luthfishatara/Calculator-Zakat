import React, {Component} from 'react'
import {View, Text, FlatList, ScrollView, Image, TouchableOpacity, StyleSheet} from 'react-native'



export default class List extends Component{

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={{flex: 2, justifyContent: 'space-evenly'}}>
                    <TouchableOpacity style={{marginTop: 10}} onPress={() => this.props.navigation.navigate('Counter')}>
                    <View style={styles.view}>
                    <Image source={require('../../assets/fitrah.jpg')} style={styles.image}></Image>
                    <Text style={{marginLeft: 10, fontSize: 18, fontFamily: 'serif'}}>Zakat Fitrah</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>  this.props.navigation.navigate('Maal')}>
                    <View style={styles.view}>
                        <Image source={require('../../assets/maal.jpg')} style={styles.image}></Image>
                        <Text style={{marginLeft: 10, fontSize: 18, fontFamily: 'serif'}}>Zakat Maal</Text>
                    </View>
                </TouchableOpacity>
                </View>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('About')}>
                    <Text style={{fontSize: 18, alignSelf: 'center', marginBottom: 24}}>About us</Text>
                </TouchableOpacity>
                </View>
                
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    view: {
        alignItems: 'center',
        display: 'flex',
        margin: 5,
        borderRadius: 6,
        flexDirection: 'row',
        elevation: 2
    },
    image:{
        height: 110, 
        width: 110, 
        margin: 10, 
        borderRadius: 4
    }
})