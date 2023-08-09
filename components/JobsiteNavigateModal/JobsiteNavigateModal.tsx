import React from 'react';
import {Button, Modal, Portal, Title} from 'react-native-paper';
import styles from './JobsiteNavigateModal.styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { Category } from '../../libs/types';

interface Props {
  visible: boolean;
  hideModal: () => void;
  navigation : NavigationProp<ParamListBase>;
  clickedRowCategories: Category[]
} 

function JobsiteNavigateModal(props: Props): JSX.Element {

  const containerStyle = {backgroundColor: 'white'};

  return (
    <Portal>
      <Modal
        visible={props.visible}
        onDismiss={props.hideModal}
        contentContainerStyle={containerStyle}>
        <SafeAreaView>
          <Title style={styles.title}>Title</Title>

          {props.clickedRowCategories.map((category, index) => (
            <Button mode="text" style={{backgroundColor : '#F5F5F7', margin : 10, borderRadius : 5, padding: 5}} onPress={() => props.navigation.navigate('Jobsite', {categoryItems : category.categoryItems})} key={`${category}-${index}`}>
            {category.name}
          </Button>
          ))}


            <Button
              mode="contained"
              onPress={props.hideModal}
              buttonColor="#1264A3"
              style={{borderRadius : 5, width : '43%', alignSelf : 'center', margin : 10}}
              >
              Close
            </Button>
        </SafeAreaView>
      </Modal>
    </Portal>
  );
}

export default JobsiteNavigateModal;
