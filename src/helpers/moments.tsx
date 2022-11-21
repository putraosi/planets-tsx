import moment from 'moment';
import 'moment/locale/en-in';

export const moments = (date: string) => {
  moment.locale('en');
  return moment(date);
};
