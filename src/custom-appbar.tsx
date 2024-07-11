import React from 'react';
import {Appbar} from 'react-native-paper';
import {getHeaderTitle} from '@react-navigation/elements';
import type {StackHeaderProps} from '@react-navigation/stack';
import type {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';

export default function CustomNavigationBar({
  navigation,
  route,
  options,
  // back,
  ...props
}: StackHeaderProps | BottomTabHeaderProps) {
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header>
      {'back' in props && props.back ? (
        <Appbar.BackAction onPress={navigation.goBack} />
      ) : null}
      <Appbar.Content title={title} />
      {options.headerRight
        ? options.headerRight({canGoBack: navigation.canGoBack()})
        : null}
    </Appbar.Header>
  );
}
