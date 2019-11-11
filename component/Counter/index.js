import React, {Component} from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'

export default class Counter extends Component{

    constructor(props){
        super(props)

        this.state={
            result: 0,
            total: 0,
            anggota: 0,
            zakat: 2.5,
            uang: 35000
        }
    }

    count = () => {

        var anggota = this.state.anggota
        var zakat = this.state.zakat
        var uang = this.state.uang

        var result = zakat * anggota
        var total = anggota * uang

        this.setState({ result: result })
        this.setState({ total: total })
    }

  render() {
      let total = this.state.total
    return(
      <View style={{padding: 32}}>
          <Text style={{fontSize: 18, marginBottom: 8}}>Beras: { this.state.result } kg</Text>
          <Text style={{fontSize: 18, marginBottom: 8}}>Estimasi Harga: Rp. { total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</Text>
          <TextInput onChangeText={ (value) => { this.setState({ anggota: value }) } } placeholder="Jumlah Anggota Keluarga" keyboardType="number-pad" style={styles.inputText}/>

          <TouchableOpacity onPress={this.count}>
              <View style={{padding:20, margin:6, marginTop: 18, backgroundColor: 'blueviolet', alignItems: 'center', borderRadius: 6}}>
                  <Text style={{color: 'aqua', fontSize: 18, fontFamily: 'serif'}}>Hitung</Text>
              </View>
          </TouchableOpacity>
      </View>
    )
  }

}

const styles = StyleSheet.create({
    inputText:{
        padding: 12, 
        fontSize: 12, 
        backgroundColor: 'white', 
        borderWidth: 2, 
        borderRadius: 4, 
        borderColor: 'mediumseagreen', 
        margin: 6
    }
})