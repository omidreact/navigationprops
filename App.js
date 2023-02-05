// In App.js in a new project

import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home} from "./screens/HomeScreen.js"

function Details(props){
return(
  <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
<Text>details Screen</Text>
<Text>my name is:{props.route.params.name}</Text>
  </View>
)
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" >
         {props => <Home {...props} id={40}/>}
        </Stack.Screen>
        <Stack.Screen name="details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;