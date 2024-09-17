import { Select } from '@radix-ui/themes';
import type { TCustomSelectProps } from '../types';
import { useCallback } from 'react';

const CustomSelect = ({ onChange, items, selectId, value }: TCustomSelectProps) => {
  const handleValueChange = useCallback(
    (value: string) => {
      onChange(value, selectId);
    },
    [selectId, onChange],
  );

  return (
    <Select.Root onValueChange={handleValueChange} value={value}>
      <Select.Trigger />
      <Select.Content>
        <Select.Group>
          <Select.Label>Select currency</Select.Label>
          <Select.Separator />
          {items.map((item, i) => (
            <Select.Item key={i} value={item}>
              {item}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default CustomSelect;
