import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../utils';
import TextView from './TextView';
import {IcBack, IcWishlist} from '../assets';

interface HeaderRequiredProps {
  label: string;
}

interface HeaderOptionalProps {
  backgroundColor: string;
  IconRight: any;
  onDismiss: any;
  onPress: any;
  badge: number;
}

interface HeaderProps extends HeaderRequiredProps, HeaderOptionalProps {}

const defaultProps: HeaderOptionalProps = {
  backgroundColor: colors.primary,
  IconRight: null,
  onDismiss: null,
  onPress: null,
  badge: 0,
};

const Header = (props: HeaderProps) => {
  const {backgroundColor, label, IconRight, badge, onDismiss, onPress} = props;

  const showBadge = badge ? true : false;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor,
        },
      ]}>
      {onDismiss && (
        <TouchableOpacity onPress={onDismiss}>
          <Image style={styles.left} source={IcBack} />
        </TouchableOpacity>
      )}
      <TextView style={styles.label}>{label}</TextView>

      {onPress && IconRight && (
        <TouchableOpacity onPress={onPress}>
          <Image style={styles.right} source={IconRight} />

          {showBadge && <View style={styles.badge} />}
        </TouchableOpacity>
      )}
    </View>
  );
};

Header.defaultProps = defaultProps;

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },

  label: {
    flex: 1,
    color: colors.white,
    fontWeight: '700',
    fontSize: 17,
  },

  left: {
    width: 24,
    height: 24,
    marginRight: 16,
    tintColor: colors.white,
  },

  right: {
    width: 24,
    height: 24,
    marginLeft: 16,
    tintColor: colors.white,
  },

  badge: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,
  },
});
