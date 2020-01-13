import React, { Component } from 'react';
import { Container, Header, Content, Card,Button, CardItem,Form, Text,Item, Icon, Right ,Input, Accordion,ListItem, CheckBox,Body, Label } from 'native-base';
import {View,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { Dropdown } from 'react-native-material-dropdown';

// const dataArray = [
//     { title: "Year", content: "Lorem ipsum dolor sit amet" },
//    ];

//    const Array = [
//     { title: "Make", content: "Lorem ipsum dolor sit amet" },
//    ];
 
//    const Array2 = [
//     { title: "Model", content: "Lorem ipsum dolor sit amet" },
//    ];


export default class Vehicle extends Component {

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


        let data = [{
            value: '2019',
          }, {
            value: '2018',
          }, {
            value: '2017',
          },
        ];

        let data1 = [{
            value: 'Jeep.Wrangler',
          },
        ];


        let data2 = [{
            value: 'Compass',
          }, {
            value: 'Grand Cherokee',
          }, {
            value: 'Patriote',
          },
          {
            value: 'Wangler',
          },
        ];


        return(
        
        <Container style={{flex:1,backgroundColor: '#231F20'}}>
            <ScrollView>
             <View style={{marginTop:30,width:"100%"}}>
       <LinearGradient colors={['#678a00','#51bd4c']}>
        <View style={{height:200,alignContent:"center", width:"10%"}}>
        <Image 
            style={{width:334,height:190,marginLeft:"20%"}}
            source={require('../../assets/jeeps.png')}
        />
    </View>
        </LinearGradient>
        </View>

        <Card style={{alignSelf:"center",borderRadius:16,width:"90%",justifyContent:"center",marginTop:"2%",backgroundColor:"#58595B",padding:10}}>
              
              <View style={{flexDirection:"row",justifyContent:'center'}}>
              <Text style={{fontWeight: "bold",fontSize:30,color:"#fff",textDecorationLine:'underline'}}>Select </Text>
              <Text style={{fontWeight: "bold",fontSize:30,color:"#678a01",textDecorationLine:'underline'}}>Vehicles</Text>
              </View>
              <View>
        
         


        <Dropdown
        label='Year'
        data={data}
         />

        <Dropdown
        label='Make'
        data={data1}
         />

        <Dropdown
        label='Model'
        data={data2}
         />

                <View style={{alignSelf:"center",marginTop:"7%",}}>
                <Button transparent
                onPress={()=>{this.props.navigation.navigate('select_vehicle')}}
                >
                <Text style={{fontSize:20,color:"#fff",textDecorationLine:'underline'}}>Search</Text>
                </Button>  
                </View>

            </View>
          </Card>

         

          </ScrollView>
        </Container>
        )
    }
}