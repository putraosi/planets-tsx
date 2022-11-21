import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Container, Header, Loading, TextView} from '../../components';
import {moments} from '../../helpers';
import {ApiGraphql, getPlanetByIdQuery} from '../../services';
import {ToastAlert} from '../../utils';
import styles from './DetailsStyles';
import {useDispatch} from 'react-redux';
import {addWishlist} from '../../redux/slices';

interface DetailsProps {
  navigation: any;
  route: any;
}

const Details = ({navigation, route}: DetailsProps) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await ApiGraphql.post({
        query: getPlanetByIdQuery,
        variables: {
          id: route?.params?.id,
        },
      });

      setData(res?.planet);
      setLoading(false);
    } catch (error) {
      navigation.goBack();
    }
  };

  return (
    <Container>
      <Header label={data?.name || ''} onDismiss={() => navigation.goBack()} />

      {loading ? (
        <Loading />
      ) : (
        <View style={styles.content}>
          <TextView>{`Created: ${moments(data?.created).format(
            'DD MMMM YYYY | HH:mm:ss',
          )}`}</TextView>

          <TextView>{`Diameter: ${data?.diameter}`}</TextView>

          <TextView>{`Population: ${data?.population}`}</TextView>

          {!route?.params?.showOnly && (
            <TouchableOpacity
              style={styles.containerButton}
              onPress={() => {
                dispatch(addWishlist(data));
                ToastAlert('Berhasil Menambahkan');
              }}>
              <TextView style={styles.button}>{'Add to Wishlist'}</TextView>
            </TouchableOpacity>
          )}
        </View>
      )}
    </Container>
  );
};

export default Details;
