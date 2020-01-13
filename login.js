import React from 'react';
import { StyleSheet, View,Image,TextInput,AppRegistry,Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Container, Header, Content, Card, CardItem, Body, Text , Button } from "native-base";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';


export default class Login extends React.Component{

    constructor(props){
      super(props)

        this.state ={
          login : true,
          create_account : false,
          username:'',
          password:'',
          uname: '',
          email:'',
          pswrd:''
        }
    }

    updatevalue(text,field){
      if(field=='username'){
        this.setState({
          username:text,
        })
      }
      
      else if(field=='password'){
        this.setState({
          password:text,
        })
      }
    }

    submit(){
      let collection={}
      collection.username = this.state.username,
      collection.password = this.state.password,
      console.warn("collection collection",collection)
    
      const url = 'http://hnhtechsolutions.com/khalid/offroute/wp-json/jwt-auth/v1/token';
    
    fetch(url,{
      method:'POST',
      body:JSON.stringify(collection),
      headers: new Headers({
        'Content-Type':'application/json'
      })
    }).then(res => res.json())
    .catch(error => console.error('ERROR',error))
    .then(response => console.log('SUCCESS',response))
    
    
    }

    create_account(txt,fld){
      if(fld=='uname'){
        this.setState({
          uname:txt,
        })
      }
      else if(fld=='email'){
        this.setState({
          email:txt,
        })
      }
      else if(fld=='pswrd'){
        this.setState({
          pswrd:txt,
        })
      }
    }

    



c_acount(){
  let collection={}
  collection.username = this.state.uname,
  collection.email = this.state.email,
  collection.password = this.state.pswrd,
  console.warn(collection)

  const url = 'https://hnhtechsolutions.com/khalid/offroute/wp-json/wc/v3/customers';

fetch(url,{
  method:'POST',
  body:JSON.stringify(collection),
  headers: new Headers({
    'Content-Type':'application/json'
  })
}).then(res => res.json())
.catch(error => console.error('ERROR',error))
.then(response => console.log('SUCCESS',response))


}

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
          {this.state.login ?
          
             <Card style={{alignSelf:"center",borderRadius:10,marginTop:"-4%",  height:"78%",width:"91%",backgroundColor:"#58595B"}}>
             <ScrollView>
              <View style={{flexDirection:"row",marginTop:"7%",justifyContent:"space-around"}}>
              <Button onPress={() =>{ this.setState({login:false})}} rounded transparent style={{borderColor:"#41B619",borderWidth:3,width:"50%"}}>
            <Text style={{color:"#fff",fontSize:13}}>Create Account</Text>
          </Button>
          <Button onPress={() =>{ this.setState({login:true})}} rounded success style={{width:"40%", justifyContent:"center"}}>
            <Text style={{color:"#fff"}}>Login</Text>
          </Button>
          
          </View>
          
              

<View style={Styles.MainContainer}>
  <View>
        <TextInput
         
         placeholder="Username"
          underlineColorAndroid='transparent'
          onChangeText={(text)=>{this.updatevalue(text,'username')}}
          style={Styles.TextInputStyleClass}/>
</View>
<View>
<TextInput
          
         
          placeholder="Password"
          // secureTextEntry={true}
          onChangeText={(text)=>{this.updatevalue(text,'password')}}
         underlineColorAndroid='transparent'
          style={Styles.TextInputStyleClass}/>
        
        </View>
    
</View>
<View style={{alignItems:"center"}}>
  <TouchableOpacity>
          <Button rounded success 
          onPress={()=>{this.props.navigation.navigate('Products')}}
          // onPress={()=>{this.submit()}}
          >
            <Text style={{color:"#fff"}}>Login</Text>
          </Button>
          </TouchableOpacity>
          </View>
          </ScrollView>
            </Card> : 


          
          <Card style={{alignSelf:"center",borderRadius:10,marginTop:"-4%",  height:"90%",width:"90%",backgroundColor:"#58595B"}}>
           <ScrollView> 
              <View style={{flexDirection:"row",marginTop:"7%",justifyContent:"space-around"}}>
              <Button onPress={() =>{ this.setState({login:false})}} rounded success style={{borderColor:"#41B619",borderWidth:3,width:"55%"}}>
            <Text style={{color:"#fff",alignItems:"center"}}>create Account</Text>
          </Button>
          <Button onPress={() =>{ this.setState({login:true})}} rounded transparent style={{width:"40%",borderColor:"#41B619",borderWidth:3, justifyContent:"center",borderRadius:35}}>
            <Text style={{color:"#fff"}}>Login</Text>
          </Button>
          
          </View>
          
              
          <ScrollView>
<View style={Styles.MainContainer}>
  
        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Username"
          onChangeText={(txt)=>{this.create_account(txt,'uname')}}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
          
          // Calling the custom TextInputStyleClass.
          style={Styles.TextInputStyleClass}/>



<TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="E-mail Address"
          onChangeText={(txt)=>{this.create_account(txt,'email')}}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
          
          // Calling the custom TextInputStyleClass.
          style={Styles.TextInputStyleClass}/>


<TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Password"
          secureTextEntry={true}
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
          onChangeText={(txt)=>{this.create_account(txt,'pswrd')}}
          
          // Calling the custom TextInputStyleClass.
          style={Styles.TextInputStyleClass}/>
        
    
    
</View>
<View style={{justifyContent:"center",alignItems:"center",marginBottom:"35%"}}>

<TouchableOpacity>
          <Button rounded success 
          // onPress={()=>{this.props.navigation.navigate('Products')}}
          onPress={()=>{this.c_acount()}}
          >
            <Text style={{color:"#fff"}}>Create Account</Text>
          </Button>
          </TouchableOpacity>


          {/* <Button rounded success 
          style={{width:"70%", justifyContent:"center"}}>
            <Text style={{color:"#fff"}}>Create Account</Text>
          </Button> */}
          </View>

          </ScrollView>
          </ScrollView>
            </Card>
          
          }
          {!this.state.login ? <Button style={{justifyContent:"center",position: 'absolute', bottom: 1,alignSelf:"center"}} transparent>
            <Text style={{color:"#fff",}} >Already Have an Account ?</Text>
            <Button onPress={() =>{ this.setState({login:true})}} rounded success style={{width:"24%",height:25,marginRight:10, justifyContent:"center",borderRadius:3,borderColor:"#fff"}}>
            <Text style={{color:"#fff"}}>Login</Text>
          </Button>
            
          </Button> :

<Button style={{justifyContent:"center",position: 'absolute', bottom: 1,alignSelf:"center"}} transparent>
<Text style={{color:"#fff",}} >Forget Your Password ? </Text>
</Button>}
               
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
   justifyContent:"space-between",
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
