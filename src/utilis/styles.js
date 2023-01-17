import {Dimensions} from 'react-native';

const Width = Dimensions.get('window').width;

const buttonCard = {
  height: 50,
  width: Width - 40,
  borderWidth: 1,
  borderRadius: 6,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#24282C',
};
export {buttonCard};
