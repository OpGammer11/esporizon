import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function MyText({children, ...props}) {
  const {style} = props;
  const {bold, italic} = props;
  return (
    <>
      {bold && italic ? (
        <Text {...props} style={[styles.boldItalic, style]}>
          {children}
        </Text>
      ) : bold ? (
        <Text {...props} style={[styles.bold, style]}>
          {children}
        </Text>
      ) : italic ? (
        <Text {...props} style={[styles.italic, style]}>
          {children}
        </Text>
      ) : (
        <Text {...props} style={[styles.regular, style]}>
          {children}
        </Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  regular: {
    fontFamily: 'UbuntuMono-Regular',
  },
  bold: {
    fontFamily: 'UbuntuMono-Bold',
  },
  italic: {
    fontFamily: 'UbuntuMono-Italic',
  },
  boldItalic: {
    fontFamily: 'UbuntuMono-BoldItalic',
  },
});
