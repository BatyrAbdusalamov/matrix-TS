import { ChangeEvent, FC } from "react";
import { MockFistOptions } from "../api/mock/firstOptions";
import { MockSecondOption } from "../api/mock/secondOptions";

export type OnChange = <T extends (MockSecondOption | MockFistOptions)>(value:T | null) => Promise<void>
type Option = MockFistOptions | MockSecondOption
interface SelectProps {
  name?: string;
  labelKey?: keyof (MockFistOptions & MockSecondOption);
  valueKey?: string;
  options: Option[];
  selected: Option | null;
  onChange: OnChange ;
}

const Select: FC<SelectProps> = (props) => {
  const {
    name = '',
    labelKey = 'name',
    valueKey = 'value',
    options,
    selected,
    onChange,
  } = props;

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const option = options.find((item) => item[valueKey as keyof typeof item] === value) ?? null;
    onChange(option);
  };

  return (
    <select name={name} onChange={handleChange}>
      <option defaultValue={selected?.value} value="empty">
        Select option
      </option>
      {options.map((item) => (
        <option
          key={item.id}
          value={item[valueKey as keyof typeof item]}
          defaultValue={selected?.value}
        >
          {item[labelKey as keyof typeof item]}
        </option>
      ))}
    </select>
  );
};

export default Select;
