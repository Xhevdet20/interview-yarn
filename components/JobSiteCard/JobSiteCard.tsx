import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './JobsiteCard.styles';
import { Category, JobSite } from '../../libs/types';
import Go from 'react-native-vector-icons/Entypo';

interface Props {
  data: JobSite;
  key: number,
  index : number,
  showModalJobsiteNavigate: () => void,
  setClickedRowCaegories : React.Dispatch<React.SetStateAction<Category[]>>
}
 
function JobSiteCard(props: Props): JSX.Element {

  const openNavModal = () => {
    props.setClickedRowCaegories(props.data.categories);
    props.showModalJobsiteNavigate()
  }

  return (
    <View style={styles.container} key={`${props.index}-jobSite`}>
      <Text style={{textAlign: 'center', flex : 1}}>{props.data.id}</Text>
      <TouchableOpacity onPress={openNavModal} style={{flex: 1.5, alignItems : 'center'}}>
        <Go name={'chevron-with-circle-right'} size={15} color="black" />
      </TouchableOpacity>
      <Text style={{ textAlign : 'left', flex: 7}} >{props.data.title}</Text>
      <View style={{...styles.new, backgroundColor : props.data.color}}>
        <Text style={{textAlign: 'center', color: 'white'}}> {props.data.status} </Text>
      </View>
    </View>
  );
}

export default JobSiteCard;
