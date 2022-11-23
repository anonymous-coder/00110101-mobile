import React from 'react';
import { View, Text, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  withSpring,
  SlideInDown,
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

function Label({label}) {
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

function ErrorMessageLabel({error}) {
  return (
    <View style={styles.errorLabelWrapper}>
      <View style={styles.inputBarWrapper}>
        <View style={styles.errorInputBar} />
      </View>

      <View style={styles.inputBarSpace} />

      <View style={styles.labelWrapper}>
        <Text style={styles.errorLabel}>{error}</Text>
      </View>
    </View>
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

function Form({ value, onChangeText, placeholder, state, onPress, errorMessage }) {
  const offset = useSharedValue(200);

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
        <Label label={'ENTER EMAIL'}/>
        <Input onChangeText={onChangeText} value={value} placeholder={placeholder} />
        {errorMessage !== '' ? <ErrorMessageLabel error={errorMessage} />  : null}
        
   
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
  const [errorMessage, setErrorMessage] = React.useState('');

  console.log('failure', state.matches('enteringEmail.failure'));
  console.log('success', state.matches('enteringEmail.success'));

  function onChangeEmail(text: string) {
    setEmail(text);
  }

  function onSubmitEmail(email: string) {
    if(email.length >= 6) {
      console.log('email', email.length)
      send({ type: 'ON_SUBMIT_EMAIL', email });
    } else {
      setErrorMessage('Must be valid email')
    }
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
        errorMessage={errorMessage}
      />
    </SafeAreaView>
  );
}
