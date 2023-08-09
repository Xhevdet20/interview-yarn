import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './InfoCardList.styles';

interface Props {
  //   navigation: NavigationProp<ParamListBase>;
  statuses : any
}

function InfoCardList(props: Props): JSX.Element {

  return (
    <View>
      {props.statuses.map((info: any,index: number) => (
        <View
          style={{...styles.infoCard, backgroundColor: info.color}}
          key={`${index}-${info.type}`}>
          <Text style={styles.text}>{info.count} {info.type}</Text>
          <Icon
            name={'truck'}
            size={30}
            color={info.color}
            style={{...styles.icon,color: 'white'}}
          />
        </View>
      ))}
    </View>
  );
}

export default InfoCardList;
