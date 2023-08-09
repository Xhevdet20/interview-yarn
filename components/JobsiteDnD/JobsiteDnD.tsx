import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './JobsiteDnD.styles';
import {Category, CategoryItem, JobSite} from '../../libs/types';
import DraggableFlatList, {
  RenderItemParams,
  ScaleDecorator,
} from 'react-native-draggable-flatlist';
import Go from 'react-native-vector-icons/Entypo';

interface Props {
  //   navigation: NavigationProp<ParamListBase>;
  filteredData: JobSite[];
  setFilteredData: React.Dispatch<React.SetStateAction<JobSite[]>>;
  openEditModal: (rowData: CategoryItem) => void;
}

function JobsiteDnd(props: Props): JSX.Element {
  const renderItem = ({item, drag, isActive}: RenderItemParams<any>) => {
    return (
      <ScaleDecorator>
        <TouchableOpacity
          activeOpacity={1}
          onLongPress={drag}
          disabled={isActive}>
          <View style={styles.container}>
            <Text style={{textAlign: 'center', width: 30}}>{item.id}</Text>
            <TouchableOpacity
              onPress={() => props.openEditModal(item)}
              style={{width: 30, alignItems: 'center'}}>
              <Go name={'chevron-with-circle-right'} size={15} color="black" />
            </TouchableOpacity>
            <Text style={{textAlign: 'center', width: 70}}>{item.item}</Text>
            <Text style={{textAlign: 'center', width: 70}}>
              {item.quantity}
            </Text>
            <Text style={{textAlign: 'center', width: 200}}>
              {item.description}
            </Text>
          </View>
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={{textAlign: 'left', width: 60, paddingLeft : 10}}>Id</Text>
        <Text style={{textAlign: 'center', width: 70}}>Item</Text>
        <Text style={{textAlign: 'center', width: 70}}>Quantity</Text>
        <Text style={{textAlign: 'center', width: 200}}>description</Text>
      </View>
      <DraggableFlatList
        data={props.filteredData}
        onDragEnd={({data}) => props.setFilteredData(data)}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

export default JobsiteDnd;
