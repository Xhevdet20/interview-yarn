import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './Jobsite.styles';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {Button, PaperProvider} from 'react-native-paper';
import {Row, Table} from 'react-native-reanimated-table';
import Header from '../../components/Header';
import EditSiteJobElementModal from '../../components/EditSiteJobElementModal';
import {siteTableDataObj} from './../../libs/dummyData';
import JobsiteDnD from '../../components/JobsiteDnD';
import {CategoryItem} from '../../libs/types';

interface Props {
  navigation: NavigationProp<ParamListBase>;
  route: any;
}

function JobSite(props: Props): JSX.Element {
  const tableHeaders = ['Nr.', 'Item', 'Quantity', 'Description', 'Notes'];
  const widthArr = [100, 100, 100, 300, 300];
  const initialData = props.route.params.categoryItems;

  const [searchText, setSearchText] = useState<string>('');
  const [filteredData, setFilteredData] = useState(initialData);
  const [visibleEditElement, setVisibleEditElement] =
    React.useState<boolean>(false);
  const [rowData, setRowData] = useState<CategoryItem>();

  const showModalEditElement = () => setVisibleEditElement(true);
  const hideModalEditElement = () => setVisibleEditElement(false);

  const handleSearch = (text: string) => {
    setSearchText(text);
    const filteredTableData = initialData.filter(
      (row: {
        id: string;
        item: string;
        quantity: string;
        description: string;
      }) => {
        const rowData = (
          row.id +
          ' ' +
          row.item +
          ' ' +
          row.quantity +
          ' ' +
          row.description
        ).toLowerCase();
        return rowData.includes(text.toLowerCase());
      },
    );
    setFilteredData(filteredTableData);
  };

  const openEditModal = (rowData: CategoryItem) => {
    setRowData(rowData);
    showModalEditElement();
  };

  return (
    <PaperProvider>
      <View>
        <Header handleSearch={handleSearch} searchText={searchText} />
        <Text style={styles.title}>Title</Text>
        <Text style={styles.description}>
          Informative piece of text that can be used regarding this modal.
        </Text>
        <ScrollView horizontal={true}>
          <View style={{width: 500}}>
          <JobsiteDnD
            filteredData={filteredData}
            setFilteredData={setFilteredData}
            openEditModal={openEditModal}
          />
          </View>
        </ScrollView>
      </View>

      {rowData && (
        <EditSiteJobElementModal
          visible={visibleEditElement}
          hideModal={hideModalEditElement}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
          rowData={rowData}
        />
      )}
      <Button
        mode="contained"
        style={{
          backgroundColor: '#1264A3',
          margin: 10,
          borderRadius: 5,
          padding: 5,
        }}
        onPress={() => props.navigation.navigate('Dashboard')}>
        Back to Categories
      </Button>
    </PaperProvider>
  );
}

export default JobSite;

{
  /* <ScrollView horizontal={true}>
            <View>
              <Table>
                <Row
                  data={tableHeaders}
                  style={styles.tableHeader}
                  textStyle={styles.tableHeaderText}
                  widthArr={widthArr}
                />
              </Table>
              <ScrollView style={styles.dataWrapper}>
                <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                  {filteredData.map((rowData: any[], index: React.Key | null | undefined) => {
                    return (
                      <TouchableOpacity
                        onPress={() => openEditModal(rowData)}
                        key={index}>
                        <Row
                          key={index}
                          data={rowData}
                          style={[styles.tableRow]}
                          textStyle={styles.tableRowText}
                          widthArr={widthArr}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </Table>
              </ScrollView>
            </View>
          </ScrollView> */
}
