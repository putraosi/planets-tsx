import React from 'react';
import {StyleSheet, VirtualizedList} from 'react-native';
import Loading from './Loading';

interface ListProps {
  loading?: boolean;
  data: any;
  renderItem: any;
}

const List = ({loading, data, renderItem}: ListProps) => {
  if (loading) return <Loading />;

  const getItem = (data: any, index: number) => {
    return data[index];
  };

  const getItemCount = (data: any) => {
    return data.length;
  };

  return (
    <VirtualizedList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => 'key' + index}
      showsVerticalScrollIndicator={false}
      getItemCount={getItemCount}
      getItem={getItem}
    />
  );
};

export default List;

const styles = StyleSheet.create({});
