import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TextView from './TextView';
import {colors} from '../utils';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={colors.primary} />
      <TextView style={styles.label}>{'Loading...'}</TextView>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  label: {
    color: colors.primary,
    marginTop: 12,
  },
});
