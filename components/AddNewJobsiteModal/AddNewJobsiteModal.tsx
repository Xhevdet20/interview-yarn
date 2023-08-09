import React, {useState} from 'react';
import {Button, Modal, Portal, TextInput, Title} from 'react-native-paper';
import styles from './AddNewJobsiteModal.styles';
import {Category, JobSite} from './../../libs/types';
import {SafeAreaView} from 'react-native-safe-area-context';
import DropDownPicker from 'react-native-dropdown-picker';
import {View} from 'react-native';
import {categories, statuses} from '../../libs/dummyData';
import {STATUSCOLOR} from './../../libs/types';

interface Props {
  visibleAddJobsite: boolean;
  hideModalAddJobsite: () => void;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  filteredData: any;
  setFilteredData: React.Dispatch<React.SetStateAction<JobSite[]>>;
}

function AddNewJobsiteModal(props: Props): JSX.Element {
  const [nameForm, setNameForm] = useState('');
  const [openCategoryDropDown, setOpenCategoryDropDown] = useState(false);
  const [categoryValue, setCategoryValue] = useState<string[]>([]);
  const [categoryItems, setCategoryItems] = useState(categories);

  const [openStatusDropDown, setOpenStausDropDown] = useState(false);
  const [statusValue, setStatusValue] = useState(null);
  const [statusItems, setStatusItems] = useState(statuses);

  const handleNameInputChange = (text: string) => {
    setNameForm(text);
  };

  const addNewJobsite = () => {
    if (nameForm.length < 3 || !categoryValue || !statusValue) {
      return;
    }

    let categoryItems = [
      [
        `1`,
        'D2507',
        '10',
        'lorem ipsum dolor sit amet',
        'lorem ipsum dolor sit amet',
      ],
      [
        '2',
        'B6816',
        '10',
        'lorem ipsum dolor sit amet',
        'lorem ipsum dolor sit amet',
      ],
      [
        '3',
        'H1111',
        '10',
        'lorem ipsum dolor sit amet',
        'lorem ipsum dolor sit amet',
      ],
    ]

    // const arrayOfObjects = simpleArray.map(item => ({ name: item, val: "test" }));
    let cat: any[] = [];
     categoryValue.forEach(catogry => {
      cat.push({ "name": catogry, categoryItems:categoryItems })
    })
    // const cates = categoryValue.map(cat => ({ "name": cat, categoryItems:categoryItems }))

    // console.log(cates)

    props.setSearchText('');
    let newSite: JobSite = {
      id: (props.filteredData.length + 1).toString(),
      title: nameForm,
      status: statusValue,
      color: STATUSCOLOR[statusValue],
      categories: cat

      // [...categoryValue],
      // categoryItems :  [[
      //   `1`,
      //   'D2507',
      //   '10',
      //   'lorem ipsum dolor sit amet',
      //   'lorem ipsum dolor sit amet',
      // ],
      // [
      //   '2',
      //   'B6816',
      //   '10',
      //   'lorem ipsum dolor sit amet',
      //   'lorem ipsum dolor sit amet',
      // ],
      // [
      //   '3',
      //   'H1111',
      //   '10',
      //   'lorem ipsum dolor sit amet',
      //   'lorem ipsum dolor sit amet',
      // ],]
    };
    props.setFilteredData([newSite, ...props.filteredData]);
    props.hideModalAddJobsite();
    // setCategoryValue(null);
    setNameForm('');
  };

  return (
    <Portal>
      <Modal
        visible={props.visibleAddJobsite}
        onDismiss={props.hideModalAddJobsite}
        contentContainerStyle={{backgroundColor : 'white'}}>
        <SafeAreaView>
          <Title style={styles.title}>Title</Title>

          <DropDownPicker
            placeholder="Select category included"
            multiple={true}
            style={styles.dropDown}
            dropDownContainerStyle={{borderRadius: 5}}
            open={openCategoryDropDown}
            value={categoryValue}
            items={categoryItems}
            setOpen={setOpenCategoryDropDown}
            setValue={setCategoryValue}
            setItems={setCategoryItems}
          />

          <TextInput
            label="Name"
            value={nameForm}
            onChangeText={handleNameInputChange}
            mode="flat"
            style={styles.input}
          />

          <DropDownPicker
            placeholder="Select status"
            style={styles.dropDown}
            dropDownContainerStyle={{borderRadius: 5}}
            open={openStatusDropDown}
            value={statusValue}
            items={statusItems}
            setOpen={setOpenStausDropDown}
            setValue={setStatusValue}
            setItems={setStatusItems}
          />

          <View style={styles.buttons}>
            <Button
              mode="contained"
              onPress={props.hideModalAddJobsite}
              buttonColor="rgba(254, 76, 74, 1)"
              style={{borderRadius: 5, width: '43%'}}>
              Cancel
            </Button>
            <Button
              mode="contained"
              onPress={addNewJobsite}
              buttonColor="rgba(18, 100, 163, 1)"
              style={{borderRadius: 5, width: '43%'}}>
              Submit
            </Button>
          </View>
        </SafeAreaView>
      </Modal>
    </Portal>
  );
}

export default AddNewJobsiteModal;
