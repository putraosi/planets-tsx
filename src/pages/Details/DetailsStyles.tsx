import {StyleSheet} from 'react-native';
import {colors} from '../../utils';

export default StyleSheet.create({
  content: {
    padding: 16,
  },

  containerButton: {
    marginTop: 24,
    width: '100%',
    height: 44,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 8,
  },

  button: {
    fontWeight: 'bold',
    color: colors.white,
  },
});
