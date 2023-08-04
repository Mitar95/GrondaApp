import React from 'react';
import {Text as RNText, TextProps, StyleSheet} from 'react-native';

interface CustomTextProps extends TextProps {
  bold?: boolean;
}

const Text: React.FC<CustomTextProps> = ({bold, style, children, ...rest}) => {
  const textStyle = bold
    ? [styles.text, styles.bold, style]
    : [styles.text, style];

  return (
    <RNText style={textStyle} {...rest}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    fontFamily: 'Lato Regular',
  },
  bold: {
    fontFamily: 'Lato Bold',
  },
});

export default Text;
