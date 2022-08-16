import { FormControl, Radio, RadioGroup } from '@mui/material';
import { Controller } from 'react-hook-form';

export interface FormInputProps {
  name: string;
  control: any;
  label: string;
  setValue?: any;
}

const options = [
  { value: '0' },
  { value: '1' },
  { value: '2' },
  { value: '3' },
];

export const FormInputRadio: React.FC<FormInputProps> = ({
  name,
  control,
  label,
}) => {
  const generateRadioOptions = () => {
    return options.map((option, index) => (
      <Radio sx={{ my: 1 }} key={index} value={option.value} />
    ));
  };

  return (
    <FormControl component="fieldset">
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, value },
          fieldState: { error },
          formState,
        }) => (
          <RadioGroup value={value} onChange={onChange}>
            {generateRadioOptions()}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};
