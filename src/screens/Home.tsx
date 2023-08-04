import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
} from 'react-native';
import getCreations from '@api/getCreatoins';
import {ICreatoin} from '@types-app/apiTypes';
import CreationCard from '@components/CreationCard';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {incrementCounter} from '@store-app/store';
import Banner, {BannerProps} from '@components/Banner';
import Text from '@components/Text';

const bannerProps: BannerProps = {
  title: 'Fish preparation like a star chef',
  header: 'NEW',
  footer: 'With Rolf Fliegauf',
  img: require('../../assets/images/banner.jpeg'),
};

const Home: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [creations, setCreations] = useState<Array<ICreatoin>>([]);
  const [fetchingFailed, setFetchingFailed] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      getCreations()
        .then(response => {
          setCreations(response);
        })
        .catch(e => {
          console.error(e);
          setCreations([]);
          setFetchingFailed(true);
        });
    };

    fetch();
  }, []);

  const renderItem = useCallback(
    ({item}: {item: ICreatoin}) => (
      <View style={{width: '50%'}}>
        <CreationCard
          title={item.title.length === 0 ? 'N/A' : item.title}
          img_url={item.img_url}
          onPress={() => {
            navigation.navigate('Details', item.id);
            dispatch(incrementCounter(item.id));
          }}
        />
      </View>
    ),
    [dispatch, navigation],
  );

  return (
    <FlatList
      data={creations}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString() + item.title}
      numColumns={2}
      style={styles.list}
      ListEmptyComponent={EmptyList(fetchingFailed)}
      ListHeaderComponent={Header}
      columnWrapperStyle={{marginHorizontal: 8}}
    />
  );
};

const Header = () => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 20,
          paddingHorizontal: '30%',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={{flex: 1, height: 40, width: undefined}}
          resizeMode="contain"
        />
      </View>
      <View style={{marginHorizontal: 16, marginBottom: 32}}>
        <Banner {...bannerProps} />
      </View>

      <View style={{margin: 16}}>
        <Text
          style={{
            color: 'black',
            fontSize: 19,
          }}
          bold>
          {'Creation for you'}
        </Text>
      </View>
    </>
  );
};

const EmptyList = (fetchingFailed: boolean) => {
  return (
    <View style={styles.emptyList}>
      {fetchingFailed ? (
        <Text>Something went wrong</Text>
      ) : (
        <ActivityIndicator size={'large'} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 8,
  },
  emptyList: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
});

export default Home;
