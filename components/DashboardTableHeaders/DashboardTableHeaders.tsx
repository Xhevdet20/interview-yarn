import React from 'react';
import {View, Text} from 'react-native';
import styles from './DashboardTableHeaders.styles';

interface Props {
  //   navigation: NavigationProp<ParamListBase>;
}

function DashboardTableHeaders(props: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'left', flex: 1}}>Nr</Text>
      <Text style={{textAlign: 'left', flex: 7}}>Jobsite</Text>
      <View style={{minWidth: 120}}>
        <Text style={{textAlign: 'center'}}> Status </Text>
      </View>
    </View>
  );
}

export default DashboardTableHeaders;
