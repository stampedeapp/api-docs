import Parameter from '../parameter';

import type { ParameterProps } from '../parameter';

type PropertyProps = Omit<ParameterProps, 'required'>;


export const Property = ({ name, type, children }: PropertyProps) => {
  return (
    <Parameter 
      name={name} 
      type={type} 
      required={false}>
      {children}
    </Parameter>
  );
}
