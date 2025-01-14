type ValueType = string | number | boolean;

export interface FormComponentProps {
  value: ValueType;
  labelText: string;
  inputName: string;
  fieldsetTitle?: string;
}

export enum FormComponentEnum {
  TEXT = 'text',
  NUMBER = 'number',
  SELECT = 'select',
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
  TEXTAREA = 'textarea',
}
