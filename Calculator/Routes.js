import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Home from './component/Home'
import Maal from './component/Maal'
import Counter from './component/Counter'
import About from './component/About'

const navigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions:{
            title: 'Calculator Zakat'
        }
    },
    Counter:{
        screen: Counter,
        navigationOptions:{
            title: 'Zakat Fitrah'
        }
    },
    Maal:{
        screen: Maal,
        navigationOptions:{
            title: 'Zakat Maal'
        }
    },
    About: {
        screen: About,
        navigationOptions:{
            title: 'Tentang Kami'
        }
    }
},{
    initialRouteName: 'Home'
})

const Routes = createAppContainer(navigator)
export default Routes