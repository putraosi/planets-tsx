import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {Container, Header, ItemPlanet, List} from '../../components';
import styles from './WishlistStyles';

interface WishlistProps {
  navigation: any;
  route: any;
}

const Wishlist = ({navigation, route}: WishlistProps) => {
  console.log('cek dsd', route?.params?.data);

  return (
    <Container>
      <Header label={'Wishlist'} onDismiss={() => navigation.goBack()} />

      <View style={styles.content}>
        <List
          data={route?.params?.data}
          renderItem={({item}) => (
            <ItemPlanet
              data={item}
              onPress={() =>
                navigation.navigate('Details', {id: item?.id, showOnly: true})
              }
            />
          )}
        />
      </View>
    </Container>
  );
};

export default Wishlist;
