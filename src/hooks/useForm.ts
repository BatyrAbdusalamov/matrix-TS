import { useRef, useState } from 'react';

export interface FormObject {
  [key:string]: unknown
}
export type SetValue = <T>(key:string, value: T) => void;
type UseForm = <T extends FormObject>(form:T) => [T, SetValue]

export const useForm: UseForm = (form) => {
  const [, forceUpdate] = useState<null>(null);

  const stateRef = useRef(form);

  const setValue:SetValue = (key, value) => {
    (stateRef.current[key] as FormObject[typeof key]) = value; 
    forceUpdate(null);
  };

  return [stateRef.current, setValue];
};
