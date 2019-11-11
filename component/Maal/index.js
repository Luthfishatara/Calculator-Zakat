import React, {Component} from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'

export default class Counter extends Component{

    constructor(props){
        super(props)

        this.state={
            result: 0,
            harta: 0,
            zakat: 0.025
        }
    }

    count = () => {

        var harta = this.state.harta
        var zakat = this.state.zakat

        var result = zakat * harta

        this.setState({ result: result })
    }

  render() {
      let total = this.state.result
    return(
      <View style={{padding: 32}}>
          <Text style={{fontSize: 18, marginBottom: 4}}>Total zakat:</Text>
          <Text style={{fontSize: 18, marginLeft: 24, marginBottom: 24}}>Rp. { total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</Text>

          <TextInput onChangeText={ (value) => { this.setState({ harta: value }) } } placeholder="Jumlah Harta tersimpan 1 Tahun" keyboardType="number-pad" style={styles.inputText}/>

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