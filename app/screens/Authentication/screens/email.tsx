import React from 'react';
import { View, Text, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
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

function Label({ label }) {
  return (
    <View style={styles.labelWrapper}>
      <View style={styles.inputBarWrapper}>
        <View style={styles.inputBar} />
      </View>

      <View style={styles.inputBarSpace} />

      <View style={styles.labelWrapper}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  );
}

function ErrorMessageLabel({ errorMessage }) {
  const offset = useSharedValue(-900);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(0, {
            duration: 3000,
          }),
        },
      ],
    };
  });
  return (
    <Animated.View
      entering={SlideInDown.duration(1000).withInitialValues(height + 100)}
      exiting={FadeOut.duration(1000)}
      style={[styles.errorLabelWrapper, animatedStyles]}
    >
      <Animated.View style={styles.inputBarWrapper}>
        <Animated.View style={styles.errorInputBar} />
      </Animated.View>

      <Animated.View style={styles.inputBarSpace} />

      <Animated.View style={styles.labelWrapper}>
        <Text style={styles.errorLabel}>{errorMessage}</Text>
      </Animated.View>
    </Animated.View>
  );
}

function Input({ value, onChangeText }) {
  return (
    <View style={styles.labelWrapper}>
      <View style={styles.inputBarWrapper}>
        <View style={styles.inputBar} />
      </View>

      <View style={styles.inputBarSpace}></View>

      <View style={styles.labelWrapper}>
        <TextInput
          onChangeText={onChangeText}
          value={value}
          style={styles.textInput}
          placeholder="rachel@00110101.com"
          keyboardType="email-address"
          autoFocus={true}
        />
      </View>
    </View>
  );
}

function Form({ value, onChangeText, placeholder, state, onPress, error, errorMessage }) {
  const offset = useSharedValue(200);
  console.log('errorMessage', errorMessage);
  console.log('error', error);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(offset.value + 200, {
            duration: 50000,
          }),
        },
      ],
    };
  });
  return (
    <Animated.View
      entering={SlideInDown.duration(1000).withInitialValues(height + 100)}
      style={styles.form}
    >
      <Animated.View style={styles.top}>
        <View style={styles.topSpace} />

        <Label label={'ENTER EMAIL'} />

        <Input onChangeText={onChangeText} value={value} placeholder={placeholder} />

        {error ? <ErrorMessageLabel errorMessage={errorMessage} /> : null}
      </Animated.View>

      <View style={styles.topSpace} />
      <View style={styles.topSpace} />
      <View style={styles.topSpace} />

      <TextBtn label="submit" onPress={onPress} />
    </Animated.View>
  );
}

export function EmailScreen() {
  const [state, send, service] = useMachine(AuthFormMachine);
  const [email, setEmail] = React.useState('');
  console.log('state.context', state.context);

  const errorMessage = state.context.error ? state.context.errorMessage : null;

  function onChangeEmail(text: string) {
    setEmail(text);
  }

  function onSubmitEmail(email: string) {
    send({ type: 'ON_SUBMIT_EMAIL', email });
  }

  return (
    <SafeAreaView style={styles.container}>
      <SideBar />
      <Form
        onChangeText={(text) => onChangeEmail(text)}
        value={email}
        placeholder={'rache@example.com'}
        state={state}
        onPress={() => onSubmitEmail(email)}
        error={state.context.error}
        errorMessage={state.context.errorMessage}
      />
    </SafeAreaView>
  );
}
