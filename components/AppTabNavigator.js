import React from 'react'
import {Image} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import ItemScreen from '../screens/ItemScreen'
import CheckoutScreen from '../screens/CheckoutScreen'
export const AppTabNavigator = createBottomTabNavigator({
    ItemScreen:{
        screen:ItemScreen,
        navigationOptions:{
            tabBarIcon:<Image source={
                require('../assets/1.jpg')
            }
            style={{width:20,height:20}}/>,
            tabBarLabel:"item screen"
        }
    },
    CheckoutScreen:{
        screen:CheckoutScreen,
        navigationOptions:{
            tabBarIcon:<Image source={
                require('../assets/Checkout.png')
            }
            
style={{width:20,height:20}}/>,
tabBarLabel:"Checkout screen"
        }
    }
    
    })

