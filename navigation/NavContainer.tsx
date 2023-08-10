import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../screens/Dashboard';
import JobSite from '../screens/JobSite'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/Fontisto';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import Basic from '../screens/Basic';
import PdfBasic from '../screens/PdfBasic';

interface Props {}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="PdfBasic" component={PdfBasic}  options={{ headerShown: false }}/>
       {/* <HomeStack.Screen name="Basic" component={Basic}  options={{ headerShown: false }}/> */}
       <HomeStack.Screen name="Dashboard" component={Dashboard}  options={{ headerShown: false }}/>
        <HomeStack.Screen name="Jobsite" component={JobSite}  options={{ headerShown: false }}/>
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const NavContainer: React.FC<Props> = () => {
  return (
    <NavigationContainer>
     <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen 
        name="Home" 
        component={HomeStackScreen}   
        options={{
          tabBarIcon: () => <Icon name={'hand-coin'} size={25} color="black" />,
        }}
        />
        <Tab.Screen 
        name="Jobsites" 
        component={HomeStackScreen}  
         options={{
          tabBarIcon: () => <Icon2 name={'user'} size={25} color="black" />,
        }} 
        />
         <Tab.Screen 
         name="Menu2" 
         component={HomeStackScreen}   
         options={{
          tabBarIcon: () => <Icon3 name={'arrow-swap'} size={25} color="black" />,
        }}     />
         <Tab.Screen name="Menu3" component={HomeStackScreen}   options={{
          tabBarIcon: () => <Icon4 name={'hammer-wrench'} size={25} color="black" />,
        }}     />
         <Tab.Screen name="Menu4" component={HomeStackScreen}   options={{
          tabBarIcon: () => <Icon5 name={'search-location'} size={25} color="black" />,
        }}     />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavContainer;
