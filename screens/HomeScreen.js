import React from "react";
import { View,Text,Button } from "react-native";

const Home=(props)=> {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>my id is:{props.id}</Text>
        <Text>Home Screen</Text>
        <Button title="go to details screen" onPress={()=>props.navigation.navigate("details",{name:"omid ramezani"})}/>
      </View>
    );
  }
  export {Home};