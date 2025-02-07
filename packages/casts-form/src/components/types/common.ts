// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ValueType = any;

export type DateOptions = {
  format: string;
  strictMode: boolean;
  delimiters: string[];
};

export type ValidateStatus = 'error' | 'warning' | 'success';

export type ValidateRule = {
  date?: boolean | DateOptions;

  url?: boolean;

  email?: boolean;

  required?: boolean;

  whitespace?: boolean;

  boolean?: boolean;

  max?: number;

  min?: number;

  len?: number;

  number?: boolean;

  enum?: string[];

  idcard?: boolean;

  telnumber?: boolean;

  pattern?: RegExp;

  validator?: (value: ValueType, formValues?: ValueType) => boolean;

  message?: string;

  status?: ValidateStatus;
};

export type ValidateError = {
  type: ValidateStatus;

  message: string;
};
