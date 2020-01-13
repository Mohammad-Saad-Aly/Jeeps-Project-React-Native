import React from 'react';
import { StyleSheet, View,Image,TextInput,AppRegistry } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


import { Container, Header, Content, Card, CardItem, Body, Text , Button } from "native-base";


export default class Products extends React.Component{

  render(){
    return( 
    
    <View style={styles.container} >
       <View style={{marginTop:30,width:"100%"}}>
       <LinearGradient colors={['#678a00','#51bd4c']}>
        <View style={{height:200,alignContent:"center", width:"10%"}}>
        <Image 
            style={{width:334,height:190,marginLeft:"20%"}}
            source={require('../../../assets/jeeps.png')}
        />
    </View>
        </LinearGradient>
        </View>

       
       
        
          <Card style={{marginTop:0,width:"92%",borderRadius:10, height:"60%" ,backgroundColor:"#414042"}}>
      
          <Card style={{alignSelf:"center",borderRadius:10,marginTop:"-4%",  height:"78%",width:"85%",backgroundColor:"#58595B"}}>
            
          <Image 
            style={{alignSelf:"center",justifyContent:"center",height:170}}
            source={require('../../../assets/products.png')}
        />
              



          <Button rounded success 

            onPress={()=>{this.props.navigation.navigate('Card')}}
         
         
          style={{width: '70%',height: '20%',justifyContent: 'center',alignSelf:"center",alignItems:'center'}}>
            <Text style={{color:"#fff"}}>Add Products</Text>
          </Button>
          
            </Card>

            </Card>
        
      
    </View>
    
    
    )
  }
}
const styles = StyleSheet.create({
  container: {
    height:"100%",
    width:"100%",
    backgroundColor: '#231F20',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  
});

const Styles = StyleSheet.create({
 
  MainContainer :{
   
  // Setting up View inside content in Vertically center.
  justifyContent: 'center',
   
  flex:1,
   justifyContent:"space-evenly",
  margin: 10,
  marginBottom:"10%",
   
  },
  TextInputStyleClass:{
 
    // Setting up Hint Align center.
    textAlign: 'center',
     
    // Setting up TextInput height as 50 pixel.
    height: 50,
     
    // Set border width.
     borderWidth: 2,
     
     // Set border Hex Color Code Here.
     borderColor: '#41B619',
     
    // Set border Radius.
     borderRadius: 20 ,
     
    //Set background color of Text Input.
     backgroundColor : "#FFFFFF"
     
    }
   
  });
