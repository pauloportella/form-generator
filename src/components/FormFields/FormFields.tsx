import React from 'react';
import { FormField } from '../FormField/FormField';
import { FormikProps } from 'formik';
import { IField } from 'types';

export interface FormFieldsProps {
  fields: IField[];
  formikProps: FormikProps<any>;
  labelComponent: any;
}

export function FormFields({
  fields,
  formikProps,
  labelComponent: Label,
}: FormFieldsProps): React.ReactElement {
  const hasLabel = Boolean(Label);
  const {
    values,
    handleChange,
    handleBlur,
    setFieldValue,
    setFieldTouched,
  } = formikProps;

  return (
    <>
      {fields.map(
        ({
          id,
          label,
          options,
          component,
          type,
          hasCustomOnChange = false,
          hasCustomOnBlur = false,
          gridItem,
        }) => {
          const onChange = hasCustomOnChange ? setFieldValue : handleChange;
          const onBlur = hasCustomOnBlur ? setFieldTouched : handleBlur;

          // multiline = false,
          // const isSelect = Boolean(options && options.length);

          return (
            <React.Fragment key={id}>
              <GridItem gridItem={gridItem}>
                {hasLabel ? (
                  <Label htmlFor={id}>{label}</Label>
                ) : (
                  <label htmlFor={id}>{label}</label>
                )}
                <FormField
                  id={id}
                  label={label}
                  component={component}
                  // select={isSelect}
                  // multiline={multiline}
                  value={values[id]}
                  options={options}
                  onChange={onChange}
                  onBlur={onBlur}
                  type={type}
                />
              </GridItem>
            </React.Fragment>
          );
        }
      )}
    </>
  );
}

interface GridItemProps {
  gridItem: any;
  children: React.ReactNode;
}

const GridItem = ({ gridItem, children }: GridItemProps) =>
  gridItem
    ? React.createElement(gridItem, {
        children,
      })
    : React.createElement('div', { children });
