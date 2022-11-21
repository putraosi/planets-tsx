import Toast from 'react-native-simple-toast';

export const ToastAlert = (message = 'Coming Soon') => {
  return Toast.show(message, Toast.SHORT);
};
