import { assign, createMachine, interpret } from 'xstate';
import { checkEmail, checkAuthToken, postData } from '../../../http';
import { authCheckEmailAPI, emailSchema } from '../../../constants';
import * as yup from 'yup';

const isEmailValid = (context, event) => {
  console.log('context, event', context, event)
  return context.canSearch && event.query && event.query.length > 0;
};
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
      error: '',
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
            on: {
              ON_CHANGE_EMAIL: [
                {
                  target: 'success',
                  cond: isEmailValid,
                },
                {
                  target: 'failure',
                },
              ],
            },
          },
          // validating: {
          //   invoke: {
          //     id: 'validating',
          //     src: (context, event) => {
          //       console.log('validating');
          //     },
          //     onDone: {
          //       target: 'success',
          //     },
          //     onError: {
          //       target: 'failure',
          //     },
          //   },
          // },
          success: {},
          failure: {},
          submitting: {},
        },
      },
      enteringCode: {
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
        if (event.type !== 'CONFIRM_EMAIL') return {};
        const { email } = event;
        return {
          email: email,
        };
      }),
    },
    guards: {
      // isEmailValid: async (context, event) => {
      //     const { email } = event;
      //     const emailSchema = yup.object().shape({
      //       email: yup.string().email('must be valid email').length(5),
      //     });
      //     const result = await emailSchema.isValid({email: email});
      //     console.log('isEmailValid result', result)
      //     return result
      // },
    },
  },
);

export default AuthFormMachine;
