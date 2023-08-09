

import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './Test.styles';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {Button, PaperProvider} from 'react-native-paper';
import {Row, Table} from 'react-native-reanimated-table';
import Header from '../../components/Header';
import EditSiteJobElementModal from '../../components/EditSiteJobElementModal';
import {siteTableData} from './../../libs/dummyData';

interface Props {
//   navigation: NavigationProp<ParamListBase>;
//   route : any
}

function Test(props: Props): JSX.Element {

  

  return (
   
      <View>
    <Text>Test</Text>
     </View>   
  );
}

export default Test;
