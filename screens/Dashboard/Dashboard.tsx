import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React, {useEffect, useMemo, useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './Dashboard.styles';
import Header from '../../components/Header';
import JobSiteCard from '../../components/JobSiteCard';
import InfoCardList from '../../components/InfoCardList';
import {Button, PaperProvider} from 'react-native-paper';
import AddNewJobsiteModal from '../../components/AddNewJobsiteModal';
import {Category, JobSite} from '../../libs/types';
import {dummyJobSiteObj, initialStatuses} from '../../libs/dummyData';
import JobSiteHeaders from '../../components/DashboardTableHeaders';
import {ScrollView} from 'react-native-virtualized-view';
import JobsiteNavigateModal from '../../components/JobsiteNavigateModal';
import DashbaordDnD from '../../components/DashboardDnD';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

export interface StatusInfoType {
  type: string;
  count: number;
  color: string;
}

function Dashboard(props: Props): JSX.Element {
  const countStatusesWithColor = (
    data: JobSite[],
  ): {
    type: string;
    count: number;
    color: string;
  }[] => {
    const statusCount: {[key: string]: {count: number; color: string}} = {};
    data.forEach(item => {
      const {status, color} = item;
      statusCount[status] = {
        count: (statusCount[status]?.count || 0) + 1,
        color: color || 'orange',
      };
    });

    const resultArray: StatusInfoType[] = Object.keys(statusCount).map(
      status => ({
        type: status,
        count: statusCount[status].count,
        color: statusCount[status].color,
      }),
    );
    return resultArray;
  };

  const [searchText, setSearchText] = useState<string>('');

  const [filteredData, setFilteredData] = useState<JobSite[]>(dummyJobSiteObj);
  const [statuses, setStatues] = useState(initialStatuses);
  const [visibleAddJobsite, setVisibleAddJobsite] =
    React.useState<boolean>(false);
  const [visibleJobsiteNavigate, setVisibleJobsiteNavigate] =
    React.useState<boolean>(false);
  const [clickedRowCategories, setClickedRowCaegories] = useState<Category[]>(
    [],
  );

  useEffect(() => {
    const resultWithColor = countStatusesWithColor(filteredData);
    setStatues(resultWithColor);
  }, [searchText, filteredData]);

  const handleSearch = (text: string) => {
    console.log(text)
    setSearchText(text);
    const filteredTableData = dummyJobSiteObj.filter(element => {
      const rowData = (element.title + ' ' + element.status).toLowerCase();
      return rowData.includes(text.toLowerCase());
    });
    setFilteredData(filteredTableData);
  };

  const showModalAddJobsite = () => setVisibleAddJobsite(true);
  const hideModalAddJobsite = () => setVisibleAddJobsite(false);
  const showModalJobsiteNavigate = () => setVisibleJobsiteNavigate(true);
  const hideModalJobsiteNavigate = () => setVisibleJobsiteNavigate(false);

  return (
    <ScrollView
      style={{backgroundColor: '#EFEFF4'}}
      showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <PaperProvider>
          <View>
            <Header handleSearch={handleSearch} searchText={searchText} />
            <InfoCardList statuses={statuses} />

            <View>
              <Text style={styles.title}>Title</Text>
              <View style={styles.tableContainer}>
                <Text style={styles.description}>
                  Informative piece of text that can be used regarding this
                  modal.
                </Text>
                <JobSiteHeaders />
                <DashbaordDnD
                  filteredData={filteredData}
                  showModalJobsiteNavigate={showModalJobsiteNavigate}
                  setClickedRowCaegories={setClickedRowCaegories}
                  setFilteredData={setFilteredData}
                />
              </View>
            </View>
            <AddNewJobsiteModal
              visibleAddJobsite={visibleAddJobsite}
              hideModalAddJobsite={hideModalAddJobsite}
              setSearchText={setSearchText}
              filteredData={filteredData}
              setFilteredData={setFilteredData}
            />
            <Button
              style={{
                marginTop: 30,
                backgroundColor: 'rgba(113, 207, 72, 1)',
                borderRadius: 0,
                margin: 5,
              }}
              textColor={'white'}
              onPress={showModalAddJobsite}>
              New
            </Button>
            <JobsiteNavigateModal
              visible={visibleJobsiteNavigate}
              hideModal={hideModalJobsiteNavigate}
              navigation={props.navigation}
              clickedRowCategories={clickedRowCategories}
            />
          </View>
        </PaperProvider>
      </SafeAreaView>
    </ScrollView>
  );
}

export default Dashboard;
