import { assign, createMachine, interpret } from 'xstate';
import { invokeCheckEmail } from '../../../http';
import { authCheckEmailAPI, emailSchema } from '../../../constants';
import * as yup from 'yup';

// const isEmailValid = async (context, event) => {
//   const { email } = event
//   console.log("isEmailValid")
//   try {
//     const response = await emailSchema.isValid({email: email})
//     console.log('response', response)
//     return Promise.resolve()
//   } catch (error) {
//     console.log('error', error)
//     return Promise.rejected()
//   }
// }

// const search = (context, event) => new Promise((resolve, reject) => {
//   if (!event.query.length) {
//     return reject('No query specified');
//     // or:
//     // throw new Error('No query specified');
//   }

//   return resolve(getSearchResults(event.query));
// });
const AuthFormMachine = createMachine(
  {
    tsTypes: {} as import('./machine.xstate.typegen').Typegen0,
    predictableActionArguments: true,
    services: {} as {
      checkEmail: (context: any, event: any) => Promise<any>;
    },
    id: 'AuthFormMachineWithValidation',
    initial: 'greetings',
    context: {
      email: '',
      authToken: '',
      error: false,
      errorMessage: '',
    },
    states: {
      greetings: {
        after: {
          // after 1 second, transition to yellow
          2000: { target: 'enteringEmail.idle' },
        },
      },
      enteringEmail: {
        intial: 'idle',
        states: {
          idle: {
            id: 'idle',
            exit: 'clearErrorMessage',
            on: {
              ON_SUBMIT_EMAIL: [
                {
                  target: 'sendToServer',
                  cond: 'isEmailValid',
                  actions: 'assignEmailToContext',
                },{
                  target: 'idle',
                  actions: ['assignEmailErrorToContext']
                }
              ],
            },
          },
          sendToServer: {
            invoke: {
              src: (context, event) => invokeCheckEmail,
              onDone: {
                target: '#enteringCode.idle',
              },
              onError: {
                target: 'idle',
                actions: ['assignServerEmailErrorToContext']
              },
            },
          },
          failure: {
            always: 'idle',
          },
          submitting: {},
        },
      },
      enteringCode: {
        id: 'enteringCode',
        intial: 'idle',
        states: {
          idle: {},
          valid: {},
          invalid: {},
          submitting: {},
        },
      },
    },
  },
  {
    actions: {
      assignEmailToContext: assign((context, event) => {
        if (event.type !== 'ON_SUBMIT_EMAIL') return {};
        const { email } = event;
        return {
          email: email,
        };
      }),
      assignEmailErrorToContext: assign((context, event) => {
        if (event.type !== 'ON_SUBMIT_EMAIL') return {};
        const { email } = event;
        return {
          errorMessage: 'invalid email',
          error: true,
        };
      }),
      assignServerEmailErrorToContext: assign((context, event) => {
        if (event.type !== 'ON_SUBMIT_EMAIL') return {};
        const { email } = event;
        return {
          errorMessage: 'something went wrong',
          error: true,
        };
      }),
      clearErrorMessage: assign((context, event) => {
        if (event.type !== 'ON_SUBMIT_EMAIL') return {};
        const { email } = event;
        return {
          errorMessage: '',
          error: false,
        };
      }),
    },
    guards: {
      isEmailValid: (_, event) => {
        const { email } = event;
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
          return true;
        } else {
          return false;
        }
      },
    },
  },
);

export default AuthFormMachine;
