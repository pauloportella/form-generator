import React from 'react';
import { FormField } from 'components';
import { FormikProps } from 'formik';

export interface IFormFieldsProps {
  fields: IField[];
  formikProps: any ;
  isUpdate: boolean;
}

export default function FormFields({
  fields,
  formikProps,
  isUpdate,
}: IFormFieldsProps): React.ReactElement {
  const { values, handleChange, handleBlur } = formikProps;

    return (<>
        

        {fields.map(({
             id,
             label,
             fieldType = FieldType.TEXT,
             options,
             multiline = false,
             type,
             inputProps,
            disableOnUpdate = false,
             
        }) => {
            const isSelect = Boolean(options && options.length)


            return (
                <FormField
                key={id}
                id={id}
                label={label}
                select={isSelect}
                multiline={multiline}
                value={values[id]}
                options={options}
                component={getField(fieldType)}
                onChange={handleChange}
                onBlur={handleBlur}
                type={type}
                inputProps={inputProps}
                disabled={isUpdate && disableOnUpdate}
            )
        })}
    
    
    
    
    
    
    </>)
}
