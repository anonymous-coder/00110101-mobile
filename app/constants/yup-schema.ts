import * as yup from 'yup';

const emailSchema = yup.object().shape({
  email: yup.string().email(),
});

export { emailSchema };
