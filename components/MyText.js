import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function MyText({children, ...props}) {
  const {style} = props;
  const {serif, bold, italic, josefin, medium} = props;

  const fontType = () => {
    if (serif) {
      return 'Vollkorn-Regular';
    } else if (josefin) {
      if (bold) {
        return 'JosefinSans-Bold';
      } else if (medium) {
        return 'JosefinSans-Medium';
      } else if (italic) {
        return 'JosefinSans-Italic';
      } else if (bold && italic) {
        return 'JosefinSans-BoldItalic';
      } else if (medium && italic) {
        return 'JosefinSans-MediumItalic';
      } else {
        return 'JosefinSans-Regular';
      }
    } else {
      if (bold) {
        return 'UbuntuMono-Bold';
      } else if (italic) {
        return 'UbuntuMono-Italic';
      } else if (bold && italic) {
        return 'UbuntuMono-BoldItalic';
      } else {
        return 'UbuntuMono-Regular';
      }
    }
  };

  return (
    <>
      <Text
        {...props}
        style={[
          {
            fontFamily: fontType(),
          },
          style,
        ]}>
        {children}
      </Text>
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
