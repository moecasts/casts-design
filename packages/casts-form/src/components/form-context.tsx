import { createContext, ReactNode, useContext } from 'react';
import { UseFormReturn } from 'react-hook-form';

import { BaseFormProps } from './types';

export type FormContextProps = UseFormReturn & BaseFormProps;

export const FormContext = createContext<
  FormContextProps | Partial<FormContextProps>
>({});

export type FormProviderProps = FormContextProps & {
  children: ReactNode;
};

export const FormProvider = (props: FormProviderProps) => {
  const { children, ...rest } = props;
  return <FormContext.Provider value={rest}>{children}</FormContext.Provider>;
};

export const useFormContext = (): FormContextProps =>
  useContext(FormContext) as unknown as FormContextProps;
