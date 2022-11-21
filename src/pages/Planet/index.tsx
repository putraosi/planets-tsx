import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {IcWishlist} from '../../assets';
import {Container, Header, ItemPlanet, List} from '../../components';
import {ApiGraphql, getPlanetsQuery} from '../../services';
import {ToastAlert} from '../../utils';
import styles from './PlanetStyles';
import {useSelector} from 'react-redux';

interface PlanetProps {
  navigation: any;
}

const Planet = ({navigation}: PlanetProps) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const wishlist = useSelector(state => state?.global?.wishlist);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const res = await ApiGraphql.post({
        query: getPlanetsQuery,
      });

      setData(res?.allPlanets?.planets);

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Header
        label="Planet List"
        badge={wishlist.length}
        IconRight={IcWishlist}
        onPress={() => navigation.navigate('Wishlist', {data: wishlist})}
      />

      <View style={styles.content}>
        <List
          loading={loading}
          data={data}
          renderItem={({item}) => (
            <ItemPlanet
              data={item}
              onPress={() => navigation.navigate('Details', {id: item?.id})}
            />
          )}
        />
      </View>
    </Container>
  );
};

export default Planet;
