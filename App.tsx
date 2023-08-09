import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import NavContainer from './navigation/NavContainer';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Basic from "./screens/Basic";



export default function App() {


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
       <NavContainer>
      </NavContainer> 
       {/* <Basic /> */}
   </GestureHandlerRootView>
  );
}
