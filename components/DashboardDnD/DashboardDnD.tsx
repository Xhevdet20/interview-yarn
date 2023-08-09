import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './DashboardDnD.styles';
import {Category, JobSite} from '../../libs/types';
import DashboardCard from '../DashboardCard';
import DraggableFlatList, { RenderItemParams, ScaleDecorator } from 'react-native-draggable-flatlist';

interface Props {
  //   navigation: NavigationProp<ParamListBase>;
  filteredData: JobSite[];
  showModalJobsiteNavigate: () => void;
  setClickedRowCaegories: React.Dispatch<React.SetStateAction<Category[]>>;
  setFilteredData: React.Dispatch<React.SetStateAction<JobSite[]>>;
}

function DashbaordDnD(props: Props): JSX.Element {

  const renderItem = ({ item, drag, isActive }: RenderItemParams<any>) => {
    return (
      <ScaleDecorator>
        <TouchableOpacity
          activeOpacity={1}
          onLongPress={drag}
          disabled={isActive}
        >
          <DashboardCard
          data={item}
          key={item.id}
          index={item.id}
          showModalJobsiteNavigate={props.showModalJobsiteNavigate}
          setClickedRowCaegories={props.setClickedRowCaegories}
        />
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };

  return (
    <DraggableFlatList
      data={props.filteredData}
      onDragEnd={({ data }) => props.setFilteredData(data)}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
}

export default DashbaordDnD;
