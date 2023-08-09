import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  tableContainer: {
    marginTop: 0,
    marginBottom: 0,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    backgroundColor: '#F8F8FA',
    fontSize: 16,
    textAlign: 'center',
    padding: 6,
    margin: 0,
    fontWeight : 'bold'
  },
  description: {
    fontSize: 14,
    backgroundColor: '#ffffff',
    padding: 10,
  },
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  tableHeader: {
    height: 40,
  },
  tableHeaderText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tableRow: {
    height: 40,
  },
  tableRowText: {
    textAlign: 'center',
  },
  dataWrapper: { marginTop: -1 },
});
export default styles;
