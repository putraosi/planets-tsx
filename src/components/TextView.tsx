import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../utils';

interface TextViewRequiredProps {
  children: any;
}

interface TextViewOptionalProps {
  style: any;
}

interface TextViewProps extends TextViewRequiredProps, TextViewOptionalProps {}

const defaultProps: TextViewOptionalProps = {
  style: {},
};

const TextView = (props: TextViewProps) => {
  const {children, style} = props;
  return <Text style={[styles.label, style]}>{children}</Text>;
};

TextView.defaultProps = defaultProps;
export default TextView;

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text.primary,
  },
});
