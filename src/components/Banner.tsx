import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import Text from './Text';

export interface BannerProps {
  header: string;
  footer: string;
  title: string;
  img: any;
}

const Banner: React.FC<BannerProps> = ({header, footer, title, img}) => {
  return (
    <ImageBackground source={img} style={styles.image} borderRadius={8}>
      <View style={styles.textContainer}>
        <Text style={styles.header} bold numberOfLines={1} ellipsizeMode="tail">
          {header}
        </Text>
        <Text style={styles.title} bold numberOfLines={2} ellipsizeMode="tail">
          {title}
        </Text>
        <Text style={styles.footer} numberOfLines={1} ellipsizeMode="tail">
          {footer}
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    marginHorizontal: 20,
  },
  image: {
    width: '100%',
    height: 170,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginBottom: 12,
  },
  header: {
    color: 'white',
    fontSize: 13,
    marginBottom: 6,
  },
  footer: {
    color: 'white',
  },
});

export default Banner;
