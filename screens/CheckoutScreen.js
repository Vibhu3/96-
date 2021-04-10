import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput,Image,TouchableOpacity ,Modal,ScrollView,KeyboardAvoidingView, Alert} from 'react-native';
import firebase from 'firebase'
import db from '../config'
export default class CheckoutScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            userId:firebase.auth().currentUser.email,
        eggs:'' ,
        eggsPrice:'',
        bread:'',
        breadPrice:'',
        Milk:'',
        MilkPrice:'',
        candies:'',
        candiesPrice:'',
        fruits:'',
        fruitsPrice:'',
        total:''
        }
    }
    getDetails=async()=>{
        var requestRef=await db.collection('orders').doc(this.state.userId)
        .get()
        .then((doc)=>{
            this.setState({
                eggs:doc.data().eggs,
           bread:doc.data().bread ,   
           Milk:doc.data().Milk     ,
           fruits:doc.data().fruits     ,
           candies:doc.data().candies   ,  
 
eggsPrice:doc.data().eggs,
breadPrice:doc.data().bread,
MilkPrice:doc.data().Milk,
candiesPrice:doc.data().candies,
fruitsPrice:doc.data().fruits,

            })

            
        })
        
    }
    componentDidMount(){
        this.getDetails()
var MilkPrice=this.state.Milk*this.state.MilkPrice;
var breadPrice=this.state.bread*this.state.breadPrice;
var eggsPrice=this.state.eggs*this.state.eggsPrice;
var fruitsPrice=this.state.fruits*this.state.fruitsPrice;
var candiesPrice=this.state.candies*this.state.candiesPrice;
var total=MilkPrice+breadPrice+eggsPrice+fruitsPrice+candiesPrice;
this.setState({
    total:total
})
    }
   
    render(){
        return(
            <View>
                <Text>
                    {this.state.total}
                </Text>
            </View>
        )
    }
}