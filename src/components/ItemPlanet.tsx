import {
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../utils';
import TextView from './TextView';
import {moments} from '../helpers';

interface ItemPlanetProps {
  data: any;
  onPress: any
}

const ItemPlanet = ({data, onPress}: ItemPlanetProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}>
      <TextView>{`Name: ${data?.name || '-'}`}</TextView>
      <TextView>{`Diameter: ${data?.diameter || '-'}`}</TextView>
      <TextView>{`Population: ${data?.population || '-'}`}</TextView>
      <TextView>{`Created: ${moments(data?.created).format(
        'DD MMMM YYYY | HH:mm:ss',
      )}`}</TextView>
    </TouchableOpacity>
  );
};

export default ItemPlanet;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.primary,
    hadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
