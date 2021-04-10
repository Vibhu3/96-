import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput,Image,TouchableOpacity ,Modal,ScrollView,KeyboardAvoidingView, Alert} from 'react-native';
import firebase from 'firebase'
import db from '../config'
import AppHeader from '../components/AppHeader'
export default class ItemScreen extends Component{
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
        }
    }
    
    getDetails=async()=>{
        var requestRef=await db.collection('valuables').doc(this.state.userId)
        .get()
        .then((doc)=>{
            this.setState({
eggsPrice:doc.data().eggs,
breadPrice:doc.data().bread,
MilkPrice:doc.data().Milk,
candiesPrice:doc.data().candies,
fruitsPrice:doc.data().fruits,

            })

            
        })
        
    }
    updateDetails=()=>{
db.collection('orders').add({
    'eggs':this.state.eggs,
    'eggsPrice':this.state.eggsPrice,
    'bread':this.state.bread,
    'breadPrice':this.state.breadPrice,
    'Milk':this.state.Milk,
    'MilkPrice':this.state.MilkPrice,
    'fruits':this.state.fruits,
    'fruitsPrice':this.state.fruitsPrice,
    'candies':this.state.candies,
    'candiesPrice':this.state.candiesPrice
})
    }
        
    
    componentDidMount(){
        this.getDetails()

    }
   
    render(){
        <Text>Item Screen Click what item you want to select and then go to the checkout screen</Text>

        return(

            <View style={styles.container}>
                
                <AppHeader/>
                 
                <View >
                <View style={{flexDirection:'row',padding:'50'}}>
                <Text>eggs</Text>
                <TextInput style={styles.formTextInput}
                placeholder={'quantity'}
                onChangeText={(text)=>{
this.setState({
                        eggs:text
                    })
                }}
                />
 <TextInput style={styles.formTextInput}
                placeholder={'price'}
                value={this.state.eggsPrice}
               />
               </View>
               </View>
               <View >
               <View style={{flexDirection:'row',padding:'50'}}>
                 <Text>bread</Text>
                <TextInput style={styles.formTextInput}
                placeholder={'quantity'}
                 onChangeText={(text)=>{
                     
                    this.setState({
                        bread:text
                        
                    })
                    
                }}
                value={this.state.bread}/>
                 <TextInput style={styles.formTextInput}
                placeholder={'price'}
                value={this.state.breadPrice}
               />
                
               </View>
                </View>
                <View style={{flexDirection:'row',padding:'50'}}>
                 <Text>Milk</Text>
                <TextInput style={styles.formTextInput}
               placeholder={'quantity'}
                onChangeText={(text)=>{
                    this.setState({
                        Milk:text
                    })
                    
                }}
                value={this.state.fruits}/>
                 <TextInput style={styles.formTextInput}
                placeholder={'price'}
                value={this.state.MilkPrice}
               />
                
               </View>
               <View style={{flexDirection:'row',padding:'50'}}>
                 <Text>fruits</Text>
                <TextInput style={styles.formTextInput}
                placeholder={'quantity'}
                 onChangeText={(text)=>{
                    this.setState({
                        fruits:text
                    })
                }}
                value={this.state.fruits}/>
                 <TextInput style={styles.formTextInput}
                placeholder={'price'}
                value={this.state.fruitsPrice}
               />
               
               </View>
               <View style={{flexDirection:'row',padding:'50'}}>
                 <Text>candies</Text>
                <TextInput style={styles.formTextInput}
                placeholder={'quantity'}
                 onChangeText={(text)=>{
                    this.setState({
                        candies:text
                    })
                }}
               
                
                value={this.state.candies}/>
                 <TextInput style={styles.formTextInput}
                placeholder={'price'}
                value={this.state.candiesPrice}
               />
               
               </View>
                           <TouchableOpacity
                               style={styles.CheckoutButton}
                               onPress={()=>{
                                  this.updateDetails();
this.props.navigation.navigate('CheckoutScreen')                               }}>
                                    <Text style={styles.CheckoutButtonText}>
                                        GO TO CHECKOUT SCREEN
                                    </Text>
                            </TouchableOpacity>
                            <View >
                   <Image
                   source={require("../assets/bread.jpg")}
                   style={styles.bread}/>
                   </View>   
                    
                        </View>
                        
            
            
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        //alignItems:'center',
        //justifyContent:'center',
        backgroundColor:'orange'
    },
formContainer:{
    flex:1,
    width:'100%',
    alignItems:'center'
},
formTextInput:{
    width:'40%',
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10
},
CheckoutButton:{
    width:150,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:'#ff9800',
    shadowColor:'#0000',
    shadowOffset:{
        width:0,
        height:0,
    },
    shadowOpacity:0.30,
    shadowRadius:10.32,
    elevation:16
},
CheckoutButtonText:{
    color:'#ffff',
    fontWeight:'100',
    fontSize:10
},
eggs: {
    width: "30%",
    height: "30%",
  },
  bread: {
    width: "70%",
    height: "70%",
    resizeMode: "stretch"
  },
  Milk: {
    width: "70%",
    height: "100%",
    resizeMode: "stretch"
  },
  fruits: {
    width: "70%",
    height: "100%",
    resizeMode: "stretch"
  },
  candies: {
    width: "70%",
    height: "100%",
    resizeMode: "stretch"
  },
  ImageView:{
      justifyContent:'center',
      alignItems:'center',
      padding:10
  }
})