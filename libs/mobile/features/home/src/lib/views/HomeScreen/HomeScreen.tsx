import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Statistics } from '@food-dairy/mobile/features/statistics'
import { UserProducts } from '@food-dairy/mobile/features/user-products'
import { Profile } from '@food-dairy/mobile/features/profile'

import { Home } from '../Home'

const Tab = createBottomTabNavigator()
const HomeScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    backBehavior="order"
    screenOptions={{
      tabBarActiveTintColor: 'violet',
      tabBarInactiveTintColor: 'white',
      tabBarShowLabel:false,
      headerStyle:{backgroundColor:'#2A2C38', },
      tabBarStyle:{backgroundColor:'#22242E', height:80}
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon({ color,focused }) {
          if (focused) {
            return <MaterialCommunityIcons name="home" color={color} size={35} />
          }

          return <MaterialCommunityIcons name="home-outline" color={color} size={26} />
        },
        headerTitleAlign:'center',
        headerTitleStyle:{color:'white'}
      }}
    />
    <Tab.Screen
      name="Statistics"
      component={Statistics}
      options={{
        tabBarIcon({ color, focused }) {
          if (focused){
            return<MaterialCommunityIcons name="chart-box" color={color} size={35} />}

          return <MaterialCommunityIcons name="chart-box-outline" color={color} size={26} />
        },
        headerTitleAlign:'center',
        headerTitleStyle:{color:'white'}
      }}
    />
    <Tab.Screen
      name="UserProducts"
      component={UserProducts}
      options={{
        tabBarIcon({ color, focused }) {
          if (focused){
            return <MaterialCommunityIcons name="food-apple" color={color} size={35} />}

          return <MaterialCommunityIcons name="food-apple-outline" color={color} size={26} />
        },
        headerTitleAlign:'center',
        headerTitleStyle:{color:'white'}
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon({ color, focused }) {
          if (focused){
            return <MaterialCommunityIcons name="account" color={color} size={35} />
          }

          return  <MaterialCommunityIcons name="account-outline" color={color} size={26} />
        },
        headerTitleAlign:'center',
        headerTitleStyle:{color:'white'}
      }}
    />
  </Tab.Navigator>
)

export default HomeScreen