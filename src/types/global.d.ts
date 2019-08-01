import React from 'react';
import * as Yup from 'yup';

declare enum FieldType {
  TEXT = 'TEXT',
  NUMERIC = 'NUMERIC',
  CHECKBOX = 'CHECKBOX',
  SELECT = 'SELECT',
  MULTI_SELECT = 'MULTI_SELECT',
  SEARCH_SELECT = 'SEARCH_SELECT',
  RADIO_BUTTON = 'RADIO_BUTTON',
  RADIO_INPUT = 'RADIO_INPUT',
  TEXT_AREA = 'TEXT_AREA',
  DATE_PICKER = ' DATE_PICKER',
}

declare enum ValidationRules {
  DEFAULT = 'DEFAULT',
  DATE = 'DATE',
  CURRENCY = 'CURRENCY',
}

interface IOptions {
  label: string;
  value: string;
}

interface IField {
  id: string;
  label: string;
  multiline?: boolean;
  options?: IOptions[];
  initialValue?: string | number | {};
  fieldType?: FieldType;
  disableOnUpdate?: boolean;
  validation:
    | Yup.MixedSchema
    | Yup.StringSchema
    | Yup.NumberSchema
    | Yup.BooleanSchema
    | Yup.DateSchema;
  type?: string;
  inputProps?: any;
}
