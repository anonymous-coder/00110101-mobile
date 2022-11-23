// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  internalEvents: {
    'xstate.after(2000)#AuthFormMachineWithValidation.greetings': {
      type: 'xstate.after(2000)#AuthFormMachineWithValidation.greetings';
    };
    'xstate.init': { type: 'xstate.init' };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions: never;
    services: never;
    guards: never;
    delays: never;
  };
  eventsCausingActions: {};
  eventsCausingServices: {};
  eventsCausingGuards: {};
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
    | 'enteringEmail.submitting'
    | 'enteringEmail.success'
    | 'greetings'
    | {
        enteringCode?: 'idle' | 'invalid' | 'submitting' | 'valid';
        enteringEmail?: 'failure' | 'idle' | 'submitting' | 'success';
      };
  tags: never;
}
