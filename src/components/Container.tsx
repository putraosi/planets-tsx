import React, {Fragment} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {colors} from '../utils';

interface ContainerRequiredProps {
  children: any;
}

interface ContainerOptionalProps {
  statusbarColor: string;
  backgroundColor: string;
}

interface ContainerProps
  extends ContainerRequiredProps,
    ContainerOptionalProps {}

const defaultProps: ContainerOptionalProps = {
  statusbarColor: colors.primary,
  backgroundColor: colors.backgroundColor.primary,
};

const Container = (props: ContainerProps) => {
  const {children, statusbarColor, backgroundColor} = props;
  return (
    <Fragment>
      <SafeAreaView
        style={[
          styles.container,
          {
            backgroundColor: statusbarColor,
          },
        ]}
      />
      <SafeAreaView
        style={[
          styles.content,
          {
            backgroundColor: backgroundColor,
          },
        ]}>
        {children}
      </SafeAreaView>
    </Fragment>
  );
};

Container.defaultProps = defaultProps;

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 0,
  },

  content: {
    flex: 1,
  },
});
