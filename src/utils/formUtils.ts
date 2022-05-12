import { FieldInputProps, FormikProps } from 'formik';
import { SchemaDescription, SchemaObjectDescription } from 'yup/lib/schema';

type Props<T> = {
  id: string;
  labelText: string;
  invalid: boolean;
  invalidText?: string;
} & FieldInputProps<T>;

export const getFormFieldProps = <T>(
  schemaDescr: SchemaObjectDescription,
  formik: FormikProps<T>,
  fieldName: Extract<keyof T, string>
): Props<T[typeof fieldName]> => {
  // QUEST: Formik error also allow arrays, should we support it?
  const error = formik.errors[fieldName] as string | undefined;

  // QUEST: Is enforcing label statically possible?
  // QUEST: Can type assertion be avoided here?
  const label = (schemaDescr.fields[fieldName] as SchemaDescription).label;
  if (!label) {
    throw new Error(`Missing label on '${fieldName}' field`);
  }

  return {
    id: fieldName,
    labelText: label,
    invalid: !!error && !!formik.touched[fieldName],
    invalidText: error,
    ...formik.getFieldProps(fieldName),
  };
};
