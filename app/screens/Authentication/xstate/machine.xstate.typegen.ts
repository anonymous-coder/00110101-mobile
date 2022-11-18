// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  internalEvents: {
    'error.platform.checkEmail': { type: 'error.platform.checkEmail'; data: unknown };
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
    assignEmailToContext: 'CONFIRM_EMAIL';
    assignErrorMessageToContext: 'error.platform.checkEmail';
    clearErrorMessage: 'CONFIRM_EMAIL' | 'done.state.enteringEmail' | 'xstate.stop';
  };
  eventsCausingServices: {};
  eventsCausingGuards: {
    isValidEmail: 'CONFIRM_EMAIL';
  };
  eventsCausingDelays: {};
  matchesStates:
    | 'enteringAuthToken'
    | 'enteringEmail'
    | 'enteringEmail.complete'
    | 'enteringEmail.idle'
    | 'enteringEmail.sendEmailToServer'
    | { enteringEmail?: 'complete' | 'idle' | 'sendEmailToServer' };
  tags: never;
}
