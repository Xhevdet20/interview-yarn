import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    display : 'flex',
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-around',
    padding : 10
  },
  icon: {
    padding: 10,
  },
  input: {
    width: '45%',
    borderRadius: 5,
    padding: 5,
    color: 'black',
    maxWidth : '100%'
  },
  inputContainer: {
    backgroundColor: '#F5F5F7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent : 'space-between'
  },
  profileIcon : {
    height: 41,
    width: 41
  }
});
export default styles;
