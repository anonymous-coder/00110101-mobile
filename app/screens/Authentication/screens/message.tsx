import React from 'react';
import { View, Text, SafeAreaView, TouchableWithoutFeedback, Button } from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  withSpring,
  SlideInDown,
  FadeOut,
} from 'react-native-reanimated';
import { useMachine } from '@xstate/react';
import AuthFormMachine from '../xstate/machine.xstate.ts';
import { TextBtn, TextInputTerminal, TextInput } from '../../../components';
import { height } from '../../../utils';
import { styles } from './styles';

function SideBar() {
  return (
    <View style={styles.sidebar}>
      <View style={styles.sidebarWrapper}>
        <View style={styles.bar} />
      </View>
    </View>
  );
}

export function MessageScreen({ message }) {
  const [state, send, service] = useMachine(AuthFormMachine);

  return (
    <SafeAreaView style={styles.container}>
      <SideBar />
      <Animated.View
        entering={SlideInDown.duration(1000).withInitialValues(height + 100)}
        exiting={FadeOut.duration(1000)}
        style={styles.form}
      >
        <View style={styles.topSpace} />
        <View style={styles.labelWrapper}>
          <View style={styles.inputBarWrapper}>
            <View style={styles.inputBar} />
          </View>

          <View style={styles.inputBarSpace} />

          <View style={styles.labelWrapper}>
            <Text style={styles.label}>{message}</Text>
          </View>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}
