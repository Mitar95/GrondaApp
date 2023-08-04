import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Image} from 'react-native-elements';
import Text from './Text';

interface CreationCardProps {
  title: string;
  img_url: string;
  onPress: () => void;
}

const CreationCard: React.FC<CreationCardProps> = ({
  title = 'N/A',
  img_url,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{uri: img_url}}
          style={styles.image}
          resizeMode={'cover'}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Text style={styles.title} bold numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 8,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1 / 1,
    borderRadius: 6,
    marginBottom: 12,
  },
  title: {
    color: 'black',
    marginBottom: 8,
  },
});

export default CreationCard;
