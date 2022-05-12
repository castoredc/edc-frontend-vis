import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, Card, InputGroup, Stack, ViewHeader } from '@castoredc/matter';

import { getFormFieldProps } from '../utils/formUtils';
import User from '../types/User';

// NOTE: Typing example on Yup docs that uses ObjectSchema is flawed (https://github.com/jquense/yup/issues/1595)
const schema: yup.SchemaOf<User> = yup.object({
  firstName: yup.string().label('First Name').required(),
  middleName: yup.string().label('Middle Name'),
  lastName: yup.string().label('Last Name').required(),
  login: yup
    .string()
    .label('Login')
    .required()
    .min(3)
    .max(10)
    .matches(
      /^[a-z0-9]+$/,
      'Only lowercase letters (a-z) and digits are allowed'
    ),
  email: yup.string().label('Email').email().required(),
  comment: yup.string().label('Comment').max(50),
});

const schemaDescr = schema.describe();

const FormikScreen = () => {
  const formik = useFormik<User>({
    initialValues: {
      firstName: '',
      middleName: '',
      lastName: '',
      login: '',
      email: '',
      comment: '',
    },
    onSubmit: (values: User) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: schema,
  });

  const inputGroupProps = (fieldName: keyof User) =>
    getFormFieldProps<User>(schemaDescr, formik, fieldName);

  return (
    <div>
      <ViewHeader>Formik</ViewHeader>
      <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
        <Card>
          <form onSubmit={formik.handleSubmit}>
            <Stack vertical spacing="comfortable">
              <InputGroup {...inputGroupProps('firstName')} />
              <InputGroup {...inputGroupProps('middleName')} />
              <InputGroup {...inputGroupProps('lastName')} />
              <InputGroup {...inputGroupProps('login')} />
              <InputGroup {...inputGroupProps('email')} />

              {/* Below is an example of field configuration without helper functions */}
              <InputGroup
                id="comment"
                labelText="Comment"
                multiline
                invalid={!!formik.errors.comment && formik.touched.comment}
                invalidText={formik.errors.comment}
                value={formik.values.comment}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </Stack>
            <Stack>
              <Button type="submit">Submit</Button>
              <Button buttonType="secondary" onClick={() => formik.resetForm()}>
                Reset
              </Button>
            </Stack>
          </form>
        </Card>
        <Card>
          <Stack vertical distribution="center">
            <Button
              buttonType="secondary"
              onClick={() => console.log(formik.values)}
            >
              Log values
            </Button>
            <Button
              buttonType="secondary"
              onClick={() => console.log(formik.touched)}
            >
              Log touched
            </Button>
            <Button
              buttonType="secondary"
              onClick={() => console.log(formik.errors)}
            >
              Log errors
            </Button>
          </Stack>
        </Card>
      </div>
    </div>
  );
};

export default FormikScreen;
