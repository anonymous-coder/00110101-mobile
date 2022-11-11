import { assign, createMachine } from 'xstate';

export interface AuthenticationMachineContext {
  emailInfo?: EmailInfo;
  authCodeInfo?: AuthCodeInfo;
  errorMessage?: string;
}

interface EmailInfo {
  email: string;
}

interface AuthCodeInfo {
  authCode: number;
}

export type AuthenticationMachineEvent =
  | {
      type: 'BACK';
    }
  | {
      type: 'CONFIRM_EMAIL';
      info: EmailInfo;
    }
  | {
      type: 'CONFIRM_AUTH_CODE';
      info: AuthCodeInfo;
    }
  | {
      type: 'CONFIRM';
    };

const AuthenticationMachine = createMachine<
  AuthenticationMachineContext,
  AuthenticationMachineEvent
>(
  {
    id: 'authenticationMachine',
    initial: 'enterEmail',
    states: {
      enterEmail: {
        on: {
          CONFIRM_EMAIL: {
            target: 'enterAuthCode',
            actions: ['assignEmailInfoToContext'],
          },
        },
      },
      enterAuthCode: {
        id: 'enterAuthCode',
        on: {
          BACK: {
            target: 'enterEmail',
          },
          CONFIRM_AUTH_CODE: {
            target: 'confirming',
            actions: ['assignAuthCodeToContext'],
          },
        },
      },
      confirming: {
        onDone: {
          target: 'success',
        },
        initial: 'idle',
        states: {
          idle: {
            exit: ['clearErrorMessage'],
            on: {
              CONFIRM: 'submitting',
              BACK: {
                target: '#enterAuthCode',
              },
            },
          },
          submitting: {
            invoke: {
              src: 'submitPayment',
              onDone: {
                target: 'complete',
              },
              onError: {
                target: 'idle',
                actions: 'assignErrorMessageToContext',
              },
            },
          },
          complete: { type: 'final' },
        },
      },
      success: {
        type: 'final',
      },
    },
  },
  {
    services: { submitPayment: () => () => {} },
    actions: {
      assignEmailInfoToContext: assign((context, event) => {
        if (event.type !== 'CONFIRM_EMAIL') return {};
        return {
          emailInfo: event.info,
        };
      }),
      assignAuthCodeToContext: assign((context, event) => {
        if (event.type !== 'CONFIRM_AUTH_CODE') return {};
        return {
          authCodeInfo: event.info,
        };
      }),
      assignErrorMessageToContext: assign((context, event: any) => {
        return {
          errorMessage: event.data?.message || 'An unknown error occurred',
        };
      }),
      clearErrorMessage: assign({
        errorMessage: undefined,
      }),
    },
  },
);

export default AuthenticationMachine;
