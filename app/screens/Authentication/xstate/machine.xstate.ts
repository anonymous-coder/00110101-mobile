import { assign, createMachine } from 'xstate';
import { checkEmail, checkAuthToken, postData } from '../../../http';
import { authCheckEmailAPI, emailSchema } from '../../../constants';

const AuthFormMachine = createMachine(
  {
    tsTypes: {} as import('./machine.xstate.typegen').Typegen0,
    predictableActionArguments: true,
    services: {} as {
      checkEmail: (context: any, event: any) => Promise<any>;
    },
    id: 'AuthFormMachineWithValidation',
    initial: 'enteringEmail',
    context: {
      email: '',
      authToken: '',
      error: '',
    },
    states: {
      enteringEmail: {
        // 1. start at idle
        initial: 'idle',
        id: 'enteringEmail',
        states: {
          // 2. idle state, when exited it clears the error
          idle: {
            exit: ['clearErrorMessage'],
            on: {
              // 3. send valiid email to the checkingEmail state
              CONFIRM_EMAIL: [
                {
                  target: 'sendEmailToServer',
                  cond: 'isValidEmail',
                  actions: ['assignEmailToContext'],
                },
              ],
            },
          },
          sendEmailToServer: {
            invoke: {
              id: 'checkEmail',
              src: (context) => {
                console.log(context.email);
                postData(authCheckEmailAPI, { email: context.email });
              },
              onDone: [
                {
                  target: 'complete',
                },
              ],
              onError: {
                target: 'idle',
                actions: 'assignErrorMessageToContext',
              },
            },
          },
          complete: { type: 'final' },
        },
        onDone: {
          target: 'enteringAuthToken',
        },
      },
      enteringAuthToken: {
        id: 'enteringAuthToken',
      },
      // enteringAuthToken: {
      //   id: 'enteringAuthToken',
      //   onDone: {
      //     target: 'confirming',
      //   },
      //   initial: 'idle',
      //   states: {
      //     idle: {
      //       exit: ['clearErrorMessage'],
      //       on: {
      //         CONFIRM_AUH_TOKEN: {
      //           target: 'submitting',
      //           actions: ['assignAuthTokenToContext'],
      //         },
      //         BACK: {
      //           target: '#enteringEmail',
      //         },
      //       },
      //     },
      //     submitting: {
      //       schema: {
      //         services: {} as {
      //           validateEmail: {
      //             // The data that gets returned from the service
      //             email: { email: string };
      //           };
      //         },
      //       },
      //       invoke: {
      //         schema: {
      //           services: {} as {
      //             checkAuthToken: {
      //               // The data that gets returned from the service
      //               authToken: { authToken: string };
      //             };
      //           },
      //         },
      //         src: (context) => checkAuthToken(context.authToken),
      //         onDone: {
      //           target: 'complete',
      //         },
      //         onError: {
      //           target: 'idle',
      //           actions: 'assignErrorMessageToContext',
      //         },
      //       },
      //     },
      //     complete: { type: 'final' },
      //   },
      // },
      // confirming: {
      //   onDone: {
      //     target: 'success',
      //   },
      //   initial: 'idle',
      //   states: {
      //     idle: {
      //       exit: ['clearErrorMessage'],
      //       on: {
      //         CONFIRM: 'submitting',
      //         BACK: {
      //           target: '#enteringAuthToken',
      //         },
      //       },
      //     },
      // submitting: {
      //   invoke: {
      //     src: '',
      //     onDone: {
      //       target: 'complete',
      //     },
      //     onError: {
      //       target: 'idle',
      //       actions: 'assignErrorMessageToContext',
      //     },
      //   },
      // },
      // complete: { type: 'final' },
      //   },
      // },
      // success: {
      //   type: 'final',
      // },
    },
  },
  {
    actions: {
      assignEmailToContext: assign((context, event) => {
        if (event.type !== 'CONFIRM_EMAIL') return {};
        console.log('assignEmailToContext', event);
        const { email } = event;
        return {
          email: email,
        };
      }),
      // assignAuthTokenToContext: assign((context, event) => {
      //   if (event.type !== 'CONFIRM_AUTH_TOKEN') return {};
      //   return {
      //     authToken: event.authToken,
      //   };
      // }),
      clearErrorMessage: assign({
        errorMessage: undefined,
      }),
      assignErrorMessageToContext: assign((context, event: any) => {
        return {
          errorMessage: true,
        };
      }),
    },
    guards: {
      isValidEmail: async (_, event) => {
        const { email } = event;
        console.log('isValidEmail email=', email);
        const isEventValidEmail = await emailSchema
          .isValid({ email: email })
          .then((valid) => valid);
        return isEventValidEmail;
      },
    },
  },
);

export default AuthFormMachine;
