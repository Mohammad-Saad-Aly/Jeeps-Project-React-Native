import React, { Component } from 'react';
import { Container, Header, Content, Card,Button, CardItem,Form,Left,Thumbnail, Text,Item, Icon, Right ,Input, Accordion,ListItem, CheckBox,Body, Label } from 'native-base';
import {View,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { Dropdown } from 'react-native-material-dropdown';


export default class Vehicle_2 extends Component {

    _renderyear(){
        return(
            <View >
              <Text style={{paddingLeft:"2%",backgroundColor:"#fff",color:"#000000"}}>2019</Text>
              <Text style={{paddingLeft:"2%",backgroundColor:"#fff",color:"#000000"}}>2018</Text>
              <Text style={{paddingLeft:"2%",backgroundColor:"#fff",color:"#000000"}}>2017</Text>
            </View>
       )
        }

    render(){


       
        return(
        
        <Container style={{flex:1,backgroundColor: '#231F20'}}>
            <ScrollView>
             {/* <View style={{marginTop:30,width:"100%"}}>
       <LinearGradient colors={['#678a00','#51bd4c']}>
        <View style={{height:200,alignContent:"center", width:"10%"}}>
        <Image 
            style={{width:334,height:190,marginLeft:"20%"}}
            source={require('../../assets/jeeps.png')}
        />
    </View>
        </LinearGradient>
        </View> */}

        <Card style={{alignSelf:"center",borderRadius:13,width:"90%",justifyContent:"center",marginTop:"1.5%",backgroundColor:"#58595B",padding:10}}>
              
              <View style={{flexDirection:"row",justifyContent:'center'}}>
              <Text style={{fontWeight: "bold",fontSize:25,color:"#fff",textDecorationLine:'underline'}}>Select </Text>
              <Text style={{fontWeight: "bold",fontSize:25,color:"#678a01",textDecorationLine:'underline'}}>Vehicles</Text>
              </View>

       
              <View>
            <View style={{flexDirection:"row", display: 'flex', justifyContent: 'space-between'}}>
            <Button iconLeft transparent
            style={{width:"23%"}}
           
            >
            <Icon name='arrow-dropleft'
            style={{color:'green'}} />
            <Text style={{color:"#fff"}}>Back</Text>
          </Button>

        

        <Button iconRight transparent >
            
            <Icon name='options'
            style={{color:'green'}}
            />
          </Button>
          </View>

          <View style={{flexDirection:"row"}}>
          <Icon name='search'
            style={{color:'green'}} 
            onPress={()=>{this.props.navigation.navigate('select_card')}}
            />
             <Text 
              onPress={()=>{this.props.navigation.navigate('select_card')}}
             style={{color:"#fff",marginLeft:"2%"}}>SEARCH</Text>
          </View>



          <View>

          <View style={{flexDirection:"row"}}>
          <Icon name='close-circle'
            style={{color:'green'}} />
            <Text style={{color:"#fff",marginLeft:"2%"}}>2015-Jeep-Company-any</Text>
            </View>


            <View style={{flexDirection:"row"}}>
          <Icon name='close-circle'
            style={{color:'green'}} />
            <Text style={{color:"#fff",marginLeft:"2%"}}>High Demand Use</Text>
            </View>


          </View >
          
          
          <Card style={{flex: 0}}>
            
            <CardItem>
              <Body>
                <Image source={{uri: 'data:image/jpeg;base64,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'}} style={{height:150, width:"100%", flex: 1}}/>
                <Text>
                  97-98 Jeep Wrangler Control
                  Unit heater Climate Temperature TJ Temp Adjuster OEM: Head Heat Assembly
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
               
                  <Text>$ 99.99</Text>
                
              </Left>
            </CardItem>
          </Card>
      
          <Card style={{flex: 0}}>
            <CardItem>
                </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://cdn.vox-cdn.com/thumbor/4cllU2PnrbAPwH9xtkt3iJp2B5Y=/0x0:3000x2188/1200x675/filters:focal(1260x854:1740x1334)/cdn.vox-cdn.com/uploads/chorus_image/image/61442081/jeepconcept15.0.0.1457641257.0.jpg'}} style={{height: 150, width: "100%", flex: 1}}/>
                <Text>
                  97-06 Jeep Wrangler Pedal
                 Break Assembly Automatic 52129008 TJ LG Unlimited OEM :
                 Auto Transmission: Mopar Factory
                 </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
               
                  <Text>$ 39.99</Text>
                
              </Left>
            </CardItem>
          </Card>

         
          <Card style={{flex: 0}}>
            
            <CardItem>
              <Body>
                <Image source={{uri: 'data:image/jpeg;base64,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'}} style={{height: 150, width:"100%", flex: 1}}/>
                <Text>
                  97-98 Jeep Wrangler Control
                  Unit heater Climate Temperature TJ Temp Adjuster OEM: Head Heat Assembly
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
               
                  <Text>$ 99.99</Text>
                
              </Left>
            </CardItem>
          </Card>

          <Card style={{flex: 0}}>
            <CardItem>
             
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://cdn.vox-cdn.com/thumbor/4cllU2PnrbAPwH9xtkt3iJp2B5Y=/0x0:3000x2188/1200x675/filters:focal(1260x854:1740x1334)/cdn.vox-cdn.com/uploads/chorus_image/image/61442081/jeepconcept15.0.0.1457641257.0.jpg'}} style={{height: 150, width: "100%", flex: 1}}/>
                <Text>
                97-06 Jeep Wrangler Pedal
                 Break Assembly Automatic 52129008 TJ LG Unlimited OEM :
                 Auto Transmission: Mopar Factory
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
               
                  <Text>$ 39.99</Text>
                
              </Left>
            </CardItem>
          </Card>



       
              
            </View>
          </Card>

         

          </ScrollView>
        </Container>
        )
    }
}