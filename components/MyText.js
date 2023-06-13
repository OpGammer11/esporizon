import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function MyText({children, ...props}) {
  const {style} = props;
  const {bold, italic} = props;
  return (
    <>
      {bold && italic ? (
        <Text style={[styles.boldItalic, style]}>{children}</Text>
      ) : bold ? (
        <Text style={[styles.bold, style]}>{children}</Text>
      ) : italic ? (
        <Text style={[styles.italic, style]}>{children}</Text>
      ) : (
        <Text style={[styles.regular, style]}>{children}</Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  regular: {
    fontFamily: 'Ubuntu-Regular',
  },
  bold: {
    fontFamily: 'Ubuntu-Bold',
  },
  italic: {
    fontFamily: 'Ubuntu-Italic',
  },
  boldItalic: {
    fontFamily: 'Ubuntu-BoldItalic',
  },
});
