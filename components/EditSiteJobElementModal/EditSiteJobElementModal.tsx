import React, {useEffect, useState} from 'react';
import {Button, Modal, Portal, TextInput, Title} from 'react-native-paper';
import styles from './EditSiteJobElementModal.styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View} from 'react-native';
import { CategoryItem } from '../../libs/types';

interface Props {
  visible: boolean;
  hideModal: () => void;
  filteredData: any;
  setFilteredData: React.Dispatch<React.SetStateAction<any[]>>;
  rowData : CategoryItem;
}

function EditSiteJobElementModal(props: Props): JSX.Element {

  const [item, setItem] = useState<string>(props.rowData.item);
  const [quantity, setQuantity] = useState<string>(props.rowData.quantity);
  const [description, setDescription] = useState<string>(props.rowData.description);


  useEffect(() => {
    setItem(props.rowData.item);
    setQuantity(props.rowData.quantity)
    setDescription(props.rowData.description)
    // setNotes(props.rowData[4])
  }, [props.rowData]);

  const handleItemChange = (text: string) => {
    setItem(text);
  };
  const handleQuantityChange = (text: string) => {
    setQuantity(text);
  };
  const handleDescriptionChange = (text: string) => {
    setDescription(text);
  };

  const containerStyle = {backgroundColor: 'white'};

   const updateTableDataByFirstValue = () => {
    console.log("this is called")
    props.setFilteredData((prevData: CategoryItem[]) => {
      return prevData.map((row: CategoryItem) => {
        console.log(row)
        if (row.id === props.rowData.id) {
          // Replace the row with the updated data
          return {id : props.rowData.id, item, quantity, description}
        }
        return row;
      });
    });
    props.hideModal();
  };

  return (
    <Portal>
      <Modal
        visible={props.visible}
        onDismiss={props.hideModal}
        contentContainerStyle={containerStyle}>
        <SafeAreaView>
          <Title style={styles.title}>Title</Title>
          <TextInput
            label="Item"
            value={item}
            onChangeText={handleItemChange}
            mode="flat"
            style={styles.input}
            underlineColor={'none'}
          />

          <TextInput
            label="Quantity"
            value={quantity}
            onChangeText={handleQuantityChange}
            mode="flat"
            style={styles.input}
            underlineColor={'none'}
          />

          <TextInput
            label="Description"
            value={description}
            onChangeText={handleDescriptionChange}
            mode="flat"
            multiline={true}
            style={styles.input}
            underlineColor={'none'}
          />

          {/* <TextInput
            label="Notes"
            value={notes}
            onChangeText={handleNotesChange}
            mode="flat"
            style={styles.input}
            underlineColor={'none'}
          /> */}

          <View style={styles.buttons}>
            <Button
              mode="contained"
                onPress={props.hideModal}
              buttonColor="rgba(254, 76, 74, 1)"
              style={{borderRadius: 5, width: '43%'}}>
              Cancel
            </Button>
            <Button
              mode="contained"
              onPress={updateTableDataByFirstValue}
              buttonColor="rgba(18, 100, 163, 1)"
              style={{borderRadius: 5, width: '43%'}}>
              Save Changes
            </Button>
          </View>
        </SafeAreaView>
      </Modal>
    </Portal>
  );
}

export default EditSiteJobElementModal;
