import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  // tableHeaderText: {
  //   fontWeight: 'bold',
  // },
  // tableHeader: {
  //   height: 40,
  //   backgroundColor: '#f1f8ff',
  //   borderBottomWidth : 1,
  //   borderColor : "#B2B2B2"
  // },
  // tableRow: {
  //   height: 40,
  //   borderBottomWidth : 1,
  //   borderColor : "#B2B2B2"
  // },
  tableContainer : {
    marginTop : 0,
    marginBottom : 0
  },
  header : {
    display : 'flex',
    flexDirection: 'row'
  },
  title : {
    backgroundColor: '#F8F8FA',
    fontSize : 16,
    textAlign : 'center',
    padding : 6,
    margin: 0
  },
  description : {
    fontSize : 14,
    backgroundColor : '#ffffff',
    padding : 10,
  }
});
export default styles;
