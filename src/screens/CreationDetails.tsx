import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StyleSheet, TouchableOpacity, View, StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import Text from '@components/Text';

const CreationDetails = () => {
  const navigation = useNavigation();
  const {params} = useRoute();

  const counter = useSelector(state => state.counter.counter[params]);

  const onBackButtonPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#075669'} />
      <Text testID="counter" style={styles.counter} bold>
        {counter}
      </Text>
      <Text testID="visit-label" style={styles.label} bold>
        Visits
      </Text>
      <TouchableOpacity style={styles.backButton} onPress={onBackButtonPress}>
        <FontAwesomeIcon icon={faArrowLeft} size={26} color={'#333333'} />
      </TouchableOpacity>
    </View>
  );
};

export default CreationDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#075669',
  },
  counter: {
    color: 'white',
    fontSize: 60,
    marginBottom: 16,
  },
  label: {
    color: 'white',
    fontSize: 24,
  },
  backButton: {
    height: 35,
    width: 35,
    margin: 16,
    backgroundColor: 'white',
    borderRadius: 35 / 2,
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
