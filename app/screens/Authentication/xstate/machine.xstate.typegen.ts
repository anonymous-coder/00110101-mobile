// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  internalEvents: {
    'error.platform.AuthFormMachineWithValidation.enteringEmail.sendToServer:invocation[0]': {
      type: 'error.platform.AuthFormMachineWithValidation.enteringEmail.sendToServer:invocation[0]';
      data: unknown;
    };
    'xstate.after(2000)#AuthFormMachineWithValidation.greetings': {
      type: 'xstate.after(2000)#AuthFormMachineWithValidation.greetings';
    };
    'xstate.init': { type: 'xstate.init' };
    'xstate.stop': { type: 'xstate.stop' };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions: never;
    services: never;
    guards: never;
    delays: never;
  };
  eventsCausingActions: {
    assignEmailErrorToContext: 'ON_SUBMIT_EMAIL';
    assignEmailToContext: 'ON_SUBMIT_EMAIL';
    assignServerEmailErrorToContext: 'error.platform.AuthFormMachineWithValidation.enteringEmail.sendToServer:invocation[0]';
    clearErrorMessage: 'ON_SUBMIT_EMAIL' | 'xstate.stop';
  };
  eventsCausingServices: {};
  eventsCausingGuards: {
    isEmailValid: 'ON_SUBMIT_EMAIL';
  };
  eventsCausingDelays: {};
  matchesStates:
    | 'enteringCode'
    | 'enteringCode.idle'
    | 'enteringCode.invalid'
    | 'enteringCode.submitting'
    | 'enteringCode.valid'
    | 'enteringEmail'
    | 'enteringEmail.failure'
    | 'enteringEmail.idle'
    | 'enteringEmail.sendToServer'
    | 'enteringEmail.submitting'
    | 'greetings'
    | {
        enteringCode?: 'idle' | 'invalid' | 'submitting' | 'valid';
        enteringEmail?: 'failure' | 'idle' | 'sendToServer' | 'submitting';
      };
  tags: never;
}
