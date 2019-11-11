import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'

import Counter from './component/Counter'
import Maal from './component/Maal'
import Home from './component/Home'
import Routes from './Routes'

export default class App extends Component{


  render() {
    return(
      <View style={{flex: 1, justifyContent: 'space-evenly'}}>

        <Routes/>
        

      </View>
    )
  }

}